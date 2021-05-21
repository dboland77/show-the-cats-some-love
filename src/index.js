import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { Container } from 'reactstrap';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Router history={hashHistory} >
        <Container>
            <Navigation />
            <App />
            <Footer />
        </Container>
    </Router>, document.getElementById('root'));



