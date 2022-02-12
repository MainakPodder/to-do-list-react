import React from 'react'

const List = (props) => {
    return (
        <>
            <div className='toDoStyle'>
                <i className="fa-solid fa-trash-can" onClick={() => { props.onSelect(props.id) }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default List