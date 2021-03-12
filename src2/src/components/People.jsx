import React from "react";
import { Table } from "antd";
import PeopleStyle from "./People.module.css";
import "antd/dist/antd.css";
import { inject, observer } from "mobx-react";
let url = "https://jsonplaceholder.typicode.com/users";

@inject("MainStore")
@observer
class People extends React.Component {
  state = {
    users: [],
    error: "",
    studId: "",
  };

  columns = [
    {
      title: "Имя студента",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Имя пользователя",
      dataIndex: "username",
      key: "username",
    },
  ];

  componentDidMount = async () => {
    let users = [];
    try {
      const result = await fetch(url);
      users = await result.json();
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

    this.setState({
      users,
    });
  };

  //   setUserId = (id) => {
  //     this.setState({
  //       studId: id,
  //     });
  //   };

  render() {
    const { error, users } = this.state;
    const { MainStore } = this.props;

    return (
      <div className={PeopleStyle.mainDiv}>
        <h1>Список студентов</h1>
        <div>Вы выбрали студента под id: {this.state.studId}</div>
        <h2>{error}</h2>
        <Table
          onRow={(record) => {
            return {
              onClick: (event) => {
                let id = record.id;
                this.setState({ studId: id });
                MainStore.pushElementArray(id);
                console.log(MainStore);
                this.props.parentFunc({ id });
              }, // click row
            };
          }}
          dataSource={users}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default People;
