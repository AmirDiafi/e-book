import React from 'react'
import './stylesheets/login.css'
import { SendOutlined } from '@material-ui/icons'

class Form extends React.Component {

    render() {
        return (
            <div className="login-form container">
                <form 
		    action="/login_admin"
		    method="POST"
		>
                    <h4>login form</h4>
                    <label htmlFor="addminname">
                        Admin Name
                    </label>
                    <br/>
                    <input 
                        className="form-control"
                        required
                        type="text"
                        placeholder="Admin Name"
                        name="adminname"
                        id="adminname"
                    />
                    <br/>
                    <label htmlFor="addminname">
                        Password
                    </label>
                    <br/>
                    <input 
			required
                        className="form-control"
                        type="password" 
                        name="password"
                        placeholder="Password"
                        id="password"
                    />
                    <hr/>
                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        log-in <SendOutlined />
                    </button>
                </form>
            </div>
        )
    }
}
 
export default Form;