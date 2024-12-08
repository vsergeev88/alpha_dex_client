import { makeAutoObservable } from 'mobx';

class TokenRateStore {
  tokenRate: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTokenRate(rate: number) {
    this.tokenRate = rate;
  }
}

export default TokenRateStore;
