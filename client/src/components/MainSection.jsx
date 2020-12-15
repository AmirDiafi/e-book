import React from 'react'
import Card from './Card'
import './stylesheets/mainsection.css'
import Footer from './Footer'
import SecondaryBar from './SecondaryBar'
import WaitGif from '../assets/wait.gif'

class MainSection extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
	window.scrollTo(0,0)
        const path = window.location.pathname
        fetch(`/books/sections/${path.substr(15, path.length)}`)
        .then(data=>data.json())
        .then(data=>this.setState({data:data}))
    }

    render() {
        return (
            this.state.data.length!==0
            ?<>
            <SecondaryBar />
	        <section className="main-section container">
                <h2 className="text-center">
                    section of {
                        window.location.pathname
                        .substr(15, window.location.pathname.length)
                    }
                </h2>
		        <hr />
                <div className="cards">
                    {this.state.data.map(card=>
                        <Card 
                            key={card._id}
                            data={card}
                        />
                    )}
                </div>
            </section>
            <Footer />
            </>
            :<div className="text-center wait">
                <img src={WaitGif} alt="" />
                <h4>Fetching data...</h4>
            </div>
        )
    }
}
 
export default MainSection