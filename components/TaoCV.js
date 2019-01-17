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
        titleTaoCV:"PHẦN THÔNG TIN CÁ NHÂN",
        titleHoDem: "Họ tên",
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
        //
        errMessage:""
    }
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
    fetch("http://192.168.1.2/serverNapCV.php",{

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
    return (
   
      <ScrollView>
        {/* <Text>{this.state.MaUser}</Text> */}
        <View style={styles.container}>
          <StatusBar hidden/>

          <Text style={style.title_TaoCVa}>
              <Text style={style.title_TaoCV}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <Text style={{paddingLeft: 20, color:'red', fontSize: 20}}>{this.state.errMessage}</Text>
          <Text style={style.ititle}>
              <Text style={style.title}>{this.state.titleHoDem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1 } 
                    onChangeText={(txtHoDem) => this.setState({txtHoDem})} 
                    value={this.state.txtHoDem}/>

          <Text style={style.ititle}>
            <Text style={style.title}>{this.state.titleMail}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1}  
                    onChangeText={(txteMail) => this.setState({txteMail})}
                    value={this.state.txteMail}/>

          
          <Text style={style.ititle}>
            <Text style={style.title}>{this.state.titleNgaySinh}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

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
            onDateChange={(date) => {this.setState({date: date})}}
            
           />


          <Text style={style.ititle}>
            <Text style={style.title}>{this.state.titleDiaDiem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <TextInput style={styles.txtInput1} 
                   onChangeText={(txtDiaChi) => this.setState({txtDiaChi})} 
                   value={this.state.txtDiaChi}/>

          <Text style={style.ititle}>
            <Text style={style.title}>{this.state.titleTenTinh}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
{/* combobox ten tinh */}
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
         <Text style={style.ititle}>
            <Text style={style.title}>{this.state.titleSoDT}{'\t'}{'\t'}{'\t'}</Text>
        </Text>
        <TextInput style={styles.txtInput1} 
                   onChangeText={(txtSoDT) => this.setState({txtSoDT})} 
                   value={this.state.txtSoDT}/>
        <Text style={style.ititle}>
          <Text style={style.title}>{this.state.titleText3}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText3}</Text>
        </Text>
{/* Trinh Do ng xin viec */}
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

        <Text style={style.ititle}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayVaoLam}</Text>
        </Text>
       
          <TouchableOpacity style={styles.btn1} onPress={this.clickNapHoSo.bind(this)}>
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tạo Hồ Sơ</Text>
          </TouchableOpacity> 
        </View>
      </ScrollView>

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
