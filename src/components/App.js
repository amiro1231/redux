import React, { Component} from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'; // ES6
var PropTypes = require('prop-types'); // ES5 with npm

const propTypes = {
};
const defaultProps = {
};
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <Counter/>
        );
    }
}
App.propTypes = PropTypes;
App.defaultProps = defaultProps;
export default App;
