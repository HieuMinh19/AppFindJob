import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,
         TextInput, AsyncStorage, Picker, Alert} from 'react-native';
import styles from '../css/Styless';
import global from '../api/global';
import checkLogin from '../api/checkLogin';
import checkNapHoSo from '../api/checkNapHoSo';
import getToken from '../api/getToken';
import getASync from '../api/getASync';
import saveToken from '../api/saveToken';
const temp = null;
export default class TrangChu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titleText1: "Tìm kiếm",
      bodyText1: "chức danh, từ khóa hoặc công ty",
      titleText2: "Ðịa điểm",
      bodyText2: "tỉnh hoặc thành phố",
      txtTimKiem: "",
      txtDiaDiem: 29,
      txtStatus:"",  
      user: null,  
      isCV:null, 
      
    }
    global.onSignIn = this.onSignin.bind(this);
    global.isCV = this.setCV.bind(this);
  }
  componentDidMount(){
    //lấy ra token
    this.setState({isCV:null})
    getToken()
        .then(res => {
          console.log("ccc", res),
          //sử dụng token để check login và trả về kết quả
          checkLogin(res)
          .then(ResponseJson => {
            global.onSignIn(ResponseJson.user);
            checkNapHoSo(ResponseJson.user.MaUser)
              .then(Response => {
                console.log("response:", Response.MaNXinViec)
                global.isCV(Response.MaNXinViec);
              })
          })  
        })
        .catch(err => console.log('LOI CHECK LOGIN', err));
  }

 


  onSignin(user){
    this.setState({user});
  }
  setCV(isCV){
    this.setState({isCV});
  }
  clickTimKiem(TimKiem, DiaDiem){  
    AsyncStorage.setItem("@TimKiem", this.state.txtTimKiem);
    AsyncStorage.setItem("@DiaDiem", this.state.txtDiaDiem);
    console.log('TINH',this.state.txtDiaDiem);
    this.props.navigation.navigate('showCongViec',{searchTenCV:TimKiem, Matinh:DiaDiem});  
   }

  DangXuat = ()=>{
    this.setState({user:null});
    this.setState({isCV:null});
    saveToken('');
    
  }
  DangNhap=()=>{

    this.props.navigation.navigate('Login')  
  }

  DangKi=()=>{
    this.props.navigation.navigate('Register')  
  }
  DoiMatKhau=()=>{
    this.props.navigation.navigate('DoiMatKhau')  
  }

  TaoCV=()=>{
    console.log("user", this.state.user);
    console.log("cv:", this.state.isCV);
    if(this.state.user){
      if(this.state.isCV){
        Alert.alert("Bạn đã có CV")
        this.props.navigation.navigate('UpdateCV',{MaNXViec: this.state.isCV})
      }
      else{
        this.props.navigation.navigate('TaoCV')
      }
    }
    else{
      Alert.alert("Bạn cần đăng nhập")
    }
   
    }
    

  static navigationOptions = {
    title: 'Tìm việc',
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
      <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} 
        onPress={this.DangXuat.bind(this)}>
          <Text style={{fontSize: 13, color:'#2E2EFE', fontWeight:'400', paddingLeft: 20}}>Đăng xuất</Text>
      </TouchableHighlight>
    )       
     
    const logoutStatus = (
      <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.DangNhap}>
          <Text style={{fontSize: 13, color:'#2E2EFE', fontWeight:'400', paddingLeft: 20}}>Đăng nhập</Text>
        </TouchableHighlight>
    )      
    
      //tiến hành lấy user ra
      
    const { user } = this.state;
    const showUsername = (
       
      <Text style={{fontSize: 15, color:'#585858', fontWeight:'400', fontWeight: 'bold'}}>{user ? user.username: ''}</Text>
    )    
    const hideUsername = (
      //kiểm tra xem user có tồn tại hay không,
      // nếu có tiến hành gán giá trị
      //this.state.user.name => tiến hành lấy thuộc tính name trong array của user trả về
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}></Text>
    )    
    const DangKi = (
      <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.DangKi}>
          <Text style={{fontSize: 13, color:'#2E2EFE', fontWeight:'400', paddingLeft: 20}}>Chưa có tài khoản? Đăng ký</Text>
        </TouchableHighlight>
    )
    const changPass =(
      <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.DoiMatKhau}>
        <Text style={{fontSize: 13, color:'#2E2EFE', fontWeight:'400', paddingLeft: 20}}>Đổi mật khẩu ?</Text>
      </TouchableHighlight>
    )
    const username = this.state.user ? showUsername : hideUsername;
    const isLoguotJSX = this.state.user  ? loginStatus : logoutStatus;
    const isRegister = this.state.user  ? changPass : DangKi;
    return (

      <View style={styles.container}>
        <StatusBar hidden/>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText1}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText1}</Text>
        </Text>

        <TextInput style={styles.txtInput1} 
                   onChangeText={(txtTimKiem) => this.setState({txtTimKiem: txtTimKiem})}
                   value={this.state.txtTimKiem}/>

        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText2}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText2}</Text>
        </Text>

        <Picker
          selectedValue={this.state.txtDiaDiem}
          style={{ height: 50, width: 315 }}
          onValueChange={(itemValue, itemIndex) => this.setState({txtDiaDiem: itemValue})}>
          <Picker.Item label="Thành phố HCM" value="29" />
          <Picker.Item label="An Giang" value="2"/>
          <Picker.Item label="Hà Nội" value="1"/>
          <Picker.Item label="Đà Năng" value="16"/>
        
        </Picker> 

        <TouchableOpacity style={styles.btn1} onPress={this.clickTimKiem.bind(this,this.state.txtTimKiem, this.state.txtDiaDiem)}>
          <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tìm việc</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 15, color:'#585858', fontWeight:'400', paddingLeft: 20, fontWeight: 'bold', paddingTop: 20}}>Chào bạn {username} đến với FindJobs </Text>
        {isLoguotJSX}

        <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.TaoCV}>
          <Text style={{fontSize: 13, color:'#2E2EFE', fontWeight:'400', paddingLeft: 20}}>Tạo hồ sơ xin việc</Text>
        </TouchableHighlight>
       
        {isRegister}

        <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>
      </View>
    );
  }
}

