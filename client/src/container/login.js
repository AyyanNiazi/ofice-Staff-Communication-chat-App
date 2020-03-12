import React, {Component,Lazy,Suspense} from 'react';
import {Redirect} from 'react-router-dom'
import './style/login.css'

 class Login extends Component{


  state={
    loading:true,
    email:'',
    show:false,
    isUser:false,
  }
onChange=e => this.setState({[e.target.name]:e.target.value})

  componentWillReceiveProps(nextProps){

}

passwordToggle(e){
    e.preventDefault()
    this.setState({
        show:!this.state.show
    })
    console.log('hoa clck')
}

onSubmit(e){
  e.preventDefault()
  if(this.state.email==='admin@gmail.com' && this.state.password==='q1w2e3'){
    this.setState({
      isUser:true
    })
}
}
render(){
    const {email,password} = this.state
    if(this.state.isUser===true){
      return(

          <Redirect to='/user/dashboard' />
          )
  }
  return (
    
        <div style={{backgroundColor:'#e5ddd5'}} >
          <div id='topBanner' >
            <div id='loginInner' >
                <form>
                <h4 style={{marginBottom:'20px'}} >Login With GrowthMates</h4>
                    <div class="form-group" style={{marginBottom:'40px'}}>
                        <label style={{float:'left'}}  for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' value={email} onChange={this.onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group" style={{marginBottom:'40px',position:'relative'}}  >
                        <label style={{float:'left'}} for="exampleInputPassword1">Password</label>
                        <input type={!this.state.show? 'password' : 'text' }  
                         name='password' value={password} onChange={this.onChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                         <i onClick={this.passwordToggle.bind(this)}
                         class={!this.state.show? 'fa fa-eye-slash': 'fa fa-eye' } 
                         style={{position:'absolute',top:'5.5vh',right:'10px', fontSize:'18px',cursor:'pointer'}}></i>
                    </div>

                    <div class="form-group" style={{marginBottom:'40px',position:'relative'}}  >
                        <label style={{float:'left'}} for="exampleInputPassword1">Password</label>
                        
                    </div>
                   
                    <button type="button" class="btn btn-primary btn-block" onClick={this.onSubmit.bind(this)} >Submit</button>
                </form>
            </div>
          </div>  
        </div>
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

export default Login