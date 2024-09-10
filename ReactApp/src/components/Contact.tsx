import React from 'react';

// @ts-ignore
function Contact({messages}) {
    return (
        <div>
            <h2>Messages List</h2>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <ul className="list-group">
                        <li className="list-group-item">
                            Contact ID: {message.contactId} |
                            Name: {message.name} |
                            Mobile Number: {message.mobileNum} |
                            Email: {message.email} |
                            Subject: {message.subject} |
                            Message: {message.message} |
                            Status: {message.status}
                        </li>
                    </ul>
                ))
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
}

export default Contact;