import { useContext } from 'react';
import { SimilarBondsBlotter } from './AdaptableAgGrid';
import { IOConnectContext } from '@interopio/react-hooks';

function App() {
  const io = useContext(IOConnectContext);

  (window as any).io = io;

  return (
    <div className="selection:bg-green-900">
      <SimilarBondsBlotter></SimilarBondsBlotter>
    </div>
  );
}

export default App;
