import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good = 0, neutral = 0, bad = 0 }) => {
  const total = good + neutral + bad;
  const average = (good + (bad * -1)) / (total) || 0;
  const getPercent = (num) => {
    return num / total * 100;
  }

  if (total) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${getPercent(good)} %`} />
          </tbody>
        </table>
      </>
    )
  }
  return (
    <p>
      No feedback given
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={ () => setGood(good + 1) } text="good" />
      <Button onClick={ () => setNeutral(neutral + 1) } text="neutral" />
      <Button onClick={ () => setBad(bad + 1) } text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
