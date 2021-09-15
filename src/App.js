import './App.scss';
import Loader1 from './LoadersComponents/Loader1';
import Loader2 from './LoadersComponents/Loader2';

const App = () => {
	return (
		<div className="App">
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<Loader2 />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	);
};

export default App;
