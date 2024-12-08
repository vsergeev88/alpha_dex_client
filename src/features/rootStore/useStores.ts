import { createContext, useContext } from 'react';
import RootStore from './rootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('useStores must be used within a StoreProvider');
  }

  return context;
};
