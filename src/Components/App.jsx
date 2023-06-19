import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';

const App = () => {
  return (
        <Routes>
            <Route path="/pay" Component={Pay} />
            <Route exact path="/success" Component={Success}/>
        </Routes>
  )
}

export default App;
