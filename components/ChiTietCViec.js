import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

import getMaCViec from '../api/getMaCViec';
import getToken from '../api/getToken';
import checkLogin from '../api/checkLogin';

var URL =  "http://192.168.3.29/servershowchitietcongviec.php"


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
      getToken()
      .then(token => checkLogin(token))
          .then(res => {
            this.setState({mauser:res.user.MaUser})

          })
          .catch(err => console.log('LOI CHECK LOGIN', err));

        const macviec = this.props.navigation.state.params.MaCViec;
        console.log("macviec lay trong chitiet_parttime",macviec),
        getMaCViec(macviec)
        .then(responseData => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData)
          });  
        })
        .catch(err => console.log(err));
    }

    NopHoSo(){
      const macv = this.props.navigation.state.params.MaCViec;
      console.log("ABCXYZ",macv);
      console.log('MAUSER DNJSAHD', this.state.mauser)
        fetch('http://192.168.3.29/serverNopHoSo.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ 
              "MaUser": this.state.mauser,
              "MaCongViec": macv
             })
        })
        .then(res => {res.json()})
          .then(res => {
            Alert.alert('Nộp hồ sơ thành công')
          })
          .catch(err=>{
            Alert.alert("nộp hồ sơ không thành công");
            console.log(err)
          })
        }

    taohang(property){
        return(
          <View style ={styles.hang}>     
           <TouchableOpacity style={styles.ChiTietCV} onPress={this.NopHoSo} >
                <Text style={styles.test}>{property.YeuCauCViec}</Text>  
                <Text style={styles.test}>{property.KinhNghiemCViec}</Text>
                <Text style={styles.test}>{property.TrinhDoCViec}</Text>
                <Text style={styless.txtTenCViec}>{property.TenCViec}</Text>  
                <Text style={styless.txtTenCty}>{property.TenCTy}</Text> 
                <Text style={styless.txtTinh}>{property.TenTinh}</Text>     
                <Text style={styless.txtLuong}>{property.LuongCViec}</Text>   
            </TouchableOpacity>   
          </View>
        );
      }
    render(){
        return(

            <ScrollView>

              {/* <Text>
                {this.state.mauser}
              </Text>   */}

              <Text>{this.props.navigation.state.params.MaCViec}</Text>
                <View style={styles.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />    
                     <TouchableOpacity style={styles.btn1} onPress={this.NopHoSo.bind(this)}>
                  <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Nộp hồ sơ</Text>
                </TouchableOpacity>          


                <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>        
                </View>          
            
            </ScrollView>   

        );
    }
}
var styless = StyleSheet.create({
  title:{
    
    paddingTop: 10,
    fontSize: 30,

  },
  LuaChon:{  
    height:40,
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
   //marginTop: 100,
    marginLeft: 25
  },
  btnLuaChon:{
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#2E2EFE',
    borderRadius: 40,
    alignItems: 'center',
    padding: 8,
    marginRight:3,
    width:100,
    justifyContent: 'space-between',
    // flexDirection: 'now',
    width: '40%',
},

  
    container: {
      flex:1
    }, 
    list01:{
      flexDirection: 'column',
      flex: 1,
     //  marginTop:5,
    },
    list02:{
      borderBottomWidth: 1,
      borderBottomColor: '#6E6E6E',
    },
    txtTenCViec:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 15
    },
    txtTenCty:{
      color: '#585858',
      fontSize: 13,
      marginLeft: 15,
    },
    txtTinh:{
      color: '#585858',
      fontSize: 13,
      marginLeft: 15,
    },
    txtLuong:{
      color: '#0B610B',
      fontSize: 13,
      fontWeight: 'bold',
      marginLeft: 15,
    },
    txtYeuCau:{
      color: '#B40404',
      fontSize: 13,
      marginLeft: 15,
    }
  }) 
var styles = StyleSheet.create({
    container: {
      flex:1
    }, 
    danhsach:{
      flex:1
    },
    hang:{
      flexDirection: 'column',
      flex: 1,
      //justifyContent:'center',
      //alignItems:'center',
      marginLeft: 50,
      marginTop:15,
    },
    ChiTietCV:{

    },
    hienthi:{
      flex:1,
      
    },
    test:{
      color:'red',
      
    }
  }) 