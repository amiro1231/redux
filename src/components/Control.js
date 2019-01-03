import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm

const propTypes = {
    onPlus:PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor:PropTypes.func
};//버튼들이 클릭되면 실행될 함수들을 prop로 받아올것임

//const defaultProps = {
//    onPlus: ()  => console.warn('onPlus is not defined')
//};//기본값은 해당 함수가 설정되지 않았다면 알림으로 경고하게함. 그런데 onSubtract,onRandomizeColor도 동일하게 만들어야하니 중복되므로 경고함수를 만들어서 중복되는 내용을 제거해주자
function createWarning(funcName){
  return () => console.warn(funcName+'is not defined')
}//파라미터로 함수를 받고, 새 함수를 만들어서 리턴하도록 한다.
const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
}//초기값 설정

class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <buttons onClick={this.props.onPlus}>+</buttons>
              <buttons onClick={this.props.onSubtract}>-</buttons>
              <buttons onClick={this.props.onRandomizeColor}>Randomize Color</buttons>
            </div>//버튼은 +,-,배경색 랜덤기능이며 onClick으로 버튼이 눌리면 해당내용이 실행되도록 설정
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control
;
