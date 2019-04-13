/* eslint-disable no-undef */
const title = <h1 id="main-title" title="This is a title">This is my first React Element!</h1>;

const desc = <p>I just learned how to create a React node and render it to the DOM.</p>;

const header = (
	<header>
		{title}
		{desc}
	</header>
);


ReactDOM.render(
	header,
	document.getElementById('root')
);