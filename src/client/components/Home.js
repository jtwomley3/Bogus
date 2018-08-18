import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSample } from '../services/sampleServices';

export class HomeContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  componentDidMount = async () => {
    let response = await getSample();
    let data = await response.json();
    this.setState({ message: data.message });
  };

  render() {
    return (
      <div>
        <h1>Put your home page here</h1>
        <p>Response: {this.state.message}</p>
      </div>
    );
  }

}

HomeContainer.propTypes = {
  vars: PropTypes.object,
};


function mapStateToProps(state) {
  return {
    vars: state.env.vars
  };
}

export default connect(mapStateToProps)(HomeContainer);
