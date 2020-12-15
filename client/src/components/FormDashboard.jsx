import React from 'react'
import './stylesheets/form-dashboard.css'

class FormDashboard extends React.Component {
    state = { 
        isSubmited: 'none',
        value: '',
        nameOfTheBook: '',
        type: '',
        ref: '',
        price: '',
        isExist: '',
        stars: '',
        desc: ''
    }

    handleValue = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.target)
            fetch('/new_book', {
                method: 'POST',
                body: formData
            })
            this.setState(
                {
                    isSubmited: 'block',
                    nameOfTheBook: '',
                    type: '',
                    ref: '',
                    price: '',
                    isExist: '',
                    stars: '',
                    desc: ''
                }
            )
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div className="form-dahsboard text-center">
                <p 
                    style={{display: this.state.isSubmited}} 
                    className="alert alert-success">
                    The book is added succefully
                </p>
                <h3>Add New Book</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="image-file">
                        <label htmlFor="image">
                            Upload image
                        </label>
                        <input 
                            required
                            type="file"
                            name="image"
                            id="image"
                        />
                    </div>
		            <label htmlFor="title">
                        Title of the book
                        <input 
                            id="title"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Name Of The Book"
                            name="nameOfTheBook"
                            value={this.state.nameOfTheBook}
                            onChange={this.handleValue}
                        />
		            </label>
		            <label htmlFor="type">
                        Type of the book
                        <select 
                            required
                            id="type"
                            type="text"
                            className="form-control"
                            placeholder="Type Of The Book"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleValue}
                        >
                            <option value="drama">
                                Drama
                            </option>
                            <option value="policy">
                                Policy
                            </option>
                            <option value="romantic">
                                Romantic
                            </option>
                            <option value="fantasy">
                                Fantasy
                            </option>
                            <option value="policy">
                                Policy
                            </option>
                            <option value="religion">
                                Religion
                            </option>
                            <option value="science">
                                Science
                            </option>
                        </select>
                    </label>
                    <div className="isExist">
                        <h5>is the book available</h5>
                        <label htmlFor="isTrue">
                            True 
                            <input 
                                required
                                type="radio"
                                name="isExist"
                                id="isTrue"
                                value="true"
                                onChange={this.handleValue}
                                checked={this.state.isExist==='true'}
                            />
                        </label>
                        <label htmlFor="isFalse">
                            False 
                            <input 
                                required
                                type="radio"
                                name="isExist"
                                id="isFalse"
                                value="false"
                                onChange={this.handleValue}
                                checked={this.state.isExist==='false'}
                            />
                        </label>
                    </div>
                    <label htmlFor="ref">
                        Reference of the book
                        <input 
                            id="ref"
                            value={this.state.ref}
                            onChange={this.handleValue}
                            required
                            type="number"
                            name="ref"
                            className="form-control"
                            placeholder="Reference"
                        />
                    </label>
                    <label htmlFor="price">
                        Price of the book
                        <input 
                            value={this.state.price}
                            onChange={this.handleValue}
                            required
                            min="0"
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Price by DZD"
                        />
                    </label>
                    <div className="rates">
                    <h5 className="text-center">
                        Stars of this Book 
                    </h5>
                    <div className="stars">
                        <input 
                            required
                            type="radio"
                            name="stars"
                            id="five"
                            value="5"
                            onChange={this.handleValue}
                            checked={this.state.stars==='5'}
                        />
                        <label htmlFor="five"></label>
                        <input 
                            required
                            type="radio"
                            name="stars"
                            id="four"
                            value="4"
                            onChange={this.handleValue}
                            checked={this.state.stars==='4'}
                        />
                        <label htmlFor="four"></label>
                        <input 
                            required
                            type="radio"
                            name="stars"
                            id="three"
                            value="3"
                            onChange={this.handleValue}
                            checked={this.state.stars==='3'}
                        />
                        <label htmlFor="three"></label>
                        <input 
                            required
                            type="radio"
                            name="stars"
                            id="tow"
                            value="2"
                            onChange={this.handleValue}
                            checked={this.state.stars==='2'}
                        />
                        <label htmlFor="tow"></label>
                        <input 
                            required
                            type="radio"
                            name="stars"
                            id="one"
                            value="1"
                            onChange={this.handleValue}
                            checked={this.state.stars==='1'}
                        />
                        <label htmlFor="one"></label>
                    </div>
                </div>
                    <label htmlFor="desc">
                        About the book
                        <textarea 
                            className="form-control" 
                            col="12" 
                            row="8"
                            placeholder="About The book" 
                            id="desc" 
                            name="desc"
                            value={this.state.desc}
                            onChange={this.handleValue}
                        />
                    </label>
                    <div className="submit">
                        <button 
                            type="submit" 
                            className="btn btn-primary">
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default FormDashboard;