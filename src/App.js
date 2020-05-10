import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Todo from './todo/home';
import TodoLayman from './todolayman';
import KeySession from './keySession';
import LifeCycle from './lifeCycle';
// Styled components
import styled from 'styled-components'
import { engrave } from './styles'


const Nav = styled.nav`
  ${engrave}
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
`
function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <StyledLink to='/lifecycle' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>LifeCycle</StyledLink>
          <StyledLink to='/keysession' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Key Session</StyledLink>
          <StyledLink to='/todo' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Todo</StyledLink>
          <StyledLink to='/todolayman' style={{margin:'0px 0.5rem',padding:'0.35rem 1rem'}}>Todo Layman</StyledLink>
        </Nav>        
        <Switch>
          <Route exact path='/todo'><Todo/></Route>
          <Route path='/todolayman'><TodoLayman/></Route>
          <Route path='/keysession'><KeySession/></Route>
          <Route path='/lifecycle'><LifeCycle/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
