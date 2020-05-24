import React from 'react';
import './App.css';
import "./assets/css/bootstrap.min.css"
import "./assets/css/cart.css"
import "./assets/css/category.css"
import "./assets/css/home.css"
import "./assets/css/success.css"
import "./assets/css/search.css"
import { Header, Footer, Menu, Slider, SideBar } from './components/layout/index'
//domainforoffer.com
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from "./routers"
class App extends React.PureComponent {

  render() {
    return <Router>
      <Header />
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              <Slider />
              {/*	Feature Product	*/}
              <AppRouter />
              {/*	End Latest Product	*/}
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  }

}


export default App;
