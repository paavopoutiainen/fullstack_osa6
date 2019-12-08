import React from 'react';
import { createAddAnecdoteAction } from "../reducers/anecdoteReducer"
import { setNotificationActionCreator, emptyNotificationActionCreator } from "../reducers/notificationReducer"

const AnecdoteForm = ({ store }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        store.dispatch(createAddAnecdoteAction(e.target.note.value))
        store.dispatch(setNotificationActionCreator(`You created anecdote ${e.target.note.value}`))
        setTimeout(() => {
            store.dispatch(emptyNotificationActionCreator())
        }, 5000)
        e.target.note.value = ""
      }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div><input name="note" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;