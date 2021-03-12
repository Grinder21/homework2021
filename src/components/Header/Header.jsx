import React from "react";
import { inject, observer } from "mobx-react";
import StyleHeader from "./Header.module.css";

@inject("MainStore")
@observer
class Header extends React.Component {
  render() {
    const { MainStore } = this.props;
    console.log("Store = ", this.props);
    return (
      <div className={StyleHeader.headerComponent}>
        <h2>{MainStore.userFullName}</h2>
        <h3>Проверено курсовых работ:{MainStore.arrayCount.length}</h3>
      </div>
    );
  }
}

export default Header;
