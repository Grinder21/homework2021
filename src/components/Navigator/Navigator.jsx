import React from "react";
import s from "./Navigator.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Name from "./Files/Name";
import Group from "./Files/Group";
import Age from "./Files/Age";
import People from "../People";
import { NavLink } from "react-router-dom";
import Courses from "../Courses";

class Navigator extends React.Component {
  state = {
    name: "Адексеев Аркадий Ваелерьевич",
    group: "Ир1-17",
    age: "19",
    studId: '',
  }



  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  };

  parentFunc = (id) => {
    console.log("Это функция родителя");
    this.setState({
      studId: id,
    });
  };

  // studentId = (id) => {
  //   this.setState({studId: id})
  // }

  render() {
    return (
      <BrowserRouter>
        <div className={s.navigator}>
          <nav>
            <NavLink to="/name">Name</NavLink>
            <NavLink to="/group">Group</NavLink>
            <NavLink to="/age">Age</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/courses">Courses</NavLink>
          </nav>
          <div className={s.dashboard}>
            <Route
              path="/name"
              render={() => <Name state={this.state.name} />}
            />
            <Route
              path="/group"
              render={() => <Group state={this.state.group} />}
            />
            <Route path="/age" render={() => <Age state={this.state.age} />} />
            <Route
              path="/people"
              render={() => <People parentFunc={this.parentFunc} />}
            />
            <Route
              path="/courses"
              render={() => <Courses state={this.state.studId} />}
            />
            <div className={s.btn}>
              <button onClick={this.handleClick}>Выйти</button>
            </div>
          </div>

          {/* {buttonArray.map((button) => (
          <div>
            <button>{button.icon}{button.text}</button>
          </div>
        ))} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigator;
