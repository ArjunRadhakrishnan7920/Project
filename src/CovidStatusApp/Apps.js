import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import{ 
     BrowserRouter as Router,
     Link,
     Switch,Route
 } from "react-router-dom"
 import Header from "./Components/Header"
 import India from "./Components/India"
 import World from "./Components/World"
class Apps extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="container-fluid">
               <Router>
                   <Header/>
                   <Switch>
                       <Route exact path="/" ><India/></Route>
                       <Route path="/india"><India/></Route>
                       <Route path="/World"><World/></Route>
                    </Switch>
                </Router> 
                
            </div>
        )
    }
}

export default Apps
