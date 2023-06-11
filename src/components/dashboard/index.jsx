import React from 'react'
import './dashboard.css'
import Main from './main'
import Details from './details'
import Transaction from './transaction'

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="dashboard row">
        <div className="main col-sm-12 col-md-3 col-lg-3 mt-2">
          <Main />
        </div>
        <div className="details col-sm-12 col-md-9 col-lg-9 mt-2">
          <div className='tracker form row'>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <Details title="Income" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            {/* <Details title="Income" /> */}
            <Details title="Expense" />
            </div>
          </div>
          <div className='transcation form'>
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard