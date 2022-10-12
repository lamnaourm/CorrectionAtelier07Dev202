import React, { Component } from "react";
import InputTask from "../InputTask/InputTask";
import Task from "../Task/Task";
import styles from "./TodoListapp.css";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taches: [],
      description: "",
    };
  }
  addTache = () => {
    if (
      this.state.taches.filter(
        (item) =>
          item.description.toUpperCase() ===
          this.state.description.toUpperCase()
      ).length > 0
    ) {
      alert("Tache existe deja");
      return;
    }

    this.setState({
      taches: [
        ...this.state.taches,
        { description: this.state.description, completed: false },
      ],
    });
  };
  termineTache = (e, des) => {
    let Mestaches = this.state.taches.map((item) => {
      if (item.description === des) return { ...item, completed: true };
      else return item;
    });
    this.setState({ taches: Mestaches });
  };
  encoursTache = (e, des) => {
    let Mestaches = this.state.taches.map((item) => {
      if (item.description === des) return { ...item, completed: false };
      else return item;
    });
    this.setState({ taches: Mestaches });
  };
  deleteTache = (e, des) => {
    if (window.confirm("Voulez-vous supprimer cette tache ? ")) {
      let Mestaches = this.state.taches.filter(
        (item) => item.description !== des
      );
      this.setState({ taches: Mestaches });
    }
  };
  render() {
    return (
      <div>
        <InputTask
          des={this.state.description}
          onAddClick={this.addTache}
          onChangeDesc={(e) => this.setState({ description: e.target.value })}
        />

        {this.state.taches.map((item, index) => (
          <Task
            key={index}
            tache={item}
            onTerminerClick={(e) => this.termineTache(e, item.description)}
            onEncoursClick={(e) => this.encoursTache(e, item.description)}
            onDeleteClick={(e) => this.deleteTache(e, item.description)}
          />
        ))}
      </div>
    );
  }
}
