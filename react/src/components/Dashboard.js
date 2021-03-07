import React from "react";
import StyleDashboard from "./Dashboard.module.css";
class Dashboard extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  };

  render() {
    return (
      <div className={StyleDashboard.dashboard}>
        <h2 className={StyleDashboard.littering}>Dashboard</h2>
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
