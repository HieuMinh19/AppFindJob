import React from 'react';
import { Text, View, Image, StatusBar, 
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

        bodyText1: "công ty gần nhất làm việc",
        bodyText2: "vị trí vai trò trong công ty",
        bodyText3: "địa chỉ công ty cũ",
  
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
  
  onPress=()=>{
    this.props.navigation.navigate('Login')  
  }

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

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar hidden/>

          <Text style={{paddingLeft: 20, alignItems:"center"}}>
              <Text style={{fontSize: 16, fontWeight: '500', alignItems:"center"}}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <Text style={{paddingLeft: 20}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleHoDem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1} 
                    onChangeText={(txtHoDem) => this.setState({txtHoDem})} 
                    value={this.state.txtHoDem}/>

          <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleMail}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1}  
                    onChangeText={(txteMail) => this.setState({txteMail})}
                    value={this.state.txteMail}/>

          
          <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgaySinh}{'\t'}{'\t'}{'\t'}</Text>
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


          <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleDiaDiem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <TextInput style={styles.txtInput1} 
                   onChangeText={(txtDiaChi) => this.setState({txtDiaChi})} 
                   value={this.state.txtDiaChi}/>

         <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleSoDT}{'\t'}{'\t'}{'\t'}</Text>
        </Text>
        <TextInput style={styles.txtInput1} 
                   onChangeText={(txtSoDT) => this.setState({txtSoDT})} 
                   value={this.state.txtSoDT}/>
        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText3}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText3}</Text>
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
                   
        </Picker> 


        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayVaoLam}</Text>
        </Text>
       
          <TouchableOpacity style={styles.btn1}>
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tiếp tục</Text>
          </TouchableOpacity> 
        </View>
             
      </ScrollView>
    );
  }
}

