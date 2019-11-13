import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Services from '../views/services';
import Projects from '../views/projects';
import Technologies from '../views/technologies';
import Header from '../views/components/header';
import Footer from '../views/components/footer';
function Routes() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/technologies" component={Technologies} />
                <Route path="/" component={Services} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes;