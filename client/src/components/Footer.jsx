import { EmailOutlined, LocationCityOutlined, MobileScreenShareOutlined, PhoneOutlined, Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import './stylesheets/footer.css'

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row">
		        <div className="info text-left col col-12 col-md-6">
                    <ul className="list-unstyled contact">
                        <li><EmailOutlined /> <a href="mailto:example@provider.com">example@provider.com</a> </li>
                        <li><PhoneOutlined /> <a href="tel:+">000 333 555</a> </li>
                        <li><MobileScreenShareOutlined /> <a href="tel:+">000 333 555</a> </li>
                        <li><LocationCityOutlined /> City of Barika, 53 No. 5 </li>
                    </ul>
		            <ul className="list-unstyled social-network">
                        <li><a className="facebook" href=""><Facebook /></a></li>
                        <li><a className="instagram" href=""><Instagram /></a></li>
                        <li><a className="twitter" href=""><Twitter /></a> </li>
                    </ul>
                </div>
                <div className="location-map col col-12 col-md-6">
                    <iframe src="" frameborder="0"></iframe>
                </div>
            </div>
		    <hr />
		    <footer>All Rights Reserver E-Book 2020</footer>
		</div>
    </div>
    )
}

export default Footer