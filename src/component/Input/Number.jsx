import { useState } from "react";

function Number ({numbers}) {

    const [checkNum, setCheckNum] = useState('')
    
    const handleNumClick = () => {
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const result = max * min;
        setCheckNum(result)
    }

    return (
        <div>
            <button onClick={handleNumClick}>Submit</button>
            <div>
                <span>{checkNum}</span>
            </div>
        </div>
    )
}

export default Number;