import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Header from './header';

const Newcustomer = () => <h2 className="text-center"> New Customer</h2>
const Allcustomer = () => <h2 className="text-center"> All Customer</h2>
const Followup = () => <h2 className="text-center"> Follow Up Customer</h2>

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/allcustomer" component={Allcustomer}/>
      <Route exact path="/followup" component={Followup}/>
      <Route exact path="/newcustomers" component={Newcustomer}/>
    </HashRouter>
  );
}

export default App;
