import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Header from './header';
import Login from './login';
import Newcustomer from './newcustomer';
import Allcustomer from './allcustomer';
import Followup from './followup';

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
