import React, {Component,Lazy,Suspense} from 'react';
import 
 {getChats}
  from "../actions/chatAction";
import PrivateRoute from "../component/private-route/PrivateRoute";  
import {BrowserRouter ,Route, Switch, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux'
// import jwt_decode from "jwt-decode";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
// import { Provider } from "react-redux";
import store from "../store";
import Login from './login'
import Dashboard from '../component/user/dashboard.js'
import NoMatch from './not-found.js'  
import socketIOClient from "socket.io-client"
import { connect } from 'react-redux';
import UserDashboard from '../component/user/userDashboard';
import broadcast from '../component/user/broadcast';
import Setting from '../component/user/setting';
export const socket = socketIOClient("http://localhost:5000");
// import AllImages from './AllImages'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    socket.emit("view-chats");

    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/";
    }
  }


  // 404 page not found

//  

 class Routes extends Component{


  state={
    loading:true
  }

  componentWillReceiveProps(nextProps){

    console.log('props Routing  will rcve props sy', nextProps);

}


render(){
  this.props.getChats()
  const path = window.location
  console.log({...path})
  if(this.props.auth){
    // return(
      // <div>adbjkd</div>
      // <BrowserRouter> 
      //   {/* <Redirect to='/user/dashboard/' /> */}
      // </BrowserRouter>
    // )
  }
//  console.log('routing ka render==---->',this.props)
// this.props.getProducts('Routing')
//   // const information = window.location.pathname='/information'
//   console.log(window.location)
//   if(window.location.pathname=='/information'){
//     var info = true
//     // console.log(info, 'info')
//   }
//   else if(window.location.pathname=='/admin' ){
//     console.log('admin aya hy ry baba')
//     var adminAndCartOwner = true
//   }

return (
  this.props.auth && window.location.pathname==='/user/broadcast' || window.location.pathname==='/user/broadcast#target' ||  window.location.pathname==='/user/setting'?
  <BrowserRouter> 
  {!this.props.auth? <div>  <Redirect to='/user/dashboard/' /><Route exact path='/' component={Login} />  </div>: void 0} 
  <Redirect to='/user/dashboard/' />
  <PrivateRoute path='/user/dashboard/' component={Dashboard} />
  {/* {window.location.reload()} */}
</BrowserRouter>
:
    <div>
    {/* {!this.props.auth ?  */}
           <BrowserRouter>                      
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute path='/user/dashboard/' component={Dashboard} />
              {/* <Route path='/user/dashboard' exact component={UserDashboard} />
              <Route exact path='/user/broadcast' component={broadcast} />
              <Route exact path='/user/setting' component={Setting} /> */}
            </Switch>
              
           </BrowserRouter> 
          {/* //  :
          //  <BrowserRouter>     
          //  <div className='col-lg-3' >
          //    <PrivateRoute path='/user/dashboard/' component={Dashboard} />
          //  </div>  

          //   <div  className='col-lg-9'>
          //  <Switch>
          //    <Route path='/user/dashboard' exact component={UserDashboard} />
          //    <Route exact path='/user/broadcast' component={broadcast} />
          //    <Route exact path='/user/setting' component={Setting} />
          //  </Switch>             
          //   </div>
          // </BrowserRouter> 
      // }    */}
        </div>
    )
    
 }
}

const mapStateToProps = (state) =>{
  // var array= Array.from(state.products.cartProducts)
  console.log("Reducer rtng sy prod.............", state.auth)
  return{ 
      auth: state.auth.user.name,
     
  }
}

export default connect(mapStateToProps,{getChats})(Routes)