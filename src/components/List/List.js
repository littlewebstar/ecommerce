import React from 'react';
import ListItem from '../ListItem'

const List = (props)=> {

  const handleEdit = (index) => {
    props.edit(index)
  }
  
  return (
    <ol style={{border: '1px solid navy'}}>
      {
        props.list.map((item, i) => (
          <ListItem 
            key={i}
            index={i} 
            item={item}
            edit={handleEdit}
           />
        ))
      }
    </ol>
  )

};

export default List;