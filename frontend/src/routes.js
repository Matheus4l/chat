import React from 'react';
import {BrowserRouter,Route, Switch}from 'react-router-dom';
import Login from './pages/login';

import Home from './pages/home';


export default function Routes(){
   
   return( <BrowserRouter>
     <Switch>
       <Route path='/home/' component={Home}  />;
       <Route path='/' component={Login}  />;
     </Switch>
    </BrowserRouter>
   );
}