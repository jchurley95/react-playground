import React, { Component } from 'react';
import AppWrapper from './App.styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AccordionPage from './components/AccordionPage/AccordionPage';
import DatePickerPage from './components/DatePickerPage/DatePickerPage';
import ModalPage from './components/ModalPage/ModalPage';
import Header from './components/PlayGroundSpecific/ReactComponents/Header/Header';
import Body from './components/PlayGroundSpecific/StyledComponents/Body.styled';
import Content from './components/PlayGroundSpecific/StyledComponents/Content.styled';
import NavBar from './components/PlayGroundSpecific/ReactComponents/NavBar/NavBar';
import Footer from './components/PlayGroundSpecific/ReactComponents/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      components: [
        {
          name: "Accordion",
          path: "/accordion"
        },
        {
          name: "Date Picker",
          path: "/date-picker"
        },
        {
          name: "Modal",
          path: "/modal"
        }
      ]
    }
  }
  render() {
    return (
          <Router>
            <AppWrapper>

              <Header />
              <Body>

                <NavBar components={this.state.components}/>
                <Content>

                  <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/accordion" component={AccordionPage} />
                    <Route exact path="/date-picker" component={DatePickerPage} />
                    <Route exact path="/modal" component={ModalPage} />
                  </Switch>

                </Content>
                
              </Body>
              <Footer />

            </AppWrapper>
          </Router>
    );
  }
}

export default App;
