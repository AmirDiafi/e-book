import React from 'react'
import DashboardSection from './DashboardSection'
import SearchBarDashboard from './SearchBarDashboard'
import FormDashboard from './FormDashboard'
import './stylesheets/dashboardsection.css'
import SecondaryBar from './SecondaryBar'

class Dashboard extends React.Component {
    
    render() {
        return (
            <>
            <SecondaryBar />
            <div className="dashboard container">
                <h1 className="text-center">
                    Dashboard
                </h1>
                <DashboardSection />
                <hr/>
                <SearchBarDashboard />
                <hr/>
                <FormDashboard />
            </div>
            </>
        )
    }
}
 
export default Dashboard