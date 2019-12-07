import React from 'react';
import { createVoteAction, createAddAnecdoteAction } from "./reducers/anecdoteReducer"

const App = (props) => {
  const store = props.store
  const anecdotes = props.store.getState()

const handleSubmit = (e) => {
  e.preventDefault()
  store.dispatch(createAddAnecdoteAction(e.target.note.value))
  e.target.note.value = ""
}

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => store.dispatch(createVoteAction(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div><input name="note" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App