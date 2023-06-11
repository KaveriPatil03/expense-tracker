import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../useTransactions'
import 'chart.js/auto';

const Details = ({ title}) => {
  const {total, chartData} = useTransactions(title)

  return (
    <div className="row">
    <div className='budget form-title col-sm-12 col-md-2 col-lg-2'>
      <div className="d-flex justify-content-between">
      <h3 className='pt-2'>{title}</h3>
      <h1 className=''>${total}</h1>
      </div>

      <div className='col-sm-12 col-md-8 col-lg-8'>
      <Doughnut data={chartData} />
      </div>
      {/* <h1 className=''>${total}</h1> */}
    </div>
    </div>
  )
}

export default Details