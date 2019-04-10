import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import UserDashboard from './components/UserDashboard';

const Routes = () =>{
    return(
        <Layout>
            <Switch>
                <Route exact path="/user/dashboard" component={UserDashboard}/>
                <Route path="/register_login" component={RegisterLogin}/>
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </Layout>
    );
};

export default Routes;
