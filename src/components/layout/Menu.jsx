import React from 'react'
import {Link} from 'react-router-dom'



class Menu extends React.Component {
     constructor(props) {
          super(props);
          this.state = {}
     }
     render() {
          const {categories} = this.props
          return (<nav>
               <div id="menu" className="collapse navbar-collapse">
                    <ul>
                         {categories.map((item)=>{
                              return (
                                   <li key={item._id} className="menu-item">
                                        <Link to = {`/categories/${item._id}`}>{item.name}</Link>
                                   </li>
                              )
                         })}
                      
                    </ul>
               </div>
          </nav>);
     }
}

export default Menu;