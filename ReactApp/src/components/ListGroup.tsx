import {MouseEvent, useState} from "react";

function ListGroup() {
    let items = [
        'New Delhi',
        'New Yok',
        'New Jersey'
    ];

    //Hook: data or state that changes over time.
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}>
                        {item}
                    </li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;