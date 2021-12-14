import React from 'react'
import PropTypes from 'prop-types'

const SummaryCardsContainer = (props: object) => {
  return (
    <div className="row">

      <div className="col-xl-3 col-md-6">

        <div className="card">
          <div className="card-body widget-user">
            <div className="text-center">
              <h2 className="fw-normal text-primary" data-plugin="counterup">6599</h2>
              <h5>Today's New Viewers</h5>
            </div>
          </div>
        </div>
       

      </div>


      <div className="col-xl-3 col-md-6">

        <div className="card">
          <div className="card-body widget-user">
            <div className="text-center">
              <h2 className="fw-normal text-primary" data-plugin="counterup">6599</h2>
              <h5>Total Viewers</h5>
            </div>
          </div>
        </div>
       

      </div>

      <div className="col-xl-3 col-md-6">

        <div className="card">
          <div className="card-body widget-user">
            <div className="text-center">
              <h2 className="fw-normal text-primary" data-plugin="counterup">6599</h2>
              <h5>Today's Subscribers</h5>
            </div>
          </div>
        </div>
       

      </div>
      <div className="col-xl-3 col-md-6">

        <div className="card">
          <div className="card-body widget-user">
            <div className="text-center">
              <h2 className="fw-normal text-primary" data-plugin="counterup">6599</h2>
              <h5>Total Subscribers</h5>
            </div>
          </div>
        </div>
       

      </div>

      
      
     
    </div>

  )
}

SummaryCardsContainer.propTypes = {

}

export default SummaryCardsContainer
