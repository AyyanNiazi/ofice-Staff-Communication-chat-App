import React, {Component,Lazy,Suspense} from 'react';
import {Redirect, BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import './style/dashboard.css'
import user from '../images/admin.png'
import db from '../images/db.png'
import u1 from '../images/u1.png'
import u2 from '../images/u2.png'
import u3 from '../images/u3.png'
import u4 from '../images/u4.png'
import u5 from '../images/u5.png'
import u6 from '../images/u6.png'
import u7 from '../images/u7.png'
import u8 from '../images/u8.png'
import u9 from '../images/u9.png'
import u10 from '../images/u10.png'
import bc from '../images/bc.png'
import UserDashboard from './userDashboard'
import Broadcast from './broadcast'

 class Dashboard extends Component{

  state={
    loading:true,
    email:'',
    show:false
  }

passwordToggle(e){
    e.preventDefault()
    this.setState({
        show:!this.state.show
    })
    console.log('hoa clck')
}

render(){
   
  return (
    
        <  >
           <div className='row' id='topNavDash' >
              <div className='col-6' id='navLeft' >
                 <h2>Growth Mates</h2> 
              </div>
              <div className='col-6' id='navRight' >
                  <h5> <img src={user} width='40' height='40' /> M.Arslan</h5>
              </div>
           </div>

           <div className='row' >
           <BrowserRouter>
              <div className='col-lg-4' id='dashTopLeft' >
              <div id='scroller' >
                <ul id='dashUl' >
                  <li> <Link style={{textDecoration:'none', color:'black'}} to='/user/dashboard' >  <img src={db} width='40' height='40' style={{margin: '10px'}} /> Dashboard </Link> </li>
                  <li> <Link style={{textDecoration:'none', color:'black'}} to='/user/broadcast' >  <img src={bc} width='40' height='40' style={{margin: '10px'}} /> Broadcast  </Link>   <span id='innerLi' > 1 </span> </li>
                  <li> <img src={user} width='40' height='40' style={{margin: '10px'}} /> user 1</li>
                  <li> <img src={u1} width='40' height='40' style={{margin: '10px'}} />user 2</li>
                  <li><img src={u2} width='40' height='40' style={{margin: '10px'}} /> user 3</li>
                  <li><img src={u3} width='40' height='40' style={{margin: '10px'}} /> user 4</li>
                  <li><img src={u4} width='40' height='40' style={{margin: '10px'}} /> user 5</li>
                  <li><img src={u5} width='40' height='40' style={{margin: '10px'}} /> user 6</li>
                  <li><img src={u6} width='40' height='40' style={{margin: '10px'}} />user 7</li>
                  <li><img src={u7} width='40' height='40' style={{margin: '10px'}} />user 8</li>
                  <li><img src={u8} width='40' height='40' style={{margin: '10px'}} />user 9</li>
                  <li><img src={u9} width='40' height='40' style={{margin: '10px'}} />user 10</li>
                </ul>
              </div>
              </div>
              <div className='col-lg-8' >
                  <Switch>
                    <Route path='/user/dashboard' exact component={UserDashboard} />
                    <Route exact path='/user/broadcast' component={Broadcast} />
                  </Switch>
              </div>
                </BrowserRouter>
           </div>
        </>
    )
 }
}

// const mapStateToProps = (state) =>{
//   // var array= Array.from(state.products.cartProducts)
//   console.log("Reducer check cart prod.............", state.cartReducer.totalPrice)
//   return{ 
//       pathChecker: state.products.pathChecker,
     
//   }
// }

export default Dashboard