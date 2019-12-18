import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addPost, updateNewText, addDialog, updateDi} from './Redux/store'
import {BrowserRouter} from 'react-router-dom'
import {subscribe} from './Redux/store'
import store from './Redux/redux-store'
import {Provider} from 'react-redux'



// let rerenderIntireTree = (state) =>
// {
ReactDOM.render(<BrowserRouter>
<Provider store = {store}>
    <App 
    // Redux={Redux} 
    // store={store}

    // // newText ={store._Redux.profilePage.newText} 
    // di = {store._Redux.dialogPage.di}


    // dispatch = {store.dispatch.bind(store)}
    // addDialog={store.addDialog.bind(store)}
    // updateDi={store.updateDi.bind(store)}
        
    // updateNewText = {store.updateNewText.bind(store)}
    // addPost = {store.addPost.bind(store)}

    
    />
    </Provider>
    </BrowserRouter>, document.getElementById('root'));
// }
// rerenderIntireTree (store.getState())

// rerenderIntireTree(store.getState());
// store.subscribe(rerenderIntireTree);

// store.subscribe (() =>
// {
//     let Redux = store.getRedux()
//     rerenderIntireTree(Redux)
// })
// store.subscribe(() => {
// let Redux = store.getRedux();
// rerenderEntireTree(Redux);
// });



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
