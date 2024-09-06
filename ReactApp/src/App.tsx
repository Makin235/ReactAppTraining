import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
    let items = [
        'New Delhi',
        'New Yok',
        'New Jersey'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return (
        <>
            <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
            <div>
                <Alert>
                    Hello <b>World</b>
                </Alert>
            </div>
        </>
    )
}

export default App;