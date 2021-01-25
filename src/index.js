import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';

ReactDOM.render(
	<ErrorBoundry>
		<App />
	</ErrorBoundry>
	, document.getElementById('root')
);
