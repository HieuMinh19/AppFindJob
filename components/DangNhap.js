import React from 'react';
import { Text, View, StatusBar, Image,
         TouchableOpacity, KeyboardAvoidingView,
         TextInput, Alert, AsyncStorage } from 'react-native';
import styles from '../css/Styless';
import global from '../api/global';
import saveToken from '../api/saveToken';
import getToken from '../api/saveToken';
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
      console.log("co vao DidMount")
      _getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('@token');
            if (value !== null) {
                //value có kiểu dữ liệu là 1 chuỗi
               //nếu value có kiểu dữ liệu là 1 mảng thì phải trả về kiểu JSON.Parse(value)
               console.log('TOKEN::' +value);
                
            }
            console.log('TOKEN::');;
        } catch (error) {
        // Error retrieving data
        console.log('TOKEN::');
        }
    }
    
    }
    clickLogin(){
      
      //api da thnh cong, khong quan tam den nua
      fetch("http://192.168.0.106/serverlogin.php",{
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
        console.log(response.user)
        //truyền vào tham số respose.user vì response trả về 1 user
        global.onSignIn(response.user)       
        this.props.navigation.navigate("Home")
        
        _saveToken = async () => {
          try {
            await AsyncStorage.setItem("@token", user.token);
          } catch (error) {
            // Error saving data
          }
        }
      
        })
      
      //catch truong hop login khong thanh cong, 
      //ham login se khhong the tra ve chuoi json => gây ra lỗi
      //consle.log() để tiến hành debug nếu có lỗi xảy ra
      .catch(err=>{
        Alert.alert("Login không thành công");
        console.log(err)
      })
      
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
      const loginStatus = (
        <TouchableOpacity style={styles.btn1} onPress={this.clickLogin.bind(this)}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Đăng xuất</Text>
            </TouchableOpacity>
      )       
      
      const logoutStatus = (
        <TouchableOpacity style={styles.btn1} onPress={this.clickLogin.bind(this)}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Đăng nhập</Text>
            </TouchableOpacity>
      )       
      const isLoguotJSX = global.onSignIn ? loginStatus : logoutStatus;
      
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

          {isLoguotJSX}
            <TouchableOpacity style={styles.btn1} >
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}} >Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        );
      }

}

