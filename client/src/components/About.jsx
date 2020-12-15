import React from 'react'
import './stylesheets/about.css'
import AboutImage from '../assets/background-2.jpeg'

class About extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="about text-left">
                <h2 className='text-center'>About The Store</h2>
                <div className="content row">
                    <div className="header col col-12 col-md-4">
                        <div className="img">
			                <img src={AboutImage} alt="" />
                        </div>
                    </div>
                    <div className="body col col-12 col-md-8">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Fugiat quibusdam at alias. Quia harum incidunt facilis 
                             dolores placeat! Odit asperiores repudiandae aperiam,
                              tenetur temporibus 
                            provident corrupti iusto! Veritatis, eius assumenda?
                        </p>
			<a href="#footer" className="btn">Contact Us</a>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About