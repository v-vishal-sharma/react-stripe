import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';

const App = () => {
  return (
      <Router>
        <Routes>
            <Route exact path="/pay" Component={Pay} />
            <Route exact path="/success" Component={Success}/>
        </Routes>
      </Router>    
  )
}

export default App;
