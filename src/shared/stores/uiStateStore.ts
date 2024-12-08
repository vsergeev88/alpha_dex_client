import { action, makeAutoObservable } from 'mobx';

class UiStateStore {
  // tokenInputRef: React.RefObject<HTMLInputElement> | null;
  // dollarInputRef: React.RefObject<HTMLInputElement> | null;
  // constructor() {
  //   this.tokenInputRef = null;
  //   this.dollarInputRef = null;
  //   makeAutoObservable(this);
  // }
  // @action
  // setTokenInputRef(tokenRef: React.RefObject<HTMLInputElement>) {
  //   this.tokenInputRef = tokenRef;
  // }
  // @action
  // setDollarInputRef(dollarRef: React.RefObject<HTMLInputElement>) {
  //   this.dollarInputRef = dollarRef;
  // }
}
export const uiStateStore = new UiStateStore();

export default UiStateStore;
