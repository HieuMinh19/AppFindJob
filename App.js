import React, {Component} from 'react';
import { Text, View, StatusBar} from 'react-native';
import {createStackNavigator} from "react-navigation";
import TrangChu from "./components/TrangChu";
import DangNhap from "./components/DangNhap";
import DangKi from "./components/DangKi";
import TaoCV from "./components/TaoCV";

import DoiMatKhau from "./components/DoiMatKhau";
import showCongViec from "./components/ShowCongViec";
import PartTime from "./components/PartTime";
import FullTime from "./components/FullTime";
import ChiTietCViec from "./components/ChiTietCViec";

import UpdateCV from "./components/UpdateCV";

const App = createStackNavigator({
  Home: { screen: TrangChu},
  Login: {screen: DangNhap},
  Register:{screen: DangKi},
  TaoCV:{screen:TaoCV},
  DoiMatKhau:{screen:DoiMatKhau},
  ChiTietCViec:{screen:ChiTietCViec},
  showCongViec:{screen:showCongViec},
  UpdateCV:{screen:UpdateCV},
  PartTime:{screen:PartTime},
  FullTime:{screen:FullTime},
}, {
  initialRouteName: 'Home'
});
_toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
}
export default App;