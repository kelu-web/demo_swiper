// import logo from '../../assets/img/logo.svg';
import './Home.css';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import ds from '../friend/friend'

import { pursecardFun } from '../../redux/actions'
import { Button, DatePicker, version } from "antd";

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div className="warp">

        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inclick: () => dispatch(pursecardFun('CCC')),
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(App)






