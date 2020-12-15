import { Link } from '@material-ui/core'
import React from 'react'
import './stylesheets/header.css'

class Header extends React.Component {
    state = {  }
    render() { 
        return (
            <header className='text-center'>
                <div className="overlay"></div>
                <div className="logo">
                    <Link to='/'>
                        Logo ----
                    </Link>
                </div>
            </header>
        )
    }
}
 
export default Header