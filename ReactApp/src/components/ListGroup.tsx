function ListGroup() {
    const items = [
        'New Delhi',
        'New Yok',
        'New Jersey'
    ];

    const getMsg = () => {
        return items.length === 0 && <p>No item found</p>;
    }

    return (
        <>
            <h1>List</h1>
            {getMsg()}
            <ul className="list-group">
                {items.map(item =>
                    <li key={item} className="list-group-item">{item}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;