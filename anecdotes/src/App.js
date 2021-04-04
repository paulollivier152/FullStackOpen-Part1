import React, { useState } from "react"

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  )

  const AnecdoteTitle = ({ text }) => <h1>Anacdote {text}</h1>

  const Anecdote = ({ anecdote, votes }) => (
    <div>
      {anecdote} <br /> has {votes} votes <br />
    </div>
  )

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const [highest, setHighest] = useState(0)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setHighest(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <AnecdoteTitle text="of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={handleNextClick} text="next anecdote" />
      <Button handleClick={handleVoteClick} text="vote" />
      <AnecdoteTitle text="with most votes" />
      <Anecdote anecdote={anecdotes[highest]} votes={points[highest]} />
    </div>
  )
}

export default App
