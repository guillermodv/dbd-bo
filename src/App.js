import React from 'react';
import configureStore from './store';
import Routes from "./components/Routes";
import Root from './containers/Root';

const store = configureStore();

function App() {
    return (
        <Root store={store} comp={Routes}/>
    );
}
export default App;