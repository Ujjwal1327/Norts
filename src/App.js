import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

state={
  progress:0
}
setprogress=(progress)=>{
  this.setState({progress:progress})
}
  render(){
    return (
      <div>

        <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News  setprogress={this.setprogress} key="general" category="General"/></Route>
          <Route exact path="/business"><News  setprogress={this.setprogress} key="business" category="Business"/></Route>
          <Route exact path="/entertainment"><News  setprogress={this.setprogress} key="entertainment" category="Entertainment"/></Route>
          <Route exact path="/health"><News  setprogress={this.setprogress} key="health" category="Health" /></Route>
          <Route exact path="/sports"><News  setprogress={this.setprogress} key="sports" category="Sports"/></Route>
          <Route exact path="/science"><News  setprogress={this.setprogress} key="science" category="Science"/></Route>
          <Route exact path="/technology"><News  setprogress={this.setprogress} key="technology" category="Technology"/></Route>
        </Switch>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        </Router>
      </div>
    )
  }
}
  