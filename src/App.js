import React from 'react'
import { useSelector } from 'react-redux'
import { LoginPage, HomePage } from './Pages'
import { Route, Switch } from 'react-router-dom'

function App() {
	const { isAuthenticated } = useSelector((state) => ({
		isAuthenticated: false,
	}))

	return (
		<div className='App'>
			<Switch>
				{!isAuthenticated && <Route path='/auth/login' component={LoginPage} />}
				<Route path='/' component={HomePage} />
			</Switch>
		</div>
	)
}

export default App
