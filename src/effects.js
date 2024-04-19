import {call, put, takeEvery } from 'redux-saga/effects'

// 模拟异步请求场景
function mockAjax(method, url, data){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        },1000)
    })
}

// 获取用户名称
function* getUserName(){
    // 请求后台接口
   const user = yield call(mockAjax, 'POST', '/api/login', {username: 'MaryJoya'})
    // 执行action login
    yield put({ type: 'login', user })
}
function* watchIncrementAsync() {
    yield takeEvery('ajaxLogin', getUserName)
}

export default watchIncrementAsync
