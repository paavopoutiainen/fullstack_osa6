import anecdoteService from "../services/anecdotes"

export const createVoteAction = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote)
    console.log("intheactioncreator",updatedAnecdote)
    dispatch({
    type: "VOTE",
    data: { id: updatedAnecdote.id }
 })
}
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      anecdotes
    })
 }
}

export const createAddAnecdoteAction = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content)
    console.log(anecdote)
    dispatch({
      type: "ADD",
      anecdote
    })
  }
  
}

const anecdoteReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const votedAnecdote = state.find(a => a.id === id)
      const changedAnecdote = {...votedAnecdote, votes: votedAnecdote.votes + 1 }
      return state.map(a => a.id !== changedAnecdote.id ? a : changedAnecdote)
    case "ADD":
      return state.concat(action.anecdote)
    case "INIT_ANECDOTES":
      return action.anecdotes
    default: return state
  }
}

export default anecdoteReducer