import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import CompanyCard from './components/CompanyCard'
import CompanyInfo from './components/CompanyInfo'

import Companies from './data.json'

function App() {

  return (
    <div className="App">
    	<Header />  
    	<Router>
			<Switch>
				<Route path="/:id">
					<CompanyInfo />
				</Route>
			</Switch>
			<Switch>
				<Route path="/">
					<div className="grid">
						{Companies.map((companydetail, index) => {
							return (
								<CompanyCard 
									key={companydetail.id}
									id={companydetail.id}
									companyname={companydetail.companyname}
									realname={companydetail.realname}
									avatar={companydetail.avatar}
									country={companydetail.country}
									mainimport={companydetail.mainimport}
									mainexport={companydetail.mainexport}
								/>
							)
						})}
					</div>
				</Route>
			</Switch>
    	</Router>
    	<Footer />
    </div>
  );
}

export default App;
