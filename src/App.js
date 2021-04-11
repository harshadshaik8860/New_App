import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Header from './header';
import Login from './login';

const Newcustomer = () => <h2 className="text-center"> New Customer</h2>
const Allcustomer = () => <h2 className="text-center"> All Customer</h2>
const Followup = () => <h2 className="text-center"> Follow Up Customer</h2>

function App() {
  if(localStorage.getItem("userid")==null){
     return(
       <Login/>
     );
  }else{

 
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/allcustomer" component={Allcustomer}/>
      <Route exact path="/followup" component={Followup}/>
      <Route exact path="/newcustomers" component={Newcustomer}/>
      <Route exact path="/login" component={Login}/>
    </HashRouter>
  );
}
}
export default App;
