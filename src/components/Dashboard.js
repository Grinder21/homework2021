import React from "react";
import StyleDashboard from "./Dashboard.module.css";
class Dashboard extends React.Component {
  state = {
    users: [],
    error: "",
    studentId: "",
  };
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  };

  render() {
    return (
      <div className={StyleDashboard.dashboard}>
        <div>{this.props.title}</div>
        <button
          className={StyleDashboard.mainButton}
          onClick={this.handleClick}
        >
          Выйти
        </button>
      </div>
    );
  }
}
export default Dashboard;
