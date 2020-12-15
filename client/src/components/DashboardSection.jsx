import React from 'react'
import DashSectionItem from './DashSectionItem'
import AllSections from './AllSections'

class DashboardSection extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch(`/books/api`)
        .then(data=>data.json())
        .then(data=>this.setState({data:data}))
    }

    render() {
        return (
            <div className="dashboard-section">
                <h2>
                    Sections:
                </h2>
                <div className="sections">
                    <DashSectionItem 
                        data={this.state.data} 
                        type='drama'/>
                    <hr/>
                    <DashSectionItem 
                        data={this.state.data} 
                        type='romantic'/>
                    <hr/>
                    <DashSectionItem 
                        data={this.state.data} 
                        type='fantasy'/>
                    <hr/>
                    <DashSectionItem 
                        data={this.state.data} 
                        type='policy'/>
                    <hr/>
                    <DashSectionItem 
                        data={this.state.data} 
                        type='religion'/>
                    <hr/>
                    <DashSectionItem 
                        data={this.state.data} 
                        type='science'/>
                    <hr/>
                    <AllSections data={this.state.data}/>
                </div>
                <hr/>
            </div>
        )
    }
}
 
export default DashboardSection