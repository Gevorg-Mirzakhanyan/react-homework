import { useState } from "react";

function Input2 () {
    const [change, setChange] = useState('')

    const handleChangeInput = (e) => {
        setChange(e.target.value)
    }

    const [number, setNumber] = useState('')

     const handleClickBtn = () => {
        const newNumber = change
        setNumber(newNumber)
     }

    return (
        <div>
            <label>
                <input type="number" onChange={handleChangeInput} />
            </label>
            <button onClick={handleClickBtn}>Click</button>
           
            <div style={number % 2 === 0 ? { color: 'red' }: {color: ''}}> {number}</div>
        </div>
    )
}

export default Input2;