import { useState } from "react";

function Button () {
const [randColor, setRandColor] = useState('')

 function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

   const changeColor = () => {
    setRandColor(getRandomRgbColor)
  };
    return (
        <div>
            <button onClick={changeColor}>Click</button>
            <div style={{background: randColor, width: '100px', height: '100px'}}></div>
        </div>
    )
}

export default Button;