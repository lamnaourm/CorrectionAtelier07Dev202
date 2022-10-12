import React from 'react'
import styles from './task.css'

export default function Task(props) {
  return (
    <div>
        <h2>{props.tache.completed ? <del>{props.tache.description}</del>: props.tache.description }</h2>
        <button onClick={props.onTerminerClick}>Terminer</button>
        <button onClick={props.onEncoursClick}>En cours</button>
        <button onClick={props.onDeleteClick}>Supprimer</button>
    </div>
  )
}
