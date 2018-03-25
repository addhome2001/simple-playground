import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import ErrorHandler from './ErrorHandler';
import TextField from './TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { value: name } = target;
    this.setState({ name });
  }

  render() {
    const { name } = this.state;
    const { text } = this.props.greeting;
    return (
      <ErrorHandler>
        <div>
          <h3>
            <React.Fragment>
              <TextField key={text} text={text} />
              ,
              <TextField key={name} text={name} />
            </React.Fragment>
          </h3>
          <span>Your name: </span>
          <input type="text" onChange={this.handleInputChange} />
        </div>
      </ErrorHandler>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(App);