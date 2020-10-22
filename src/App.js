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
				<Route path="/:id" component={CompanyInfo}>
					{/* <div className="container-companyinfo">
					<CompanyInfo />
					</div> */}
				</Route>
			</Switch>
			<Switch>
				<Route path="/" exact>
					<div className="container">
						<div className="informative">
							<div className="info-icon">i</div>
							<div className="info-text">Por el momento de la unica manera que se puede subir y editar información es por medio de <a href="https://docs.google.com/forms/d/e/1FAIpQLSczqXRKOeonUPgZ-WEy05QV79jd7I6wbtewW9VEpDpPKZs-Cg/viewform?usp=sf_link">este</a> formulario. La información se vera reflejada en la página los dias viernes, sabados y domingos. Si te interesa participar activamente en el proceso mandame un mensaje <a href="https://www.simcompanies.com/company/Moonshot%20Aerospace/">acá</a>!</div>
						</div>
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
					</div>
				</Route>
			</Switch>
    	</Router>
    	<Footer />
    </div>
  );
}

export default App;
