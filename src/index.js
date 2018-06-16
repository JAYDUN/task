import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './redux/reducers';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './index.css';
import AccountList from './components/AccountList/AccountList';
import AccountDetail from './components/AccountDetail/AccountDetail';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AccountList}/>
                <Route path="/detail/:id" component={AccountDetail}/>

            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
