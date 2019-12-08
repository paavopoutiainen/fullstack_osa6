import React from 'react';
import { createVoteAction } from "../reducers/anecdoteReducer"
import { setNotificationActionCreator, emptyNotificationActionCreator } from "../reducers/notificationReducer"


const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes

    const handleVoteClick = (anecdote) => {
        store.dispatch(createVoteAction(anecdote.id))
        store.dispatch(setNotificationActionCreator(`You voted anecdote "${anecdote.content}"`))
        setTimeout(() => {
            store.dispatch(emptyNotificationActionCreator())
        }, 5000)
    }


    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVoteClick(anecdote)}>vote</button>
          </div>
        </div>
      )}
        </div>
    );
};

export default AnecdoteList;