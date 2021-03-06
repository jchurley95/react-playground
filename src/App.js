import React, { Component } from 'react';
import AppWrapper from './App.styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage/LandingPage';
import AccordionPage from './components/AccordionPage/AccordionPage';
import BarcodePage from './components/BarcodePage/BarcodePage';
import CheckBoxPage from './components/CheckBoxPage/CheckBoxPage';
import DatePickerPage from './components/DatePickerPage/DatePickerPage';
import ModalPage from './components/ModalPage/ModalPage';
import RadioButtonPage from './components/RadioButtonPage/RadioButtonPage';
import PanelSpinnerPage from './components/PanelSpinner/PanelSpinnerPage';

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
          name: "Barcode Generator",
          path: "/barcode-generator"
        },
        {
          name: "CheckBoxes",
          path: "/checkbox"
        },
        {
          name: "Date Picker",
          path: "/date-picker"
        },
        {
          name: "Modal",
          path: "/modal"
        },
        {
          name: "Panel Spinner",
          path: "/panel-spinner"
        },
        {
          name: "Radio Button",
          path: "/radio-button"
        }
      ]
    }
  }
  render() {
    const landingPageComponent = () => {
      return <LandingPage pages={this.state.components} />
    }
    return (
          <Router>
            <AppWrapper>

              <Header />
              <Body>

                <NavBar components={this.state.components}/>
                <Content>

                  <Switch>
                    <Route exact path="/" component={landingPageComponent}/>
                    <Route exact path="/accordion" component={AccordionPage} />
                    <Route exact path="/checkbox" component={CheckBoxPage} />
                    <Route exact path="/barcode-generator" component={BarcodePage} />
                    <Route exact path="/date-picker" component={DatePickerPage} />
                    <Route exact path="/modal" component={ModalPage} />
                    <Route exact path="/panel-spinner" component={PanelSpinnerPage} />
                    <Route exact path="/radio-button" component={RadioButtonPage} />
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
