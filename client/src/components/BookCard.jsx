import React from 'react'
import './stylesheets/cardbook.css'
import { StarBorder, Star } from '@material-ui/icons'
import Footer from './Footer'
import SecondaryBar from './SecondaryBar'
import WaitGif from '../assets/wait.gif'

class BookCard extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
	window.scrollTo(0,0)
        const path = window.location.pathname
        fetch(`/books/card/${path.substr(16 ,path.length)}`)
        .then(data=>data.json())
        .then(data=>this.setState({data:data}))
    }

    render() {
        let stars
	    if(this.state.data.length!==0){
        switch (this.state.data.stars) {
            case 1:
                stars = <ul className="list-unstyled rates">
                <li><Star /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
		        </ul>
                break;
            case 2:
                stars = <ul className="list-unstyled rates">
                <li><Star /></li>
                <li><Star /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
  		        </ul>
                break;
            case 3:
                stars = <ul className="list-unstyled rates">
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
                <li><StarBorder /></li>
                <li><StarBorder /></li>
		        </ul>
                break;
            case 4:
                stars = <ul className="list-unstyled rates">
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
                <li><StarBorder /></li>
		        </ul>
                break;
            case 5:
                stars = <ul className="list-unstyled rates">
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
                <li><Star /></li>
		        </ul>
                break;
            default:
                break;
        }}

        return (
            <div className='book-card text-center'>
                {this.state.data.length!==0
                ?<>
                <SecondaryBar />
		        <div className="content container">
                    <div className="card">
                        <div className="head">
                            <div className="overlay"></div>
                            <div className="img">
                                <img 
                                    src={this.state.data.image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="body">
                            <h4>
                                {this.state.data.nameOfTheBook}
                            </h4>
			                <hr/>
                            {stars}
                            <ul className='list-unstyled info'>
                                <li>
                                    Reference: <span>{this.state.data.ref}</span>
                                </li>
                                <li>
                                    Is Available: <span>{
                                        this.state.data.isExist===true
                                        ?"Yes"
                                        :"Not yet"
                                    }</span>
                                </li>
                                <li>
                                    Price: <span>{this.state.data.price} DZD</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="desc">
                        <h3 className="text-center">About the book</h3>
                        <p>{this.state.data.desc
                            ?this.state.data.desc
                            :"there is no description yet"}
                        </p>
		            </div>
                </div>
		        <Footer />
		        </>
                :
                <div className="text-center wait">
                    <img src={WaitGif} alt="" />
                    <h4>Fetching data...</h4>
                </div>
                }
            </div>
        )
    }
}
 
export default BookCard