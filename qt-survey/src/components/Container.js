import React, { Component } from 'react'
import Detail from './Detail';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite'; 
import { getDatabase, ref, set } from "firebase/database";
// import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBTn_6wP5r_cX6WUvLnktTI4Ssap-cnYPY",
  authDomain: "quality-survey-7a851.firebaseapp.com",
  databaseURL:"https://quality-survey-7a851-default-rtdb.firebaseio.com",
  projectId: "quality-survey-7a851",
  storageBucket: "quality-survey-7a851.appspot.com",
  messagingSenderId: "549569625426",
  appId: "1:549569625426:web:de87e556d0dd0b47388e8b"
};
initializeApp(firebaseConfig);
// if (!firebase.apps.length < 0){

// }


 class Container extends Component {    
    constructor(props) {
      super(props)
      this.state = {
        id:uuidv4(),
        name:null,
        email:null,

        questions:{
            q1:null, 
            q2:null,
            q3:null,
            others:null,
        isSubmitted:false,
        },
         
      }
    }

    submitdetailhandler = (event) =>{
        //  alert(9);
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({name, email }, () =>{
          console.log(this.state)
        });
        event.preventDefault();
    };
    

    submitsquestionhandler = (event) =>{
        event.preventDefault();
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        const isSubmitted = true;
        this.setState({questions , isSubmitted}, () => {
          console.log(this.state);

          const database = getDatabase();
          set(ref(database , "survey/" +this.state.id),{ 
            name: this.state.name, 
            email: this.state.email,
            questions: this.state.questions,  
          });
        });
            
    };


  render() {
    return (
     <div>  
      <div className='container-fluid '>
        <div className='container card m-2'>
            <h1 className='text-center text-primary'>Quality Tech Survey</h1>
        </div>
      </div>
      {this.state.isSubmitted  ? ( 
      <div className='card text-center'>
        <h1>Thankyou</h1>
      </div>
     ) : this.state.name === null && this.state.email === null ? (
        <Detail submit={this.submitdetailhandler}/>
      ) : ( 
      <Question submit={this.submitsquestionhandler}/> 
      )} 
     </div>
    );
  }
}

export default Container;
