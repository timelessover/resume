import { action, makeAutoObservable, observable } from "mobx";
class Store {
  constructor() {
    makeAutoObservable(this, {
      count: observable,
      increase: action.bound,
      reset: action.bound,
    });
  }

  count = 0;

  increase() {
    this.count += 1;
  }
  reset() {
    this.count = 0;
  }
}

export default new Store();
