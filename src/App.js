import logo from './logo.svg';
import './App.css';
import Notification from "./Notification";
import ls from 'local-storage'
import {flocktoryInit, flocktoryPushAttach} from "./flocktory/flocktory";

let flocktorySessionId = ls.get('flocktorySessionId');
const tokenReceived = (token) => {
    ls.set('notificationToken', token);
    console.log('Token saved to LocalStorage');

    if (!flocktorySessionId) {
        flocktoryInit().then((data) => {
            console.log('flocktoryInit');
            console.log(data);

            if (!data.hasOwnProperty("site-session-id")) {
                console.log('`site-session-id` is empty')
            }
            flocktorySessionId = data["site-session-id"];
            ls.set('flocktorySessionId', flocktorySessionId);

            flocktoryPushAttach(token, flocktorySessionId).then((response) => {
                console.log('flocktoryPushAttach');
                console.log(response)
            });
        });
    }
};

const notificationToken = () => {
    return ls.get('notificationToken')
};

function App() {
    return (
        <div className="App">
            <Notification token={notificationToken()} onTokenReceived={tokenReceived}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
