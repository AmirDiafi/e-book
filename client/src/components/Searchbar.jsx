import React from 'react'
import {Link} from 'react-router-dom'
import './stylesheets/searchbar.css'

class Searchbar extends React.Component {
    state = {
        data: this.props.data,
            searched: false
    }

    componentDidMount() {
        document.body.addEventListener('click', () => {
	    this.setState({searched: false})
	})
    }

    handleValueSearch = (event) => {
	event.preventDefault()
	let data = event.target.value.length>0?this.props.data.filter(item=>item.nameOfTheBook.includes(event.target.value)||item.type.includes(event.target.value)):[]
        this.setState({
            data: data.length===0?undefined:data,
            searched: true
        })
    }

    render() {
        return (
            <div className="search-bar">
                <div className="content">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Find a book"
                        onChange={this.handleValueSearch}
                    />
                    {this.state.searched
			&&<div className="result-of-search">
                        {this.state.data&&this.state.data.length!==0
                        ?<div className="list">
                            {this.state.data.map(item=> 
                                <>
                                    <Link 
                                        to={"/books/cardbook/"+item._id}
                                        className="item-card">
                                        <span>
                                            {item.nameOfTheBook}
                                        </span>
                                    </Link>
                                    <hr />
                                </>
                            )}
                        </div>
                        :this.state.searched&&"There is no result!"}
                     </div>}
                </div>
            </div>
        )
    }
}

export default Searchbar 