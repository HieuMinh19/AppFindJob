
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
          errMessage:"",

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
    }

    static navigationOptions = {
      title: 'Tìm Việc',
      headerStyle:{
        backgroundColor: '#000'
      },
      headerTintColor: '#fff',
      headerTintStyle:{
        fontWeight: 'bold',
      }
  };

    // NopHoSo(){
    //   const macv = this.props.navigation.state.params.MaCViec;
    //   console.log("ABCXYZ",macv);
    //   console.log('MAUSER DNJSAHD', this.state.mauser)
    //     fetch('http://192.168.3.29/serverNopHoSo.php',
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //         body: JSON.stringify({ 
    //           "MaUser": this.state.mauser,
    //           "MaCongViec": macv
    //          })
    //     })
    //     .then(res => {res.json()})
    //       .then(res => {
    //         Alert.alert('Nộp hồ sơ thành công')
    //       })
    //       .catch(err=>{
    //         Alert.alert("nộp hồ sơ không thành công");
    //         console.log(err)
    //       })
    //     }

    taohang(property){
        return(
          <View>     
           <TouchableOpacity style={styles.list01}  >
               <Text>Tên Người Xin Viêc:{property.TenNXinViec}</Text>  
               <Text>Trinh Độ Người Xin Viêc:{property.tenTrinhDo}</Text> 
              <Text >Email Người Xin Viêc:{property.EmailNXinViec}</Text>     
               <Text>Tên Tỉnh:{property.TenTinh}</Text>  
               <Text >Số Điện Thoại Người Xin Viêc:{property.SoDienThoai}</Text>   
               <Text>Địa chỉ Người Xin Viêc:{property.DiaChiNXViec}</Text>   
               <Text>Ngày sinh Người Xin Viêc:{property.NgaySinh}</Text>   
            </TouchableOpacity>   
          </View>
        );
      }
    render(){
        return(

            <ScrollView>


              <Text>{this.props.navigation.state.params.MaNXViec}</Text>
                <View style={styles.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />    
                    
     
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