import React from 'react';
import { createVoteAction } from "../reducers/anecdoteReducer"
import { setNotificationActionCreator, emptyNotificationActionCreator } from "../reducers/notificationReducer"
import { connect } from "react-redux"


const AnecdoteList = (props) => {
    
   const handleVoteClick = (anecdote) => {
        props.createVoteAction(anecdote.id)
        props.setNotificationActionCreator(`You voted anecdote "${anecdote.content}"`)
        setTimeout(() => {
            props.emptyNotificationActionCreator()
        }, 5000)
    }
    return (
        <div>
            {props.anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = ({anecdotes, filter}) => anecdotes.filter(a => a.content.indexOf(filter) !== -1)

const mapStateToProps = (state) => {
    return {
        anecdotesToShow: anecdotesToShow(state)
    }
}

export default connect(mapStateToProps, {createVoteAction, setNotificationActionCreator, emptyNotificationActionCreator})(AnecdoteList);