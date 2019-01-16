import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet,Select,
         TouchableOpacity, TouchableHighlight,ScrollView,ListView,
         TextInput, Picker,CheckBox,Alert} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';
import checkLogin from '../api/checkLogin';
import getToken from '../api/getToken';
import checknapHoSo from '../api/checkNapHoSo';
import getASync from '../api/getASync';
import saveToken from '../api/saveToken';
import getCV from '../api/getCV';
export default class TaoCV extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titleTaoCV:"PHẦN THÔNG TIN CÁ NHÂN",
        titleHoDem: "Họ tên",
        titleDiaDiem:"Địa chỉ",
        titleMail:"email",
        titleText1: "Tên Công ty",
        titleText3: "Trình độ",  
        titleNgaySinh: "Ngày sinh",
        titleSoDT:"Số Điện thoại",
        titleTenTinh:"Tên Tỉnh: ",
////
        bodyText1: "công ty gần nhất làm việc",
        bodyText2: "vị trí vai trò trong công ty",
        bodyText3: "địa chỉ công ty cũ",
  ////
        txtHoDem: "",
        txtDiaChi: "",
        txteMail: "",
        txtSoDT:"",
        txtTenCTY: "",
        txtChucDanh: "",
        date: "2018-05-15",
        currentDate: new Date(),
        cbxtrinhdo: "1",
        cbxtentinh: "29",
        MaUser:null,
        result:null,
        isCV: null,
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
        //
        errMessage:""
    }
    this.taohang = this.taohang.bind(this);
  }
  
  // onPress=()=>{
  //   this.props.navigation.navigate('Login')  
  // }

  static navigationOptions = {
    title: 'TẠO HỒ SƠ',
    headerStyle:{
      backgroundColor: '#000'
    },
    headerTintColor: '#fff',
    headerTintStyle:{
      fontWeight: 'bold',
    }
  };


  componentDidMount(){
    // checknapHoSo()
    //   .then(res =>  {
    //     this.setState({result:res})
    //   })
    getToken()
    .then(token =>  {console.log('TOKEN: ',token)
       checkLogin(token)
        .then(res => {
          this.setState({MaUser:res.user.MaUser})
        })
        .catch(err => {
          console.log(err)
        });
      })
        
    getCV(MaUser)
        .then(responseData => {
          console.log("show de updaet",responseData);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData)
          })
          console.log('DATA SOURCE :',dataSource)
        })
        .catch(err => console.log(err));

  }
  taohang(property){
    <View>     
    <TouchableOpacity  >
         <Text>Họ tên:{property.TenNXinViec}</Text>  
         <Text>Trình độ:{property.TrinhDoCViec}</Text> 
         <Text >Email:{property.EmailNXinViec}</Text>     
         <Text>Tên tỉnh:{property.TenTinh}</Text>  
         <Text >Số điện thoại:{property.SoDienThoai}</Text>   
         <Text>Địa chỉ:{property.DiaChiNXViec}</Text>   
         <Text>Ngày sinh:{property.NgaySinh}</Text>   
     </TouchableOpacity>   
   </View>
  }

  clickNapHoSo(){
    fetch("http://10.0.129.175/serverNapCV.php",{

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      
        "TenNXinViec": this.state.txtHoDem,
        "EmailNXinViec": this.state.txteMail,
        "DiaChiNXViec": this.state.txtDiaChi,
        "SoDienThoai":this.state.txtSoDT,
        "MaTinh":this.state.cbxtentinh,
        "MaTrinhDo":this.state.cbxtrinhdo,
        "NgaySinh": this.state.date,
        "MaUser": this.state.MaUser,
      })
     })
    .then(  (response) => response.json())
    .then(  (responseJson) => {       
        this.setState({errMessage:responseJson.kq}) 
        
    } )
    .catch((error)=>  
    Alert.alert('Đăng Kí Thất Bại tại catch'));
  }
 
  render() {
    // if(!this.state.MaUser){
    //   Alert.alert('Bạn cần đăng nhập')
    //   this.props.navigation.navigate('Home')
    // }
    // if(!this.state.result){
    //   Alert.alert('Bạn đã có hồ sơ')
    //   this.props.navigation.navigate('Home')
    // }
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow = {this.taohang}
      />                      

    );
  }
}
var style = StyleSheet.create({
  title_TaoCVa:{
   
    alignItems:"center",
     marginTop: 25
  },
  title_TaoCV:{
    fontSize: 25, 
    fontWeight: '500',
     alignItems:"center"
  },

  ititle:{
    paddingLeft: 20,
    marginTop: 15
  },
  title:{
    fontSize: 20,
     fontWeight: '500',
     marginTop: 50
  },
})