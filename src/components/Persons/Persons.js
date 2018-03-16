import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside ComponentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside ComponentWillReceiveProps",
      nextProps
    );
  }

  // Only render component if props have changed
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate");
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside ComponentWillUpdate");
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] inside Render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          position={index}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

Persons.propTypes = {
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default Persons;
