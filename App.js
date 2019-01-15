import React, {Component} from 'react';
import { Text, View, StatusBar} from 'react-native';
import {createStackNavigator} from "react-navigation";
import TrangChu from "./components/TrangChu";
import DangNhap from "./components/DangNhap";
import DangKi from "./components/DangKi";
import TaoCV from "./components/TaoCV";
//import TaoCV2 from "./components/TaoCV2";
import showCongViec from "./components/ShowCongViec";
import PartTime from "./components/PartTime";
import FullTime from "./components/FullTime";
import ChiTietCViec from "./components/ChiTietCViec";
import DoiMatKhau from "./components/DoiMatKhau";
const App = createStackNavigator({
  Home: { screen: TrangChu},
  Login: {screen: DangNhap},
  Register:{screen: DangKi},
  TaoCV:{screen:TaoCV},
  DoiMatKhau:{screen:DoiMatKhau},
  ChiTietCViec:{screen:ChiTietCViec},
  showCongViec:{screen:showCongViec},
  
  PartTime:{screen:PartTime},
  FullTime:{screen:FullTime},
}, {
  initialRouteName: 'Home'
});
_toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
}


export default App;