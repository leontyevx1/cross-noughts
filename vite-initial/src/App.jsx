import ReactLogo from './assets/react.svg?react';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
