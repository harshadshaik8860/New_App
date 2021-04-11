import React , {Component}from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state ={
            email :'',
            Pass : '',
            message : ''
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-danger text-center">{this.state.message}</p>
                        <div className="card">
                            <div className="card-header bg-secondary text-white text-center">Login</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>E-mail Id</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}
export default Login;