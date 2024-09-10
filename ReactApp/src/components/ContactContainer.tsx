import Contact from './Contact';
import {useEffect, useState} from "react";

function ContactContainer() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch data from the Spring Boot API
        fetch('http://localhost:5678/makinapi/getMessages?status=Close')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON from the response
            })
            .then(data => {
                setMessages(data); // Set the fetched data to the messages state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty array ensures this runs only once when the component mounts

    return (
        <div>
            {/* Pass the fetched messages as a prop to Contact */}
            <Contact messages={messages}/>
        </div>
    );
}

export default ContactContainer;
