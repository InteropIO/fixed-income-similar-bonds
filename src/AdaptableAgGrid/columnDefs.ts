import { ColDef } from '@ag-grid-community/core';
import { SimilarBond } from './rowData';

export const defaultColDef: ColDef = {
  filter: true,
  floatingFilter: true,
  sortable: true,
  resizable: true,
  editable: true,
  enableRowGroup: true,
};

export const columnDefs: ColDef<SimilarBond>[] = [
  {
    field: 'Id',
    headerName: 'ID',
    type: 'abColDefNumber',
    hide: true,
  },
  {
    field: 'ISIN',
    headerName: 'Isin',
    type: 'abColDefString',
  },
  {
    field: 'Description',
    headerName: 'Description',
    type: 'abColDefString',
  },
  {
    field: 'Security',
    headerName: 'Security',
    type: 'abColDefString',
  },
  {
    field: 'Yield',
    headerName: 'Yield',
    type: 'abColDefNumber',
  },
  {
    field: 'Maturity',
    headerName: 'Maturity',
    type: 'abColDefDate',
  },
  {
    field: 'TransactionType',
    headerName: 'Transaction Type',
    type: 'abColDefString',
  },
  {
    field: 'Venue',
    headerName: 'Venue',
    type: 'abColDefString',
  },
  {
    field: 'Broker',
    headerName: 'Broker',
    type: 'abColDefString',
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'abColDefNumber',
  },
  {
    field: 'Currency',
    headerName: 'Currency',
    type: 'abColDefString',
  },
  {
    field: 'IssuerLEI',
    headerName: 'Issuer LEI',
    type: 'abColDefString',
  },
  {
    field: 'LEI',
    headerName: 'LEI',
    type: 'abColDefString',
  },
  {
    field: 'Industry',
    headerName: 'Industry',
    type: 'abColDefString',
  },
];
