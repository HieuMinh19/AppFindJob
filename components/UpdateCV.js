
// import React from 'react';
// import {Text, View, Image, StatusBar, StyleSheet,Select,
//   TouchableOpacity, TouchableHighlight,ScrollView,
//   TextInput, DatePicker,CheckBox,Alert, ListView,Picker
// } from 'react-native';

// var showcongty = Array();
// var arr = new Array(1, 2, 4, 5, 9, 6);

// import getMaUpDate from '../api/getMaUpDate';
// import getToken from '../api/getToken';
// import checkLogin from '../api/checkLogin';
// import styles from '../css/Styless';


// export default class TrangChu extends React.Component {
 
//     constructor(props){
//         super(props);
//         this.state = {
          
//           dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
//           mauser:null,
         
//           titleTaoCV:"PHẦN THÔNG TIN CÁ NHÂN",
//         titleHoDem: "Họ tên",
//         titleDiaDiem:"Địa chỉ",
//         titleMail:"email",
//         titleText1: "Tên Công ty",
//         titleText3: "Trình độ",  
//         titleNgaySinh: "Ngày sinh",
//         titleSoDT:"Số Điện thoại",
//         titleTenTinh:"Tên Tỉnh: ",
// ////
//         bodyText1: "công ty gần nhất làm việc",
//         bodyText2: "vị trí vai trò trong công ty",
//         bodyText3: "địa chỉ công ty cũ",
//   ////
//         txtHoDem: "",
//         txtDiaChi: "",
//         txteMail: "",
//         txtSoDT:"",
//         txtTenCTY: "",
//         txtChucDanh: "",
//         date: "2018-05-15",
//         currentDate: new Date(),
//         cbxtrinhdo: "1",
//         cbxtentinh: "29",
//         //
//         errMessage:""

//         }
//       }

//     componentDidMount(){
  

//         const macviec = this.props.navigation.state.params.MaNXViec;
//         console.log("macviec lay trong chitiet_parttime",macviec),
//         getMaUpDate(macviec)
//         .then(responseData => {
//           this.setState({
//             dataSource: this.state.dataSource.cloneWithRows(responseData)
//           }); 
//           console.log("res trong chi tiet cong viec",responseData);
//         })
//         .catch(err => console.log(err));

//         //set lai cac thuoc tinh
//         //
        
//       }

//     static navigationOptions = {
//       title: 'Cập Nhật Công Việc',
//       headerStyle:{
//         backgroundColor: '#000'
//       },
//       headerTintColor: '#fff',
//       headerTintStyle:{
//         fontWeight: 'bold',
//       }
//   };
//   clickUpdateHoso(){
//     const macviecaa = this.props.navigation.state.params.MaNXViec;
//     fetch("http://192.168.1.2/serverUpdate.php",{

//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         "a":macviecaa,
//         "TenNXinViec": this.state.txtHoDem,
//         "EmailNXinViec": this.state.txteMail,
//         "DiaChiNXViec": this.state.txtDiaChi,
//         "SoDienThoai":this.state.txtSoDT,
//         "MaTinh":this.state.cbxtentinh,
//         "MaTrinhDo":this.state.cbxtrinhdo,
//         // "NgaySinh": this.state.date,
//         // "MaUser": this.state.MaUser,
//       })
//      })
//     .then(  (response) => response.json())
//     .then(  (responseJson) => {       
//         this.setState({errMessage:responseJson.kq}) 
//         console.log("maNXiviec ",this.state.errMessage);
//         console.log("res:  ",responseJson);
//     } )
//     .catch((error)=> {
//       Alert.alert('Đăng Kí Thất Bại tại catch');
//       console.log(error);
//     } );
   
//   }
//   // setState(){

//   // }

//     taohang(property){
//         return(
//           <View>  
//            <TouchableOpacity style={styles.list01}  >
//                <Text>Tên Người Xin Viêc:{property.TenNXinViec}</Text>  
//                <Text>Trinh Độ Người Xin Viêc:{property.tenTrinhDo}</Text> 
//               <Text >Email Người Xin Viêc:{property.EmailNXinViec}</Text>     
//                <Text>Tên Tỉnh:{property.TenTinh}</Text>  
//                <Text >Số Điện Thoại Người Xin Viêc:{property.SoDienThoai}</Text>   
//                <Text>Địa chỉ Người Xin Viêc:{property.DiaChiNXViec}</Text>   
//                <Text>Ngày sinh Người Xin Viêc:{property.NgaySinh}</Text>   
//             </TouchableOpacity>   
//           </View>
//         );
//       }
//     render(){
//         return(

//             <ScrollView>


//               {/* <Text>{this.props.navigation.state.params.MaNXViec}</Text> */}
//                 <View style={style.container}>                              
//                     <ListView dataSource={this.state.dataSource}
//                             renderRow = {this.taohang}
//                     />    
//                 </View>     
// {/* //////////// */}
//                 <View style={style.container}>
//                    <StatusBar hidden/>
//                    {/* <Text style={{paddingLeft: 20, color:'red', fontSize: 20}}>{this.state.errMessage}</Text> */}
//                    <Text style={style.title_TaoCVa}>
//                       <Text style={style.title_TaoCV}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
//                     </Text>
//                     <Text style={style.ititle}>
//               <Text style={style.title}>{this.state.titleHoDem}{'\t'}{'\t'}{'\t'}</Text>
//           </Text>

