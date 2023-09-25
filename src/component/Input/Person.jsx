import { useState } from "react"

function Person ({names}) {

   
    const [searchName, setSearchName] = useState('');
    const [highlightedName, setHighlightedName] = useState('');

    const handleInputChange = (e) => {
        setSearchName(e.target.value);
      };

    const handleSearch = () => {
    if (names.includes(searchName)) {
        setHighlightedName(searchName);
    } else {
        setHighlightedName('');
    }
    };

    
    return (
        <div>
            <input onChange={handleInputChange}/>
            <button onClick={handleSearch}>Click</button>
            <div>
                <span style={{ color: searchName === highlightedName ? 'red' : 'black' }}>
                    {searchName}
                </span>
            </div>
        </div>
    )
}

export default Person