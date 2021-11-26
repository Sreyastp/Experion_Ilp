import {createStore} from 'redux'

const demoReducer = (state = 0, action ) => {
    switch (action.type){
        case 'INCREASE' : 
        return state + 1
        case "DECRASE" :return state -1 
        case "ZERO":
            return 0 
        default:
            return state
    }
}

const myStore = createStore(demoReducer)

myStore.subscribe(() => {
    const currentStore = myStore.getState()
    console.log(currentStore)
})

myStore.dispatch({type: 'INCREASE'})
myStore.dispatch({type: 'INCREASE'})
myStore.dispatch({type: 'INCREASE'})
myStore.dispatch({type: 'ZERO'})
myStore.dispatch({type: 'DECREASE'})


function ReduxDemo() {
  return (
    <>
      <h1>Redux demo</h1>
    </>
  );
}

export default ReduxDemo;
