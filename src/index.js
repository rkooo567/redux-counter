import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import Counter from './containers/Counter';

const App = () => {
	return(
		<Provider store={store}>
			<Counter />
		</Provider>
	);

}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);