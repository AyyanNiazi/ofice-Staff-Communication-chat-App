import React, {Component,Lazy,Suspense} from 'react';
import {Redirect, BrowserRouter,Route,Switch} from 'react-router-dom'
import smsg from '../images/smsg.png'
import './style/broadcast.css'


 class Broadcast extends Component{

  imagePicker(){
    this.refs.fileUploader.click();
    this.setState({
        imagePicker: true
    })
}
render(){
   
  return (
    
        <  >
           <div className='row' id='broadcastTop'>
                {/* <div id='messages' >
                  <div className='row' >
                    <div className='col-12'>

                    </div>
                    <div className='col-12'>

                    </div>
                  </div> */}
                {/* </div>                    */}
             <div id='mainBroadcast' >
               
               <div className='row' id='messageScreen'>
                 <div className='col-6' >
                   {/* Reciever Section */}
                    <div id='reciever' >
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    <p  id='rectext' >jhfdsasdasdbjadbasdhbjhd asbdjabdjhdjhdsd jhsdbjdsdsjdsd sbdjdjhas ashdbdas asdbasdjh  dfh</p>
                    

                    </div>
                 </div>
                 <div className='col-12' >
                   {/* Sender Section */}
                   <div id='sender' >                     
                      <p  id='sendtext' >jhdkjsakjd asdjasd jknd asjdnasjsad 565 56165asdffdsdfh</p>
                    </div>
                 </div>                 
               </div>

                <div id='innerBottom' >
                  
                  <div className='row' >                   
                    <div className='col-10' id='inputDiv' >
                    <input type='text' id='textField' placeholder='Start Message' />
                    <img src={smsg} width='20' height='20' id='gallery' onClick={this.imagePicker.bind(this)} />
                    <input type='file' style={{display:'none'}} ref="fileUploader"  />
                    </div>
                    <div className='col-2' style={{textAlign:'left'}}  >
                      <img style={{marginTop:'10px',textAlign:'left',marginLeft:'20px'}} src={smsg} width='40' height='40' />
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