function render({state, dispatch}){
    console.log('state', state)
    const div = document.createElement('div')
    const button = document.createElement('button')
    const span = document.createElement('span')

    button.innerHTML = '登录'
    span.innerHTML = '用户名' + state.username
    if(state.username){
        button.innerHTML = '退出'
        button.addEventListener('click', () => {
            dispatch({type: 'logout'})
        })
    }else{
        button.innerHTML = '登录'
        button.addEventListener('click', () => {
            dispatch({type: 'ajaxLogin'})
        })
    }

    div.appendChild(button)
    div.appendChild(span)
    document.getElementById('root').innerHTML = ''
    document.getElementById('root').appendChild(div)
}

export default render
