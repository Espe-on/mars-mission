import React from 'react';
import './App.scss';
import {ParticlesContainer} from "./Components/ParticlesContainer/ParticlesContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Home} from "./Pages/Home/Home";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {DiscoverRoversPage} from "./Pages/DiscoverRoversPage/DiscoverRoversPage";
import {OnThisDayPage} from "./Pages/OnThisDayPage/OnThisDay";
import {WeatherOnMarsPage} from "./Pages/WeatherOnMarsPage/WeatherOnMarsPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {InspirationalQuotesPage} from "./Pages/InspirationalQuotesPage/InspirationalQuotesPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {HumansAtNasa} from "./Pages/HumansAtNasa/HumansAtNasa";
import {Footer} from "./Components/Footer/Footer";

export default function App() {

    return (
        <div>
            <ParticlesContainer/>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/curiosity" component={Curiosity}/>
                    <Route exact path="/curiosity/discover-rovers" component={DiscoverRoversPage}/>
                    <Route exact path="/curiosity/on-this-day-on-mars" component={OnThisDayPage}/>
                    <Route exact path="/curiosity/weather-on-mars" component={WeatherOnMarsPage}/>
                    <Route exact path="/spirit" component={Spirit}/>
                    <Route exact path="/spirit/inspirational-quotes" component={InspirationalQuotesPage}/>
                    <Route exact path="/opportunity" component={Opportunity}/>
                    <Route exact path="/opportunity/humans" component={HumansAtNasa}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
        
    );
}
