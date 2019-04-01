import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound.component';
import Main from './Main.component';
import News from './News.component';
import About from './About.component';
import Contact from './Contact.component';

const Routes = () => {
    return (
        <Switch> 
            <Route path="/" component={Main} exact/>
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />            
        </Switch>
    )
}

export default Routes;  