/* eslint-disable no-undef */

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
const App = () => {
	return (
    <div className="scoreboard">
      <Header 
				title="Scoreboard" 
				totalPlayers={1}
			/>

			{/* Players list */}
      <Player name="Dan" score={25}/>
      <Player name="Guil" score={90}/>
      <Player name="Ashley" score={85}/>
      <Player name="James" score={80}/>
    </div>
  );
}

// Render React component to the page
ReactDOM.render(
	<App />,
	document.getElementById('root')
);