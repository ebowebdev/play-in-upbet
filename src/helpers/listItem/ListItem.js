import React from 'react'
import './listItem.css'

function ListItem(props) {
  return (
    <li class='listItem'>
      {props.name}
    </li>
  )
}

export default ListItem