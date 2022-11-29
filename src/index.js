import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";


function App() {

    const [email, setEmail] = useState("");
    const emailEl = useRef();

    const [first, setFirst] = useState("");
    const firstEl = useRef();

    const [last, setLast] = useState("");    
    const lastEl = useRef();



    return (
        <div>
            <h1>Form</h1>
            <h4>
            <label htmlFor="email">Your Email Address</label>
            <br />
            <input type="text" name="email" ref={emailEl} />
            <br />

            <label htmlFor="first-name">Your First Name :</label>
            <br />
            <input type="text" name="first-name" ref={firstEl} />
            <br />

            <label htmlFor="last-name">Your Last Name :</label>
            <br />
            <input type="text" name="last-name" ref={lastEl} />
            </h4>
            <br />
            <br />
            <br />

            <button onClick={function () {
                setEmail(emailEl.current.value); setFirst(firstEl.current.value); setLast(lastEl.current.value)}}>Submit the form</button>
            <br />
            <br />
            <br />

            <div>
                <h4>
                Your Email Adress is : {email} <br /><br />
                Your First Name : {first} <br /><br />
                Your Last Name : {last}
                </h4>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);