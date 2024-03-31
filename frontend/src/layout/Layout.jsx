import React, { Fragment } from 'react'
import Sidebar from '../component/sitebar/Sidebar'
import './layout.css'
import { Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
import NewPatient from '../pages/patient/NewPatient'
import Header from '../component/Header'
import PatientsList from '../pages/patient/PatientsList'
import PatientDetails from '../pages/patient/PatientDetails'



const Layout = () => {
  return (
    <Fragment>
        <div className='app_container'>
            <Sidebar />
            <div className='app_view'>
                <Header />
                <Routes>
                    <Route path='' Component={Dashboard} />
                    <Route path='/new-patient' Component={NewPatient} />
                    <Route path='/all-patients' Component={PatientsList} />
                    <Route path='/patient-details/:id' Component={PatientDetails} />
                </Routes>

            </div>
        </div>
    </Fragment>
  )
}

export default Layout