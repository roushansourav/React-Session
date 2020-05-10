import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Todo from './todo/home';
import TodoLayman from './todolayman';
import KeySession from './keySession';
import LifeCycle from './lifeCycle';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/lifecycle' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>LifeCycle</Link>
          <Link to='/keysession' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Key Session</Link>
          <Link to='/todo' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Todo</Link>
          <Link to='/todolayman' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Todo Layman</Link>
        </nav>        
        <Switch>
          <Route exact path='/todo'><Todo/></Route>
          <Route exact path='/todolayman'><TodoLayman/></Route>
          <Route exact path='/keysession'><KeySession/></Route>
          <Route exact path='/lifecycle'><LifeCycle/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
