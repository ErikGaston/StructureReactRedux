import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledEngineProvider } from '@mui/material/styles';
import './assets/styles/styles.scss';

// App Routes
import { routes } from "./routes";

const App = ({ store }) => {


	return (
			<Provider store={store}>
				<StyledEngineProvider injectFirst>
					<BrowserRouter children={routes} basename={"/"} />
				</StyledEngineProvider>
			</Provider>
	);

};

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;