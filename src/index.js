// Redux imports
import { Provider } from 'react-redux';
import reducers from './_reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// Components import 
import App from './App';

// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// const tool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));


