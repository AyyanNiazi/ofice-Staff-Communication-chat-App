import React, {Component,Lazy,Suspense} from 'react';
import {Redirect, BrowserRouter,Route,Switch} from 'react-router-dom'
import smsg from '../images/smsg.png'
import './style/broadcast.css'


 class Broadcast extends Component{


render(){
   
  return (
    
        <  >
           <div className='row' id='broadcastTop'>
                <div id='messages' >
                  
                </div>                   
             <div id='mainBroadcast' >
                  </div>
                <div id='innerBottom' >
                  
                  <div className='row' >                   
                    <div className='col-10' >
                    <input type='text' id='textField' placeholder='Start Message' />
                    </div>
                    <div className='col-2' >
                      <img style={{marginTop:'10px'}} src={smsg} width='40' height='40' />
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </>
    )
 }
}



export default Broadcast