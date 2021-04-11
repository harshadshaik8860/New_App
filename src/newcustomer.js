import React , {Component} from 'react';
class Newcustomer extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <h2 className="text-center text-primary"> New Customer </h2>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-lg-1"></div>
         <div className="col-lg-10">
           <form>
                <div className="card">
                    <div className="card-header bg-secondary text-white text-center">
                        Enter Customer Details
                    </div>
                    <div className="card-body">
                        <div className="row form-group">
                            <div className="col-lg-4">
                                <label>Customer Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                                <label>Mobile No</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                                <label>e-Mail Id</label>
                                <input type="email" className="form-control"/>
                            </div>
                        </div>  
                        <div className="row form-group">
                            <div className="col-lg-4">
                                <label>City</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                                <label>Pincode</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                                <label>Address</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div> 
                        <div className="row form-group">
                            <div className="col-lg-4">
                                <label>Service Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-lg-2">
                                <label>Remarks</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-lg-6">
                                <label>Follow Up Date</label>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="number" className="form-control"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="number" className="form-control"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="number" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-lg-12">
                                <label> Feedback on discussion </label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary"> Save Customer </button>
                    </div>
                </div> 
            </form>
         </div>
        <div className="col-lg-1"></div>
    </div>
</div>
        )
    }
}

export default Newcustomer;