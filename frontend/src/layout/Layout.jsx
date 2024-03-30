import React, { Fragment } from 'react'
import Sidebar from '../component/sitebar/Sidebar'
import './layout.css'
import { Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
import NewPatient from '../pages/NewPatient'
import Header from '../component/Header'

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
                </Routes>

            </div>
        </div>
    </Fragment>
  )
}

export default Layout