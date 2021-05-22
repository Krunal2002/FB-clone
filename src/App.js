import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">

      {user ? (

         <>
          <Header />

          <div className="app_body">
            <Sidebar/>
            <Feed />
            <Widgets /> 
              
          </div>
        </>
      
      ) : (

        <Login /> 
       
      )}

       
         


    </div>
  );
}

export default App;
