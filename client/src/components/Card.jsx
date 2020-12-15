import { StarBorder, Star, ArrowForward } from '@material-ui/icons'
import React from 'react'
import './stylesheets/card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component {

    render() {
        let stars
	    if(this.props.data){
        switch (this.props.data.stars) {
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
            !this.props.link?
            <Link 
                to={"/books/cardbook/"+this.props.data._id}
                className="card">
                <div className="head">
                    <img 
                        src={this.props.data.image} 
                        alt=""
                    />
                </div>
                <div className="body text-center">
                    <p>
                        {this.props.data.nameOfTheBook}
                    </p>
                    {stars}
                </div>
            </Link>
            :<Link 
                to={"/books/section/"+this.props.type}
                className="more">
                <h6>
                    See More <ArrowForward />
                </h6>
            </Link>
        )
    }
}
 
export default Card