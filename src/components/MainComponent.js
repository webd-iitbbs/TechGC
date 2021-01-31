import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Body from './BodyComponent';
import Events from './EventsComponent';
import Team from './TeamComponent';
import Leader from './LeaderComponent';
import Rule from './RuleComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={Body} />
              <Route path='/events' component={Events} />
              <Route path='/team'  component={Team} />
              <Route path='/leader'  component={Leader} />
              <Route path='/contactus'  component={Team} />
              {/* <Route path='/rule'  component={Rule} /> */}
              <Redirect to="/home" />
          </Switch>        
          <Footer />
      </div>
    );
  }
}

export default Main;