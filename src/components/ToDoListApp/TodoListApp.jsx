import React, { Component } from "react";
import InputTask from "../InputTask/InputTask";
import styles from "./TodoListapp.css";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);

    this.state ={
        taches: [],
        description: ''
    }
  }
  addTache =() => {
    if(this.state.taches.filter(item=>item.description.toUpperCase()===this.state.description.toUpperCase()).length>0){
        alert('Tache existe deja');
        return;
    }

    this.setState({taches: [...this.state.taches, {description: this.state.description, completed:false}]})
  }
  render() {
    return <div>
        <InputTask des={this.state.description}  onAddClick={this.addTache} onChangeDesc={(e)=> this.setState({description: e.target.value})} />
    </div>;
  }
}
