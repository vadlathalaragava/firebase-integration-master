import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const Route = createStackNavigator(
    {
        LoginPage:LoginPage,
        SignupPage:SignupPage
        
    },
    {
        initialRouteName:"LoginPage"
    }
);


const RouteConfig=createAppContainer(Route);

export default RouteConfig;