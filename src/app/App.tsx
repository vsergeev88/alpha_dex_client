import { RootStoreContext } from '@features/rootStore/useStores';
import CreateOrder from '@pages/create-order';
import { rooStore } from '../features/rootStore/rootStore';

function App() {
  return (
    <RootStoreContext.Provider value={rooStore}>
      <div data-theme="synthwave">
        <CreateOrder />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
