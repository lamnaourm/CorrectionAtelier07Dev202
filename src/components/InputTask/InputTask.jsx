import React from 'react'
import styles from './InputTask.css'

export default function InputTask(props) {
  return (
    <div>
        <input type="text" name="des" id="des" placeholder='saisir une description ....' value={props.des} onChange={props.onChangeDesc} />
        <button onClick={props.onAddClick}>Ajouter</button>
    </div>
  )
}
