// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route, useLocation } from 'react-router-dom';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Contact from './components/Pages/contact/Contact';
import NavBar from './components/NavBar/NavBar';
import {AnimatePresence} from 'framer-motion'
import Projects from './components/Pages/Proyects';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <NavBar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/portafolio'><Home/></Route>
          <Route path='/portafolio/about'><About/></Route>
          <Route path='/portafolio/skills'><Skills/></Route>
          <Route path='/portafolio/projects'><Projects/></Route>
          <Route path='/portafolio/contact'><Contact/></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
