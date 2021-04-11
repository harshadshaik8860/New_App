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

    ProcessEmail = (obj) =>{
            this.setState({
                email:obj.target.value
            })
    }

    ProcessPass= (obj) =>{
        this.setState({
            pass:obj.target.value
        })
    }

    goLogin = () =>{
        if((this.state.email==="admin@gmail.com") && (this.state.pass==="123")){
                this.setState({
                    message:"Success : Please wait redirectiong ...."
                })
                localStorage.setItem("name", "Harshad");
                localStorage.setItem("userid", "7306462898");
                window.location.reload();
        }else{
            this.setState({
                message:"Fail : Invalid email or Password"
            })
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
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.ProcessEmail}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                     className="form-control"
                                     onChange={this.ProcessPass}/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary"onClick={this.goLogin}>Login</button>
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