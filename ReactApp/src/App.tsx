import ContactContainer from "./components/ContactContainer";
import {useState} from "react";

function App() {
    let items = [
        'New Delhi',
        'New Yok',
        'New Jersey'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    const [alertVisible, setAlertVisible] = useState(false);

    return (
        <>
            {/*<div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>*/}
            {/*<div>*/}
            {/*    <Button color={'secondary'} onClick={() => setAlertVisible(true)}>*/}
            {/*        My Button*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*{alertVisible && <div>*/}
            {/*    <Alert onClose={() => setAlertVisible(false)}>*/}
            {/*        Hello <b>World</b>*/}
            {/*    </Alert>*/}
            {/*</div>}*/}
            <div>
                <ContactContainer/>
            </div>
        </>
    )
}

export default App;