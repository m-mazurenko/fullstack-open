import React, { useState } from 'react'

const VoteComponent = ({ title, anecdote, counter }) => {
  return (
    <div>
      <h1>{title}</h1>
      {anecdote}
      <br/>
      has {counter} votes
      <br/>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const [mostVotes, setMostVotes] = useState({id: 0, count: 0});

  function getRandomIndex() {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  function vote() {
    let selectedVotes = votes[selected] || 0;
    selectedVotes += 1;
    if (selectedVotes > mostVotes.count) {
      setMostVotes({
        id: selected,
        count: selectedVotes,
      })
    }
    const copy = { ...votes };
    copy[selected] = selectedVotes;
    setVotes(copy);
  }

  return (
    <div>
      <VoteComponent
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        counter={votes[selected] || 0}
      />
      <button onClick={() => vote()}>
        vote
      </button>
      <button onClick={() => getRandomIndex()}>
        next anecdote
      </button>
      {
        mostVotes.count && (
          <VoteComponent
            title="Anecdote with most votes"
            anecdote={anecdotes[mostVotes.id]}
            counter={mostVotes.count || 0}
          />
        )
      }
    </div>
  )
}

export default App
