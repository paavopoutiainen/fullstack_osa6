import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  /*const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }*/

  const createAction = (actionType) => {
    return {
      type: actionType
    }
  }


  return (
    <div>
      <button onClick={() => store.dispatch(createAction("GOOD"))}>hyvä</button> 
      <button onClick={() => store.dispatch(createAction("OK"))}>neutraali</button> 
      <button onClick={() => store.dispatch(createAction("BAD"))}>huono</button>
      <button onClick={() => store.dispatch(createAction("ZERO"))}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
