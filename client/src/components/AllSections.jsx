import React from 'react'

class DashSectionItem extends React.Component {
    
    render() {
        return (
            <div className="section-item">
                <div className="content">
                    <div className="name-of-section">
                        all sections
                    </div>
                    <div className="length-of-section">
                        count: 
                        <span className="the-length">
                            {this.props.data.length +
                            (this.props.data.length>1
                            ?" posts":" post")}
                        </span>
                    </div>
                </div>
                <div 
                    className="prograssbar"
                    style={{width: "100%"}}
                >
                    <div className="progress">
                       {this.props.data.length>0
                       ?"100%"
                        :"0%"}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default DashSectionItem