//           <TextInput style={styles.txtInput1 } 
//                     onChangeText={(txtHoDem) => this.setState({txtHoDem})} 
//                     value={this.state.txtHoDem}/>
// <Text style={style.ititle}>
//             <Text style={style.title}>{this.state.titleMail}{'\t'}{'\t'}{'\t'}</Text>
//           </Text>

//           <TextInput style={styles.txtInput1}  
//                     onChangeText={(txteMail) => this.setState({txteMail})}
//                     value={this.state.txteMail}/>
//  {/* <Text style={style.ititle}>
//             <Text style={style.title}>{this.state.titleNgaySinh}{'\t'}{'\t'}{'\t'}</Text>
//           </Text> */}

//           {/* <DatePicker
//             style={{width: 200}}
//             date={this.state.date}
         
//             mode="date"
//             placeholder="select date"
//             format="YYYY-MM-DD"
//             minDate="2016-05-01"
//             maxDate={this.state.currentDate}
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             customStyles={{
//               dateIcon: {
//                 position: 'absolute',
//                 left: 0,
//                 top: 4,
//                 marginLeft: 0
//               },
//               dateInput: {
//                 marginLeft: 36
//               }
//             }}
//             onDateChange={(date) => {this.setState({date: date})}}
            
//            /> */}
// <Text style={style.ititle}>
//             <Text style={style.title}>{this.state.titleDiaDiem}{'\t'}{'\t'}{'\t'}</Text>
//           </Text>
//           <TextInput style={styles.txtInput1} 
//                    onChangeText={(txtDiaChi) => this.setState({txtDiaChi})} 
//                    value={this.state.txtDiaChi}/>
// <Text style={style.ititle}>
//             <Text style={style.title}>{this.state.titleTenTinh}{'\t'}{'\t'}{'\t'}</Text>
//           </Text>
// {/* combobox ten tinh */}
//         <Picker
//           selectedValue={this.state.cbxtentinh}
//           style={{ height: 50, width: 100 }}
//           onValueChange={(itemValue) => this.setState({cbxtentinh: itemValue})}>
//           <Picker.Item label="tp Hồ Chí Minh" value="29" />
//           <Picker.Item label="Hà Nội" value="1" />
//           <Picker.Item label="Đà Nẵng" value="16" />
//           <Picker.Item label="Khánh Hòa" value="32" />
//           <Picker.Item label="Cần Thơ" value="15" />
         
  
//         </Picker> 
//         <Text style={style.ititle}>
//             <Text style={style.title}>{this.state.titleSoDT}{'\t'}{'\t'}{'\t'}</Text>
//         </Text>
//         <TextInput style={styles.txtInput1} 
//                    onChangeText={(txtSoDT) => this.setState({txtSoDT})} 
//                    value={this.state.txtSoDT}/>
//         <Text style={style.ititle}>
//           <Text style={style.title}>{this.state.titleText3}{'\t'}{'\t'}{'\t'}</Text>
//           <Text style={{fontSize: 13}}>{this.state.bodyText3}</Text>
//         </Text>

//         <Picker
//           selectedValue={this.state.cbxtrinhdo}
//           style={{ height: 50, width: 100 }}
//           onValueChange={(itemValue) => this.setState({cbxtrinhdo: itemValue})}>
//           <Picker.Item label="Phổ Thông" value="1" />
//           <Picker.Item label="Trung Cấp" value="2" />
//           <Picker.Item label="Cao Đẳng" value="3" />
//           <Picker.Item label="Cử Nhân" value="4" />
//           <Picker.Item label="Kĩ Sữ" value="5" />
//           <Picker.Item label="Thạc Sĩ" value="6" />
//           <Picker.Item label="Tiến Sĩ" value="7" />
//         </Picker> 

//         <Text style={style.ititle}>
//           <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayVaoLam}</Text>
//         </Text>
//                 </View>

//                 <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>
// {/* ///////////////// */}
// {/*  */}
//                 <TouchableOpacity style={styles.btn1} onPress={this.clickUpdateHoso.bind(this)} >
//             <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tạo Hồ Sơ</Text>
//           </TouchableOpacity>
//             </ScrollView>   

//         );
//     }
// }
// var style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     paddingHorizontal: 25,
//     // paddingBottom: 100
//     paddingBottom: 50

//     //
//   },
//   title_TaoCVa:{
   
//     alignItems:"center",
//      marginTop: 25
//   },
//   title_TaoCV:{
//     fontSize: 25, 
//     fontWeight: '500',
//      alignItems:"center"
//   },

//   ititle:{
//     paddingLeft: 20,
//     marginTop: 15
//   },
//   title:{
//     fontSize: 20,
//      fontWeight: '500',
//      marginTop: 50
//   },
// })

import React from 'react';
import {Text, View, Image, StatusBar, StyleSheet,Select,
  TouchableOpacity, TouchableHighlight,ScrollView,
  TextInput, DatePicker,CheckBox,Alert, ListView,Picker
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

import getMaUpDate from '../api/getMaUpDate';
import getToken from '../api/getToken';
import checkLogin from '../api/checkLogin';
import styles from '../css/Styless';


export default class TrangChu extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
          mauser:null,
         
        titleTaoCV:"THÔNG TIN CÁ NHÂN",
        titleTaoCV2:"(sửa đổi)",
        titleHoTen: "Họ và tên",
        titleDiaDiem:"Địa chỉ",
        titleMail:"Email",
        titleText1: "Tên Công ty",
        titleTrinhDo: "Trình độ",  
        titleNgaySinh: "Ngày sinh",
        titleSoDT:"Số điện thoại",
        titleTenTinh:"Tỉnh: ",

        bodyText1: "công ty gần nhất làm việc",
        bodyText2: "vị trí vai trò trong công ty",
        bodyText3: "địa chỉ công ty cũ",

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

        errMessage:""

        }
      }

    componentDidMount(){
  

        const macviec = this.props.navigation.state.params.MaNXViec;
        console.log("macviec lay trong chitiet_parttime",macviec),
        getMaUpDate(macviec)
        .then(responseData => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData)
          }); 
          console.log("res trong chi tiet cong viec",responseData);
        })
        .catch(err => console.log(err));

        //set lai cac thuoc tinh
        //
        
      }

    static navigationOptions = {
      title: 'Cập Nhật CV',
      headerStyle:{
        backgroundColor: '#000'
      },
      headerTintColor: '#fff',
      headerTintStyle:{
        fontWeight: 'bold',
      }
  };
  clickUpdateHoso(){
    const macviecaa = this.props.navigation.state.params.MaNXViec;
    fetch("http://192.168.1.2/serverUpdate.php",{

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "a":macviecaa,
        "TenNXinViec": this.state.txtHoTen,
        "EmailNXinViec": this.state.txteMail,
        "DiaChiNXViec": this.state.txtDiaChi,
        "SoDienThoai":this.state.txtSoDT,
        "MaTinh":this.state.cbxtentinh,
        "MaTrinhDo":this.state.cbxtrinhdo,
      })
     })
    .then(  (response) => response.json())
    .then(  (responseJson) => {       
        this.setState({errMessage:responseJson.kq}) 
        console.log("maNXiviec ",this.state.errMessage);
        console.log("res:  ",responseJson);
    } )
    .catch((error)=> {
      Alert.alert('Đăng Kí Thất Bại tại catch');
      console.log(error);
    } );
   
  }
  // setState(){

  // }

    taohang(property){
        return(
          <View>  
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000', marginHorizontal: 80}}>HỒ SƠ XIN VIỆC</Text>
            <Text style={style.title_CV}>Họ và tên: {property.TenNXinViec}</Text>  
            <Text style={style.title_CV}>Ngày sinh: {property.NgaySinh}</Text> 
            <Text style={style.title_CV}>Địa chỉ: {property.DiaChiNXViec}</Text>  
            <Text style={style.title_CV}>Tỉnh: {property.TenTinh}</Text>  
            <Text style={style.title_CV}>Số điện thoại: {property.SoDienThoai}</Text>    
            <Text style={style.title_CV}>Email: {property.EmailNXinViec}</Text>        
            <Text style={style.title_CV}>Trinh độ học vấn: {property.tenTrinhDo}</Text> 
          </View>
        );
      }
    render(){
        return(

            <ScrollView>
                <View style={style.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />    
                </View>     
                <View style={style.container}>
                   <StatusBar hidden/>
                      <Text>
                         <Text style={style.title_UpdateCV}>{this.state.titleTaoCV}{'\t'}{'\t'}</Text>
                         <Text style={{fontSize: 15, color: '#000'}}>{this.state.titleTaoCV2}</Text>
                      </Text>

                      <Text style={style.title}>{this.state.titleHoTen}{'\t'}{'\t'}{'\t'}</Text>
                      <TextInput style={styles.txtInput1 } 
                         onChangeText={(txtHoTen) => this.setState({txtHoTen})} 
                         value={this.state.txtHoTen}/>

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

                      <Text style={style.title}>{this.state.titleTrinhDo}{'\t'}{'\t'}{'\t'}</Text>
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

                      <TouchableOpacity style={style.btn1} onPress={this.clickUpdateHoso.bind(this)} >
                        <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Cập Nhật Hồ Sơ Xin Việc</Text>
                      </TouchableOpacity>

                </View>
                <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>
            </ScrollView>   

        );
    }
}
var style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 25,
    paddingBottom: 50
  },
  title_UpdateCV:{
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#000'
  },
  title:{
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8
  },
  title_CV:{
    fontSize: 15,
    color: '#000',
  },
  btn1:{
    backgroundColor: '#2E2EFE',
    borderRadius: 25,
    alignItems: 'center',
    padding: 8,
    marginTop: 25
  },
})