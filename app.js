/* eslint-disable no-undef */

const players = [
	{
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

const Header = (props) => (
		<header>
			<h1>{ props.title }</h1>
			<span className='stats'>Players: { props.totalPlayers }</span>
		</header>
);

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				{props.name}
			</span>

			<Counter 
				score={ props.score }
			/>			
		</div>
	);
}

const Counter = (props) => {
	return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

// Main React component to be rendered
const App = (props) => {
	return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={ props.initialPlayers.length } />

      {/* Players list */}
      {props.initialPlayers.map(player => (
        <Player 
					name={ player.name } 
					score={ player.score } 
				/>
      ))}

    </div>
  );
}

// Render React component to the page
ReactDOM.render(
	<App initialPlayers={players}/>,
	document.getElementById('root')
);