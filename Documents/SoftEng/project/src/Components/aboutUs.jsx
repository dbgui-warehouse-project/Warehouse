import React from 'react';
import { MusicMatcherAPIClient } from '../Api/MusicMatcherAPIClient';
import { Redirect } from 'react-router-dom';
import NavBar from "./NavBar";
import "./aboutUs.css";
import lena from '../lena.jpg';


export class aboutUs extends React.Component {

    //login = new UserRep.ository();

    constructor(props){
        localStorage.setItem('username', null)
        localStorage.setItem('userID', null)
        super(props);

        this.state = {  
            username: "",
            password: "",
            status: "",
        };


}

    render() {
        return( <>
         <NavBar id={this.state.id} />

         <div class="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

      <div class="bg-img">      
        <h2>Our Team</h2>
        <div class="container"> 
        <div class="row"> 
            <div class="column">
                <div id="manda"  class="card">
                    <img class="card-img-top" src={lena} alt="Amanda"/>
                        <div class="container">
                        <h2>Amanda Bermel</h2>
                            <p class="title"> Front End Engineer</p>
                            <p>Some tall girl.</p>
                            <p>abermel@smu.edu</p>
                            
                        </div>
                </div>
            </div>

            <div class="column">
                <div id="yoseph" class="card">
                    <img class="card-img-top" src={lena} alt="Joey"/>
                        <div class="container">
                        <h2>Joey Bongar</h2>
                            <p class="title"> Front End Engineer</p>
                            <p>Professional Retard.</p>
                            <p>jbongar@smu.edu</p>
                            
                        </div>
                </div>
            </div>

            <div class="column">
                <div id="me" class="card">
                    <img class="card-img-top" src={lena} alt="Henry"/>
                        <div class="container">
                        <h2>Henry Lambson</h2>
                            <p class="title"> Front End Engineer</p>
                            <p>King of the world.</p>
                            <p>hlambson@smu.edu</p>
                           
                        </div>
                </div>
            </div>
        </div>    

        <div class ='row justify-content-md-center'>    
            <div class="column">
                <div class="card">
                    <img class="card-img-top" src={lena} alt="Dave"/>
                        <div class="container">
                        <h2>Dave Hoffman</h2>
                            <p class="title"> Front End and Backend Engineer</p>
                            <p>Hempologist.</p>
                            <p>dhoffman@smu.edu</p>
                            
                        </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img class="card-img-top" src={lena} alt="Alec"/>
                        <div class="container">
                        <h2>Alec Lebiga</h2>
                            <p class="title"> Backend Engineer</p>
                            <p>Python god.</p>
                            <p>alebiga@smu.edu</p>
                          
                        </div>
                </div>
            </div>
        </div>    
      </div>
    </div>        
    </>);
  }

}
export default aboutUs;
