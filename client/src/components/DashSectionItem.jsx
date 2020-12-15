import { ViewStream } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

class DashSectionItem extends React.Component {
    
    render() {
        let data = this.props.data.filter(card=>card.type===this.props.type)
        let progress = (data.length*100)/this.props.data.length
        return (
            <div className="section-item">
               <div className="content">
                    <div className="name-of-section">
                        Section of <span className="the-name">
                            {this.props.type}
                        </span>
                    </div>
                    <div className="length-of-section">
                        count: 
                        <span className="the-length">
                            {data.length + 
                            (data.length>1?" posts":" post")}
                        </span>
                    </div>
               </div>
                <div 
                    className="prograssbar"
                >
                    <div className="progress"
                        style={{
                            width: progress?progress+"%":"0%"
                        }}>
                        {progress&&progress.toFixed(2)+"%"}
                    </div>
                </div>
                <Link 
                    className="btn" 
                    to={"/books/section/"+this.props.type}>
                    See Section <ViewStream />
                </Link>
            </div>
        )
    }
}
 
export default DashSectionItem