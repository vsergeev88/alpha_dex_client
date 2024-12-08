import { RootStoreContext } from '@shared/stores/useStores';
import CreateOrder from '@pages/create-order';
import './App.css';
import { rooStore } from '@shared/stores/rootStore';

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
