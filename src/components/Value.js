import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm

const propTypes = {
  number: PropTypes.number
};//number형태이므로 propTypes을 number로 해줌
const defaultProps = {
  number: -1
};//기본값이 -1으로 하는 이유는 parents에서 아직 값을 못가져왔다는 것을 의미한다
class Value extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <h1>{this.props.number}</h1>
            </div>
        );
    }
}
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
export default Value;
