import React from "react";
import s from "./LoginForm.module.css";
import { inject } from "mobx-react";

@inject("MainStore")
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    console.log(this.input);
  }
  handleClick = () => {
    const { handleLoginClick } = this.props;
    const newUserName = this.input.current.value;
    this.props.MainStore.changeUserName(newUserName);
    handleLoginClick(true);
  };

  render() {
    return (
      <div className={s.enter}>
        <input type="text" placeholder="Введите имя" ref={this.input} />
        <button onClick={this.handleClick}>Войти</button>
      </div>
    );
  }
}

export default LoginForm;
