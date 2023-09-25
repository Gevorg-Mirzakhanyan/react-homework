function Table ({list}) {
    return (
        <div>
            <tbody>
            {list.map((row) => (
                <tr key={row}>
                    <td style={{padding:'10px'}}>{row.firstName}</td>
                    <td style={{padding:'10px'}}>{row.lastName}</td>
                    <td style={{padding:'10px'}}>{row.age}</td>
                </tr>
            ))}   
            </tbody>
       </div>
    )
}

export default Table;