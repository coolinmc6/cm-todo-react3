import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './App';
import About from './components/About';
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>	
		<BrowserRouter>
			<div>
			<Header />
			<Switch>
				<Route path="/cm-todo-react3/about" component={About} />
				<Route exact path="/cm-todo-react3/" component={App} />
				
			</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
