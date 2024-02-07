import React, { useEffect, useState } from 'react'

function TodoForm (props) {
  const { addItemToList, currentItem } = props;
  const [input, setInput] = useState('')
  const [invalidInputFlag, setInvalidInputFlag] = useState(false)
  
  useEffect(() => {
    if (currentItem?.id) {
      setInput(currentItem.item)
    }
  },[currentItem])

  const handleOnInputchange = (e) => {
    if (currentItem?.id) {
      currentItem.item = e.target.value
      setInput(e.target.value)
    } else {
      setInput(e.target.value)
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (input.length === 0) {
      setInvalidInputFlag(true)
      setTimeout(() => {
        setInvalidInputFlag(false)
      },500)
    }else {
      setInvalidInputFlag(false)
      addItemToList(input)
      setInput('')
    }
  }
  return (
    <form className="TodoForm" onSubmit={(e) => handleOnSubmit(e)}>
      <input type="text" value={currentItem ? currentItem?.item : input} onChange={(e) => handleOnInputchange(e)} className={`todo-input ${invalidInputFlag ? 'shake' : ''}`} placeholder='What is the task today?' />
      <button type="submit" className='todo-btn'>{currentItem?.id ? 'Update Task' : 'Add Task'}</button>
    </form>
  )
}

export default TodoForm