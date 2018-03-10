import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // an alternative -> const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // alternative way to declare CSS
    /*const style = {
      backgroundColor: 'green',
      color: '#fff',
      font: 'inherit',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      padding: '6px 10px',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'ease-in 0.1s',
    };*/

    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    changed={ (event) => this.nameChangedHandler(event, person.id)} />
          })}
          </div>
      );
      btnClass = classes.Red;
    }

    let assigndClasses = [];
    if (this.state.persons.length <= 2) {
      assigndClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assigndClasses.push(classes.bold);
    }
    

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assigndClasses.join(' ')} >this is really working</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
      </div>
    );
  }
}

export default App;
