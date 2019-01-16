import React from 'react';
import { Text, View, StatusBar, Image,
         TouchableOpacity, KeyboardAvoidingView,StyleSheet,
         TextInput, Alert, AsyncStorage } from 'react-native';
import styles from '../css/Styless';
import global from '../api/global';
import getToken from '../api/getToken';
import checkNapHoSo from '../api/checkNapHoSo';
import saveToken from '../api/saveToken';
import saveAsync from '../api/saveAsync';
export default class DangNhap extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        TaiKhoan: "",
        txtMatKhau: "",
      }
    }
    //componentDidMount là 1 hàm có sẵn được support 
    //Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy
    //Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
    // Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
    componentDidMount(){
      //AsyncStorage.getItem("@token")
      getToken()
      .then(a => console.log("TOKEN:::" + a))
    }
    clickLogin(){
      //api da thnh cong, khong quan tam den nua
      fetch("http://192.168.0.107/serverlogin.php",{

      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        "username":this.state.TaiKhoan,
        "password":this.state.txtMatKhau, 
      })
      })
      .then((res) =>res.json()

      )
      //ket thuc api  

      //vì hàm login trả về chuỗi login
      //nên chỉ cần .then
      .then(response=>{
        //lệnh console.log để tiến hành debug  
        //truyền vào tham số respose.user vì response trả về 1 user
        global.onSignIn(response.user);
        checkNapHoSo(response.user.MaUser)
        .then(Response => {
          console.log("response:", Response.MaNXinViec)
          global.isCV(Response.MaNXinViec);
        })
        this.props.navigation.navigate("Home");
        //tiến hành save token bằng AsynStorage
        //saveToken("@token", response.token);
        AsyncStorage.setItem("@token", response.token);
      })
      //catch truong hop login khong thanh cong, 
      //ham login se khhong the tra ve chuoi json => gây ra lỗi
      //consle.log() để tiến hành debug nếu có lỗi xảy ra
      .catch(err=>{
        Alert.alert("Login không thành công");
        console.log(err)
      })
    }
    dangki(){
      this.props.navigation.navigate("Register");
    }
    DoiMatKhau(){
      this.props.navigation.navigate("DoiMatKhau");
    }
    static navigationOptions = {
        title: 'Đăng nhập',
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
            <Text style={{fontSize: 40, fontWeight: '500', color:'red'} }>Đăng nhập</Text>

            <Text style={{paddingLeft: 20,color:'red'}}>Địa chỉ email</Text>

            <TextInput placeholder="email" placeholderTextColor="#585858" style={styles.txtInput2}  
                onChangeText={(TaiKhoan) => this.setState({TaiKhoan})}
                value={this.state.TaiKhoan}/>
 


            <Text style={{paddingLeft: 20,color:'red'}}>Mật khẩu</Text>

            <TextInput placeholder="password" placeholderTextColor="#585858" style={styles.txtInput2}  
                secureTextEntry
                onChangeText={(txtMatKhau) => this.setState({txtMatKhau})}
                value={this.state.txtMatKhau}/>

          <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>

          <TouchableOpacity style={styles.btn1} onPress={this.clickLogin.bind(this)}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}   onPress={this.dangki.bind(this)}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}} >Tạo tài khoản</Text>
            </TouchableOpacity>   
              <View>
                  <TouchableOpacity style={styless.btn12} onPress={this.DoiMatKhau.bind(this)} >
                      <Text style={styless.txtbtn} >Đổi mật khẩu</Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
      }
}


var styless = StyleSheet.create({
  txtbtn:{
    fontSize: 16, color:'#0B610B', fontWeight:'500'
  },
  btn12:{
    color: '#0B610B',
  }


})


