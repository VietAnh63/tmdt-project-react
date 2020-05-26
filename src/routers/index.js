import React from 'react'
import {Switch, Route, Redirect } from "react-router-dom"
import {HomePageContainer,NotFoundContainer, DetailContainer, CategoryContainer, CartContainer, OderSuccessContainer, SearchContainer} from "../pages"
class AppRouter extends React.Component {
     constructor(props) {
          super(props);
          this.state = {  }
     }
     render() { 
          return (<Switch>
                    <Route path="/" exact component={HomePageContainer}/>
                    <Route path="/detail/:id" component={DetailContainer} />
                    <Route path="/category" component={CategoryContainer} />
                    <Route path="/cart" component={CartContainer} />
                    <Route path="/search" exact component={SearchContainer} />
                    <Route path="/success" component={OderSuccessContainer} />
                    <Route path="*" render={()=> <Redirect to="/404"></Redirect>} />
                    <Route path="/404" component={NotFoundContainer}/>
               </Switch>  )
     }
}
 
export default AppRouter