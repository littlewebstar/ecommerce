import React from 'react';

const ListItem = (props) =>  {
  const listStyle = {
    border:'2px solid black', 
    margin: '10px', 
    textAlign: 'left'
  }

  const handleEditButton = () => {
    props.edit(props.index)
  }

  return (
    <li style={listStyle}>
          {props.item}
          <button onClick={handleEditButton}>Edit</button>
          <button>Delete</button>
    </li>
  )
};

export default ListItem;