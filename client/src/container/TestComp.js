// import React,{Component} from 'react';
// import {Link, withRouter} from 'react-router-dom';
// // import {addImage} from '../actions/imageAction'
// import {connect} from 'react-redux'
// // import socketIOClient from "socket.io-client";
import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {addImage} from '../actions/imageAction'
import {connect} from 'react-redux'
import axios from 'axios'
import openSocket from 'socket.io-client'
// import socketIOClient from "socket.io-client";



// // var socket = socketIOClient("http://localhost:5000");
class TestComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
                    title: "",
                    image: "",
                    socket: openSocket("http://localhost:5000")

             };
            
        this.state.socket.on('message', (message) => {
            console.log('res agya',message)
        })
    }
    componentDidMount(){
        let mes = 'dusra bhe agya'
        this.state.socket.emit('message',mes)
        // this.socket = socketIOClient("http://localhost:5000");
        // this.socket.emit("initial_data");
        // console.log('Initial data emitted===')
        // console.log('testing component Submit Button===')
        // this.socket.on("get_data",function(data){
        //     console.log('data delivered====', data)
        // })
    }

   
      
       render() {
        
        return (
        <div className="form-container">
        <form encType="multipart/form-data" onSubmit={this.onSubmit}> 
        <h2>Image Form</h2>
        <label className="form-label">Image Title</label>
        <input 
        className="form-input"
        placeholder="Enter Image Title"
        type="text"
        value={this.state.title}
        onChange={this.onChangeTitle}
        />
        <label className="form-label">Choose an Image</label>
       <input type="file" 
       className="form-input"
       onChange={this.onChangeImage} />
       <button type="submit" className="submit-btn">Submit!</button>
       </form>
       </div>
       );
         }
       }
export default connect(null,{ addImage })(TestComp);
