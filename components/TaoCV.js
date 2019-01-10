import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet,Select,
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';

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
        dtNgaySinh:"2018-05-15",
        currentDate: new Date(),
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



  clickNapHoSo(){
    fetch("http://10.0.129.175/serverNapCV.php",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      
        "txtTaiKhoan": this.state.txtTaiKhoan,
        "txtMatKhau": this.state.txtMatKhau,
        "txtRetypeMatKhau": this.state.txtRetypeMatKhau,
        
      
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
    Alert.alert('Đăng Kí Thất Bại tại catch'));
  }
 
  render() {
    
    return (
   
      <ScrollView>
        <View style={styles.container}>
          <StatusBar hidden/>

          <Text style={style.title_TaoCVa}>
              <Text style={style.title_TaoCV}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <Text style={style.ititle}>
              <Text style={style.title}>{this.state.titleHoDem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1} 
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
            dtNgaySinh={this.state.dtNgaySinh}
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
            onDateChange={(dtNgaySinh) => {this.setState({dtNgaySinh: dtNgaySinh})}}
            
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

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue) => this.setState({language: itemValue})}>
          <Picker.Item label="hồ chí minh" value="1" />
          <Picker.Item label="nha trang" value="2" />
          <Picker.Item label="hà nội" value="3" />
          <Picker.Item label="đà nẵng" value="4" />
  
        </Picker> 

 

        <Text style={style.ititle}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayVaoLam}</Text>
        </Text>
       
          <TouchableOpacity style={styles.btn1} onPress={this.clickNapHoSo.bind(this)}>
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Nạp Hồ Sơ</Text>
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
