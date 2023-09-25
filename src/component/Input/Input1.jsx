import { useState } from 'react'

function Input () {
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [size, setSize] = useState('')

    const btnClick = ()=> {
        const newWidth = width;
        const newHeight = height;
        setSize ({
            width: newWidth,
            height: newHeight
        })
    }

    const changeSizeHeight = (e) => {
        setHeight(e.target.value)
    }

    const changeSizeWidth = (e) => {
        setWidth(e.target.value)
    }

    return(
        <div className="input">
            <label>
                <input type='number' onChange={changeSizeWidth} />
            </label>
            <label>
            <input type='number' onChange={changeSizeHeight} />
            </label>
                <button onClick={btnClick} >Click</button>
            <div style={
                 {background: 'red', width: size.width  +  'px', height: size.height + 'px'} }>
            </div>
        </div>
    )
}

export default Input