import { observable, action, computed, makeObservable } from "mobx";
export default class MainStore {
  constructor() {
    makeObservable(this);
  }

  @observable userFullName = "James Bond";
  @observable coursesCount = 0;
  @observable arrayCount = [];
  @observable mystyle = {
    backgroundColor: "green",
  };
  @action changeUserName(newUserName) {
    this.userFullName = newUserName;
  }

  @action pushElementArray(id) {
    if (this.arrayCount.length <= 9) {
      if (!this.arrayCount.includes(id)) {
        this.arrayCount.push(id);
      }
    } else {
      alert("Вы проверили всех студентов!");
    }

    // this.coursesCount += 1;
  }

  @computed get arrayCountLength() {
    return `${this.arrayCount.length}`;
  }
}
