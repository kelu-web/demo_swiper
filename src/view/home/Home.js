// import logo from '../../assets/img/logo.svg';
import './Home.css';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Swiper_demo from '../../components/swiper/index'

import { pursecardFun } from '../../redux/actions'
import { Button, DatePicker, version } from "antd";
import img1 from '../../images/img1.jpg'
// let img1 = require('../../images/img1.jpg')
let img2 = require('../../images/img2.jpeg')
let img3 = require('../../images/img3.jpg')
let img4 = require('../../images/img4.jpg')
let img5 = require('../../images/img5.jpg')

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    imgs: [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }]
  }
  componentDidMount() {

  }

  render() {
    let { imgs } = this.state
    return (
      <div className="App">
        <div className="warp">

          < Swiper_demo ></Swiper_demo>
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






