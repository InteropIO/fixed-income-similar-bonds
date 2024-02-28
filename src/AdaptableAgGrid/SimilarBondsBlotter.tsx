import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { Root } from 'react-dom/client';
import { GridOptions } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import AdaptableReact, {
  AdaptableApi,
  AdaptableOptions,
  ColumnFilter,
} from '@adaptabletools/adaptable-react-aggrid';
import { columnDefs, defaultColDef } from './columnDefs';
import { rowData, SimilarBond } from './rowData';
import { agGridModules } from './agGridModules';
import { renderReactRoot } from '../react-18-utils';
import { useIOConnect } from '@interopio/react-hooks';

const renderWeakMap: WeakMap<HTMLElement, Root> = new WeakMap();

const Revision = 2;

export const SimilarBondsBlotter = () => {
  const gridOptions = useMemo<GridOptions<SimilarBond>>(
    () => ({
      defaultColDef,
      columnDefs,
      rowData,
      sideBar: true,
      suppressMenuHide: true,
      enableRangeSelection: true,
      enableCharts: true,
    }),
    [],
  );
  const adaptableOptions = useMemo<AdaptableOptions<SimilarBond>>(
    () => ({
      // licenseKey: import.meta.env.VITE_ADAPTABLE_LICENSE_KEY,
      licenseKey:
        'AppName=Interop-Universal|Owner=Interop|StartDate=2024-02-19|EndDate=2024-08-19|Ref=AdaptableLicense|TS=1708358445822|C=3338536950,2753137919,1260976079,3157789641,3548769197,2612951722,1814935034',
      primaryKey: 'Id',
      autogeneratePrimaryKey: true,
      userName: 'Test User',
      adaptableId: 'AdaptableSimilarBonds',
      filterOptions: {
        clearFiltersOnStartUp: true,
      },
      predefinedConfig: {
        Dashboard: {
          DashboardTitle: 'Similar Bonds',
        },
        Theme: {
          CurrentTheme: 'dark',
        },
        FormatColumn: {
          Revision,
          FormatColumns: [
            {
              Scope: {
                ColumnIds: ['Maturity'],
              },
              DisplayFormat: {
                Formatter: 'DateFormatter',
                Options: {
                  Pattern: 'MM/dd/yyyy',
                },
              },
            },
          ],
        },
      },
    }),
    [],
  );

  const adaptableApiRef = React.useRef<AdaptableApi>();
  const ISIN_CONTEXT = 'ISIN_CONTEXT';

  useEffect(() => {
    async function setMyWorkspaceId() {
      const inWsp = await (window as any).io.workspaces?.inWorkspace();
      if (!inWsp) {
        return;
      }

      const myWorkspace = await (window as any).io.workspaces?.getMyWorkspace();
      await (window as any).io.windows.my().updateContext({
        workspaceId: myWorkspace?.id,
      });
    }

    setMyWorkspaceId();
  }, []);

  useIOConnect(async (io) => {
    const workspaceId = (await io.windows.my().getContext()).workspaceId;

    const workspace =
      (await io.workspaces?.getAllWorkspaces())?.find(
        ({ id }) => id === workspaceId,
      ) || (await io.workspaces?.getMyWorkspace());
    if (!workspace) return;

    return workspace.onContextUpdated((context: any) => {
      const adaptableApi = adaptableApiRef.current;

      if (adaptableApi) {
        if (ISIN_CONTEXT in context) {
          const isinValue = context[ISIN_CONTEXT].id?.ISIN;
          const isinFilter: ColumnFilter = {
            ColumnId: 'ISIN',
            Predicate: {
              PredicateId: 'Is',
              Inputs: [isinValue],
            },
          };
          adaptableApi.filterApi.setColumnFilters([isinFilter]);
        }
      }
    });
  });

  return (
    <div
      className={'flex h-screen flex-col'}
      style={
        {
          '--ab-dashboard-header__background': 'hsl(328deg, 50%, 30%)',
        } as React.CSSProperties
      }
    >
      <AdaptableReact
        className={'flex-none'}
        gridOptions={gridOptions}
        adaptableOptions={adaptableOptions}
        renderReactRoot={(node, container) =>
          renderReactRoot(node, container, renderWeakMap)
        }
        onAdaptableReady={({ adaptableApi }) => {
          adaptableApiRef.current = adaptableApi;
        }}
      />
      <div className="ag-theme-alpine-dark flex-1">
        <AgGridReact gridOptions={gridOptions} modules={agGridModules} />
      </div>
    </div>
  );
};
