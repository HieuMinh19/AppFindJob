import React from 'react';
import { Text, View, StatusBar, Image,
         TouchableOpacity, TouchableHighlight,
         TextInput, Alert } from 'react-native';
import styles from '../css/Styless';
import global from '../api/global';
import getToken from '../api/getToken';
import checkLogin from '../api/checkLogin';

export default class DangKi extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        txtTaiKhoan: "",
        txtMatKhau: "",
        txtRetypeMatKhau: "",
        errMessage:"",

        //uname:null

      
      }
     
    }

    clickDoiMatKhau(){
        console.log("vao duoc click DoiMatKhau");

      fetch("http://192.168.1.101/serverDoiMatKhau.php",{

          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "txtTaiKhoan": this.state.txtTaiKhoan,
          "txtMatKhauCu": this.state.txtMatKhau,
          "txtRetypeMatKhauMoi": this.state.txtRetypeMatKhau,
          })
       })
      .then(  (response) => response.json())
      .then(  (responseJson) => {       
        this.setState({errMessage:responseJson.kq}) 
         //Alert.alert('them thanh cong')
          //setTimeout(() => Alert.alert('tạo tài khoản không thành công'), 2);
          if(this.state.errMessage == "Thành Công"){
            Alert.alert('Đăng Kí Thành Công')
          }   else{
            Alert.alert('Đăng Kí Thất Bại')
          } 
          //this.state.errMessage = ""
          
           this.state.errMessage = "";
           this.state. txtTaiKhoan= "",
           this.state.txtMatKhau= "",
          this.state.txtRetypeMatKhau= ""

        // this.props.navigation.navigate('Login')

      } )
      .catch((error)=>  
      Alert.alert("Thất Bại"));
    }
    static navigationOptions = {
        title: 'Đổi Mật Khẩu',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
    };

    render() {
        return (
          <View style={styles.container}>
            <StatusBar hidden/>

            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={{fontSize: 25, fontWeight: '500', color: '#000'}}>Đổi mật khẩu</Text>
            <Text style={{paddingLeft: 20}}>{this.state.uname}</Text>

            <Text style={{paddingLeft: 25,color:'#585858', fontWeight:'bold'}}>Tài khoản</Text>
            <TextInput style={styles.txtInput2}  
                onChangeText={(txtTaiKhoan) => this.setState({txtTaiKhoan})}
                value={this.state.txtTaiKhoan}/>

            <Text style={{paddingLeft: 25,color:'#585858', fontWeight:'bold'}}>Mật khẩu mới</Text>
            <TextInput style={styles.txtInput2}  
                 secureTextEntry
                onChangeText={(txtMatKhau) => this.setState({txtMatKhau})}
                value={this.state.txtMatKhau}/>

            <Text style={{paddingLeft: 25,color:'#585858', fontWeight:'bold'}}>Nhập lại mật khẩu mới</Text>
            <TextInput style={styles.txtInput2}  
                 secureTextEntry
                onChangeText={(txtRetypeMatKhau) => this.setState({txtRetypeMatKhau})}
                value={this.state.txtRetypeMatKhau}/>

          <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>

            <TouchableOpacity style={styles.btn1} onPress={this.clickDoiMatKhau.bind(this)}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Đổi Mật Khẩu</Text>
            </TouchableOpacity>
          </View>
        );
      }
}

