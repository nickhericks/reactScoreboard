/* eslint-disable no-undef */
const desc = 'I just learned how to create a React node and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Nick';

const header = (
	<header>
		<h1 id={ myTitleID }>{ name }'s first React element!</h1>
		<p className="main-desc">{ desc }</p>
	</header>
);


ReactDOM.render(
	header,
	document.getElementById('root')
);