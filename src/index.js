import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import render from './render'
import loginReducer from "./reducers";
import watchIncrementAsync from "./effects";



// 创建store

const sagaMiddleware = createSagaMiddleware()

const store = createStore(loginReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchIncrementAsync)

// 订阅-更新状态
store.subscribe(() => {
    render({state: store.getState(), dispatch: store.dispatch})
})

render({state: store.getState(), dispatch: store.dispatch})
