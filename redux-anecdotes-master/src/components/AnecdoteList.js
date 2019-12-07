import React from 'react';
import { createVoteAction } from "../reducers/anecdoteReducer"

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState()
    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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
        </div>
    );
};

export default AnecdoteList;