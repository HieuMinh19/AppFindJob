import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,
         TextInput, AsyncStorage, Picker, Alert} from 'react-native';
import styles from '../css/Styless';
import global from '../api/global';
import checkLogin from '../api/checkLogin';
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
    }
    global.onSignIn = this.onSignin.bind(this);
  }
  componentDidMount(){
    getToken()
    .then(token => {checkLogin(token)
        console.log(token)
    })
        .then(res => {
          console.log(res),
          global.onSignIn(res.user)})
        .catch(err => console.log('LOI CHECK LOGIN', err));
  }

  onSignin(user){
    this.setState({user});
  }


<<<<<<< HEAD
  clickTimKiem(TimKiem, DiaDiem){  
      
    AsyncStorage.setItem("@TimKiem", this.state.txtTimKiem);
    AsyncStorage.setItem("@DiaDiem", this.state.txtDiaDiem);
    this.props.navigation.navigate('showCongViec',{searchTenCV:TimKiem, Matinh:DiaDiem});  
=======
  clickTimKiem(){    
     fetch("http://192.168.3.29/servershowcongviec.php",{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         "tencongviec": this.state.txtTimKiem,
         "tentinh": this.state.txtDiaDiem,
       //  "txtRetypeMatKhau": this.state.txtRetypeMatKhau,
         })
        
      })
     .then((response) => response.json())
     .then((responseJson) => {       
       this.setState({errMessage:responseJson.kq}) 
        //Alert.alert('them thanh cong')
         //setTimeout(() => Alert.alert('tạo tài khoản không thành công'), 2);
         //Alert.alert('login ok bên Js')
         
        //  if(this.state.errMessage == "1"){
        //console.log(this.state.txtTimKiem);
        this.props.navigation.navigate('showCongViec')
        //  }   else{
       //Alert.alert('Thanh Cong')
        //  } 
        // if(this.state.errMessage == "1"){
        //   Alert.alert('Đăng Kí Thành Công')
        // }   else{
        //   Alert.alert('Đăng Kí Thất Bại')
        // }         
     } )
     .catch((error)=>  
        Alert.alert('fail'));
>>>>>>> origin/ducnguyen
   }

  DangXuat = ()=>{
    this.setState({user:null});
    saveToken('');
  }
  DangNhap=()=>{
    
    this.props.navigation.navigate('Login')  
  }

  DangKi=()=>{
   
    this.props.navigation.navigate('Register')  
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
          <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>Đăng xuất</Text>
      </TouchableHighlight>
    )       
     
    const logoutStatus = (
      <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.DangNhap}>
          <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>Đăng nhập</Text>
        </TouchableHighlight>
    )      
    
      //tiến hành lấy user ra
      
    const { user } = this.state;
    const showUsername = (
       
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>{user ? user.username: ''}</Text>
      
    )    
    const hideUsername = (
      //kiểm tra xem user có tồn tại hay không,
      // nếu có tiến hành gán giá trị
      //this.state.user.name => tiến hành lấy thuộc tính name trong array của user trả về
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}></Text>
    )    
    const showID = (
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>{user ? user.MaUser: ''}</Text>
    )
    const isLoguotJSX = this.state.user  ? loginStatus : logoutStatus;
    const username = this.state.user ? showUsername : hideUsername;
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
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({txtDiaDiem: itemValue})}>
          <Picker.Item label="Thành phố HCM" value="29" />
          <Picker.Item label="An Giang" value="2"/>
          <Picker.Item label="Hà Nội" value="1"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
          <Picker.Item label="JavaScript" value="js"/>
        </Picker> 

        <TouchableOpacity style={styles.btn1} onPress={this.clickTimKiem.bind(this,this.state.txtTimKiem, this.state.txtDiaDiem)}>
          <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tìm việc</Text>
        </TouchableOpacity>

        {username}
        {isLoguotJSX}
       
        <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.DangKi}>
          <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>Đăng kí</Text>
        </TouchableHighlight>
        <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>
      </View>
    );
  }
}

