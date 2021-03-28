import "./App.css"

import React, { useState } from "react"

const Statistic = ({text, value, sign}) => (
  <p>{text} {value} {sign}</p>
)

const Statistics = ({good, bad, neutral, all}) => {
  if (all === 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={(good - bad) / all} />
      <Statistic text="positive" value={(good / all) * 100} sign="%" />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}

export default App
