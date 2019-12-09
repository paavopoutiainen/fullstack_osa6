import React from 'react';
import { createAddAnecdoteAction } from "../reducers/anecdoteReducer"
import { setNotificationActionCreator, emptyNotificationActionCreator } from "../reducers/notificationReducer"
import { connect } from "react-redux";
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        anecdoteService.create(e.target.note.value)
            .then(anecdote => props.createAddAnecdoteAction(anecdote))
        props.setNotificationActionCreator(`You created anecdote ${e.target.note.value}`)
        setTimeout(() => {
            props.emptyNotificationActionCreator()
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

export default connect(null, { createAddAnecdoteAction, setNotificationActionCreator, emptyNotificationActionCreator })(AnecdoteForm);