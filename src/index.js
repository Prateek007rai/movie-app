import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';



const store = createStore(rootReducer);
console.log('Store is here' , store);
// console.log('State with 0 size movies array of reducer is here before sending action : ' , store.getState());


// store.dispatch({                                                       //action passed into it.
//   type:'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('State with 0 size movies array of reducer is here after sending action : ' , store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

