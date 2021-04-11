import React , {useState} from 'react';

const Followup = () =>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-primary text-center">Today Customer Follow Up</h2>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr className="bg-secondary tex-primary text-center text-white">
                                        
                                        <td>Name</td>
                                        <td>Mobile No</td>
                                        <td>E-mail</td>
                                        <td>Service</td>
                                        <td>Feedback</td>
                                        <td>Remarks</td>
                                        <td>Action</td>
                                        
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
}

export default Followup;