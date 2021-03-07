import React from "react";
import StyleNavigator from "./Navigator.module.css";
import { IoAccessibility } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscBroadcast } from "react-icons/vsc";
const buttonArray = [
  {
    text: "ФИО",
    icon: <IoAccessibility />,
    title: "Ефремов Михаил Андреевич",
  },
  {
    text: "Группа",
    icon: <AiOutlineUsergroupAdd />,
    title: "Ир1-17",
  },
  {
    text: "Возраст",
    icon: <VscBroadcast />,
    title: "19 лет",
  },
];

class Navigator extends React.Component {
  render() {
    return (
      <div className={StyleNavigator.navigator}>
        {buttonArray.map((button) => (
          <div>
            {button.icon}
            <button
              onClick={() => {
                this.props.sendValue(button.title);
              }}
            >
              {button.text}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Navigator;
