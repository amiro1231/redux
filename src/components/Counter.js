import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';

//import PropTypes from 'prop-types'; // ES6
var PropTypes = require('prop-types'); // ES5 with npm

const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <Value/>
              <Control/>
            </div>
        );//import해준 Value, Control을 랜더링해보자
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;
export default Counter;
