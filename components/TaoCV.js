import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet,Select,
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox,Alert} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';
import checkLogin from '../api/checkLogin';
import getToken from '../api/getToken';
import checknapHoSo from '../api/checkNapHoSo';
import getASync from '../api/getASync';
import saveToken from '../api/saveToken';
export default class TaoCV extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titleTaoCV:"THÔNG TIN CÁ NHÂN",
        titleHoTen: "Họ tên",
        titleDiaDiem:"Địa chỉ",
        titleMail:"Email",
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
        txtHoTen: "",
        txtDiaChi: "",
        txteMail: "",
        txtSoDT:"",
        txtTenCTY: "",
        txtChucDanh: "",
        date: "2018-05-15",
        currentDate: new Date(),
        cbxtrinhdo: "1",
        cbxtentinh: "29",
        //
        errMessage:""
    }
  }
  
  // onPress=()=>{
  //   this.props.navigation.navigate('Login')  
  // }

  static navigationOptions = {
    title: 'Tạo CV',
    headerStyle:{
      backgroundColor: '#000'
    },
    headerTintColor: '#fff',
    headerTintStyle:{
      fontWeight: 'bold',
    }
  };

  componentDidMount(){
    getToken()
    .then(token =>  { 
      checkLogin(token)
        .then(res => {
          this.setState({MaUser:res.user.MaUser})
        })
      })
        .catch(err => {
          console.log(err)
        });
  }

  clickNapHoSo(){
    console.log("Mauser",this.state.MaUser)
    fetch("http://192.168.1.101/serverNapCV.php",{

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      
        "TenNXinViec": this.state.txtHoTen,
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
    return (
   
      <ScrollView>
        {/* <Text>{this.state.MaUser}</Text> */}
        <View style={styles.container}>
          <StatusBar hidden/>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
          
          <Text style={{color:'red', fontSize: 20}}>{this.state.errMessage}</Text>

          <Text style={style.title}>{this.state.titleHoTen}{'\t'}{'\t'}{'\t'}</Text>
          <TextInput style={styles.txtInput1 } 
                    onChangeText={(txtHoTen) => this.setState({txtHoTen})} 
                    value={this.state.txtHoTen}/>

          <Text style={style.title}>{this.state.titleNgaySinh}{'\t'}{'\t'}{'\t'}</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate={this.state.currentDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}/>

          <Text style={style.title}>{this.state.titleDiaDiem}{'\t'}{'\t'}{'\t'}</Text>
          <TextInput style={styles.txtInput1} 
                   onChangeText={(txtDiaChi) => this.setState({txtDiaChi})} 
                   value={this.state.txtDiaChi}/>

          <Text style={style.title}>{this.state.titleTenTinh}{'\t'}{'\t'}{'\t'}</Text>
          <Picker
          selectedValue={this.state.cbxtentinh}
          style={{ height: 50, width: 315 }}
          onValueChange={(itemValue) => this.setState({cbxtentinh: itemValue})}>
          <Picker.Item label="tp Hồ Chí Minh" value="29" />
          <Picker.Item label="Hà Nội" value="1" />
          <Picker.Item label="Đà Nẵng" value="16" />
          <Picker.Item label="Khánh Hòa" value="32" />
          <Picker.Item label="Cần Thơ" value="15" />
          </Picker> 

          <Text style={style.title}>{this.state.titleSoDT}{'\t'}{'\t'}{'\t'}</Text>
          <TextInput style={styles.txtInput1} 
                   onChangeText={(txtSoDT) => this.setState({txtSoDT})} 
                   value={this.state.txtSoDT}/>

        <Text style={style.title}>{this.state.titleMail}{'\t'}{'\t'}{'\t'}</Text>
        <TextInput style={styles.txtInput1}  
                    onChangeText={(txteMail) => this.setState({txteMail})}
                    value={this.state.txteMail}/>

          <Text style={style.title}>{this.state.titleText3}{'\t'}{'\t'}{'\t'}</Text>
          <Picker
          selectedValue={this.state.cbxtrinhdo}
          style={{ height: 50, width: 315 }}
          onValueChange={(itemValue) => this.setState({cbxtrinhdo: itemValue})}>
          <Picker.Item label="Phổ Thông" value="1" />
          <Picker.Item label="Trung Cấp" value="2" />
          <Picker.Item label="Cao Đẳng" value="3" />
          <Picker.Item label="Cử Nhân" value="4" />
          <Picker.Item label="Kĩ Sữ" value="5" />
          <Picker.Item label="Thạc Sĩ" value="6" />
          <Picker.Item label="Tiến Sĩ" value="7" />
          </Picker> 
       
          <TouchableOpacity style={style.btn1} onPress={this.clickNapHoSo.bind(this)}>
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tạo Hồ Sơ Xin Việc</Text>
          </TouchableOpacity> 
        </View>
      </ScrollView>

    );
  }
}
var style = StyleSheet.create({
  title:{
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8
  },
  btn1:{
    backgroundColor: '#2E2EFE',
    borderRadius: 25,
    alignItems: 'center',
    padding: 8,
    marginTop: 25
  }
})
