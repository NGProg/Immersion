import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import SignIn from './components/signin/signin.jsx';
//import SignUp from './components/signup/signup.jsx';
import Join from './components/join/join.jsx';
import Chat from './components/chat/chat.jsx';
import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => (
    <Router>
        {/*<Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />*/}
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
);

//export default App;
export default withAuthenticator(App);
