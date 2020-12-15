import React from 'react'
import Header from './Header'
import Section from './Section'
import About from './About'
import Footer from './Footer'
import Searchbar from './Searchbar'
import WaitGif from '../assets/wait.gif'
import { Divider } from '@material-ui/core'

class Home extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(`/books/api`)
        .then(data=>data.json())
        .then(data=>this.setState({data:data}))
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <About />
                    <Divider/>
                    <Searchbar data={this.state.data} />
                    <Divider />
                    {this.state.data.length!==0?
                    <>
                    <Section data={this.state.data} type='drama'/>
                    <Section data={this.state.data} type='romantic'/>
                    <Section data={this.state.data} type='fantasy'/>
                    <Section data={this.state.data} type='policy'/>
                    <Section data={this.state.data} type='religion'/>
                    <Section data={this.state.data} type='science'/>
                    </>
                    :<div className="text-center wait">
                        <img src={WaitGif} alt="" />
                        <h4>Fetching data...</h4>
                    </div>
                    }
                </div>
		        <Footer />
            </React.Fragment>
        )
    }
}
 
export default Home