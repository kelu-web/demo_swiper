
// react 
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

// 全局导入antdcss
import 'antd/dist/antd.css';
import './index.css';

// 组件
import Home from './view/home/Home';
// thunk中间件使用
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
// 创建store
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)





ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Switch location={location} >
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </Router>
    </Provider>
    , document.getElementById('root'));








