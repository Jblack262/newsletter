import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Student} from './pages';

function App() {
  const [currStudent, setCurrStudent] = React.useState('');//current student for rendering the student page with whatever student you click on

  const setNewStudent = (newStudent) => { //function to pass to hex grid so student page can get the student you click on
    setCurrStudent(newStudent);
  }

  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/" exact component={() => <Home setNewStudent={setNewStudent} student={currStudent}/>} />
          <Route path="/student" exact component={() => <Student student={currStudent}/>} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
