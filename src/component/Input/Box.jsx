import { useState } from 'react';
import './Box.css';
function Box () {
const [click, setClick] = useState(50)
const [clickSize, setClickSize] = useState(true)

const btnClick = () => {
    if(clickSize) {
        if (click < 150) {
            setClick(click + 25)
        } else {
            setClickSize(false)
        } 
    } else {
        if (click > 50) {
            setClick(click - 25);
        } else{
            setClickSize(true)
        }
    }
}
    return (
        <div>
            <div onClick={btnClick} className='box' style={{width: click + 'px', height: click + 'px'}}></div>
        </div>
    )   
}

export default Box;