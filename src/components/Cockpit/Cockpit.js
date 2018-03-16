import React from 'react';
import './Cockpit.css';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assigndClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assigndClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assigndClasses.push(classes.bold);
    }
    

    return (
        <div className={classes.Cockpit} >
            <h1>{props.appTitle}</h1>
            <p className={assigndClasses.join(' ')} >this is really working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons
          </button>
        </div>
    );
};

export default Cockpit;