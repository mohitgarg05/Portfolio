import React, { Component } from 'react';
import './About.css';
import "./Smallnav.css"
import Details from './Details';
import pic from './my.jpg';
import Projectss from './Projects';
class Aboutpage extends Component{
    constructor(props) {
        super(props);
        this.aboutme = this.aboutme.bind(this)
        this.project = this.project.bind(this)
        this.state={
            aboutme:true , project:false
        }
    }
    aboutme(e){
        e.preventDefault()
        console.log("hello");
        this.setState({aboutme : true})
        this.setState({project : false})
    }
    project(e){
        e.preventDefault()
        console.log("project");
        this.setState({project : true})
        this.setState({aboutme : false})
    }

    render(){
        return(
            <>

            <div className="container m-auto aboutmepage" >
                <div className="row" >
                    <div className="col-md-2" >
                        <img src={pic} width="160em" alt = "image"></img>
                    </div>
                    <div className="col offset-md-5 aboutme">
                        <div className="row  ">
                            <h3>Mohit garg</h3>
                        </div>
                        <div className="row">
                            <h6>Web Developer</h6>
                        </div>
                            <hr />
                        
                        <div className="row smallnavbar">
                            <div className = "nav">
                                <ul>
                                    <li><a href="/AboutMe" onClick={this.aboutme}>About Me</a></li>
                                    <li><a href="/AboutMe" onClick={this.project}>Projects</a></li>
                                </ul>
                            </div>
                         
                        </div>
                        <hr />
                            
                    </div>
                   
                </div>
    
                <div className="row" >
                    <div className="col-md-3"  >
                        <div className="row">
                            <div className= "skills" > 
                                <p>Skills</p>
                                <ul>
                                    <li>MERN Stack</li>
                                    <li>Web Developer</li>
                                    <li>HTML,CSS,Javascript</li>
                                    <li>React</li>
                                    <li>DSA</li>
                                    <li>Java</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                        <div className= "links"> 
                            <p>Links</p>
                            <ul>
                                <li><a href = "https://github.com/mohitgarg05">Github</a></li>
                                <li><a href = "https://www.linkedin.com/in/mohit-garg-7863a5203">LinkedIn</a></li>
                            
                            </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="col" style={{marginTop:"60px",marginLeft:"170px"}}>
                        <div id = "details" >
                            {this.state.aboutme ?  <Details /> : 
                            
                            <ul>
                                <li><a href="https://distracted-meitner-11adf0.netlify.app/" target="_blank">Weather App</a></li>
                                <li><a href="https://mohitgarg05.github.io/" target="_blank" >Sorting Visualizer </a></li>
                                <li><a href ="https://wonderful-mestorf-460c02.netlify.app/" target ="_blank"> Online Banking System </a></li>
                                <li>Olx Clone</li>
                            </ul>
                            
                            
                            
                            
                            }
                            
                        </div>
                    </div>
    
                </div>
    
    
            </div>
            
                
            </>

        );
    }
}


export default Aboutpage;