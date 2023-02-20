import React, { memo, useState } from 'react'

const Header = memo((props) => {
    const [text, setText] = useState('')
    const { addTodo } = props

    const onAddTodo = (event) => {
        if (event.key === 'Enter' && text) {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }

    return (
        <header className="header">
            <h1>Todos</h1>
            <input
                className="new-todo"
                placeholder="Add your todo here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onAddTodo}
            />
        </header>
    )
})

export default Header




