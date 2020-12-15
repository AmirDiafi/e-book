import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@material-ui/icons'
import './stylesheets/secondarybar.css'

function SecondatyBar() {
    return (
        <div className="secondary-bar">
            <Link to="/" className="icon-home">
                <HomeOutlined />
            </Link>
        </div>
    )
}
 
export default SecondatyBar