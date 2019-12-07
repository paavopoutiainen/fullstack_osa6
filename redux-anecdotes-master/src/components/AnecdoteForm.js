import React from 'react';
import { createAddAnecdoteAction } from "../reducers/anecdoteReducer"

const AnecdoteForm = ({ store }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        store.dispatch(createAddAnecdoteAction(e.target.note.value))
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