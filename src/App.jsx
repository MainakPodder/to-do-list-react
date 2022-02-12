import React, { useState } from 'react';
import List from "./List";
import "./style.css";
const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    }
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrayElement, index) => {
                return id !== index;
            })
        });
    }
    return (
        <>
            <div className='mainDiv'>
                <div className='centerDiv'>
                    <h1>ToDo List</h1>
                    <input type="text" placeholder='Add Items...' onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItems} className="add"><i class="fa-solid fa-circle-plus"></i></button>
                    <ul>
                        {items.map((itemValue, index) => {
                            return <List key={index} id={index} text={itemValue} onSelect={deleteItems} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App