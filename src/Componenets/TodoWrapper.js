import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import TodoForm from './TodoForm';

function TodoWrapper () {
  const [listItems, AddItemsToList] = useState([])
  const [currentItem, setCurrentItem] = useState(null)
  const addItemToList = (item) => {
    if (currentItem?.id) {
      const index = listItems.findIndex(item => item.id === currentItem.id)
      if (index > -1) {
        listItems[index].item = item
        AddItemsToList(listItems)
        setCurrentItem(null)
      }
    } else {
      const listItem = {
        id: listItems.length + 1,
        item,
        isCompleted: false
      }
      AddItemsToList([...listItems, listItem])
    }
  }
  const handleDeleteClick = (todoItem) => {
    const confirmation = window.confirm("Are you sure you want to delete this Item")
    if (confirmation) {
      const updatedItems = listItems.filter(item => item.id !== todoItem.id)
      AddItemsToList(updatedItems)
      setCurrentItem(null)
    }
  }
  const handleEditClick = todoItem => {
    setCurrentItem(todoItem)
  }
  const markItemAsCompleted = (event, todo) => {
    if (event.target.classList.contains('Todo')) {
      todo.isCompleted = !todo.isCompleted
      AddItemsToList([...listItems.filter(item => item.id !== todo.id), todo].sort((first, next) => first - next))
    }
  }
  return (
    <div className="TodoWrapper">
      <h1>Add your Tasks</h1>
      <TodoForm addItemToList={addItemToList} currentItem={currentItem} />
      {listItems.sort().map((todo, index) =>
      (
        <div onClick={e => markItemAsCompleted(e, todo)} className="Todo" key={index}>
          <p className={`${todo.isCompleted ? 'completed' : ""}`} >{todo.item}</p>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={e => handleEditClick(todo)} />
            <FontAwesomeIcon onClick={(e) => handleDeleteClick(todo)} icon={faTrash} />
          </div>
        </div>
      )
      )}
    </div>
  );
}

export default TodoWrapper