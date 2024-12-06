import { RootStoreContext } from '@shared/stores/useStores';
import CreateOrder from '@pages/create-order';
import './App.css';
import { rooStore } from '@shared/stores/rootStore';

function App() {
  return (
    <RootStoreContext.Provider value={rooStore}>
      <CreateOrder />
    </RootStoreContext.Provider>
  );
}

export default App;
