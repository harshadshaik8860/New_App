import React from 'react';

const Dashboard = () =>{
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <h2 className="text-primary">Dashboard</h2>
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col-lg-3 form-group">
                    <i className="fa fa-users fa-5x text-primary"></i>
                    <h4> 100 Customers </h4>
                </div>

                <div className="col-lg-3 form-group">
                    <i className="fa fa-user-plus fa-5x text-secondary"></i>
                    <h4> New Customers </h4>
                </div>

                <div className="col-lg-3 form-group">
                    <i className="fa fa-check fa-5x text-warning"></i>
                    <h4> 50 Interested Customers </h4>
                </div>

                <div className="col-lg-3 form-group">
                    <i className="fa fa-headset fa-5x text-success"></i>
                    <h4> 40 For Today Follow Up  </h4>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;