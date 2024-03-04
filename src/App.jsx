import { useState } from 'react'

const MostVotedAnecdote = (props) => {
  let highestNumberOfVotes = Math.max.apply(0, props.votes);
  let index = props.votes.indexOf(highestNumberOfVotes);

  if (highestNumberOfVotes > 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <span>{props.anecdotes[index]}</span>
      </div>
    );
  };
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const handleVote = () => {
    const index = anecdotes.indexOf(anecdotes[selected]);
    let copy = votes.slice()
    copy[index] += 1
    setVotes(copy);
  };

  return (
    <div>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes<br />
      <button onClick={handleVote}>
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>
      <MostVotedAnecdote votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App