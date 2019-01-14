import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';
import getAync from '../api/getASync';
import searchCongViec from '../api/searchCongViec';
var URL =  "http://192.168.0.103/servershowcongviec.php";
export default class showCongViec extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
          TenCongViec:null,
          DiaChi:null,
          
          result:null,
        } 
        
      this.taohang = this.taohang.bind(this);
      }
    
      ChiTietCViec=(a)=>{
        this.props.navigation.navigate('Register')  
      }
     
    componentDidMount(){
      //tiến hành lấy 2 giá trị search ở trang home
      getAync('@TimKiem')
      .then(resTen => {
        this.setState({TenCongViec:resTen})  ;
		getAync('@DiaDiem')
		  .then(resDiaDiem =>{
			this.setState({DiaChi:resDiaDiem})
        //fetch here
        fetch("http://192.168.0.103/servershowcongviec.php",{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "tencongviec":this.state.TenCongViec,
          "tentinh": this.state.DiaChi
          })
         
       })
      //.then((response) => {response.json(), console.log(response)})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        });  
      
      })  
			})
      })     
      //Alert.alert(this.state.TenCongViec)
      //sử dụng 2 giá trị đã lấy được ở trên tiến hành getListCongViec
    
       
    }    
    taohang(property){
        return(
          <View style ={styless.list01}>     
           <TouchableOpacity style ={styless.list02} onPress={this.ChiTietCViec.bind(this)} >
                <Text style={styless.txtTenCViec}>{property.TenCViec}</Text>  
                <Text style={styless.txtTenCty}>{property.TenCTy}</Text> 
                <Text style={styless.txtTinh}>{property.TenTinh}</Text>     
                <Text style={styless.txtLuong}>{property.LuongCViec}</Text>  
                <Text style={styless.txtYeuCau}>{property.YeuCauCViec}</Text>   
                <Text style={styless.txtYeuCau}>{property.TrinhDoCViec}</Text>   
                <Text style={styless.txtYeuCau}>{property.KinhNghiemCViec}</Text>   
                {/* <Text style={styless.txtTenCViec}>Tên công việc</Text>  
                <Text style={styless.txtTenCty}>tên Công ty</Text> 
                <Text style={styless.txtTinh}>Long An</Text>     
                <Text style={styless.txtLuong}>5 triệu</Text>  
                <Text style={styless.txtYeuCau}>Yêu cầu</Text>   
                <Text style={styless.txtYeuCau}>Đại học</Text>   
                <Text style={styless.txtYeuCau}>Kinh Nghiệm</Text> */}
            </TouchableOpacity>   
          </View>
        );
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
    render(){
   
        return(
            <ScrollView>
                <View style={styless.LuaChon}>
                         <TouchableOpacity style={styless.btnLuaChon} >
                            <Text style={{fontSize: 15, color:'#fff', fontWeight:'bold'}}>PartTime</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styless.btnLuaChon} >
                            <Text style={{fontSize: 15, color:'#fff', fontWeight:'bold'}}>Full Time</Text>
                         </TouchableOpacity>
                </View>

                <View style={styless.container}>   
                {/* <Text>{this.props.navigation.state.params.searchTenCV}</Text>                         */}
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />                      
                    {/* <TouchableOpacity style ={styless.list02} onPress={this.ChiTietCViec.bind(this)} >
                <Text style={styless.txtTenCViec}>Tên công việc</Text>  
                <Text style={styless.txtTenCty}>tên Công ty</Text> 
                <Text style={styless.txtTinh}>Long An</Text>     
                <Text style={styless.txtLuong}>5 triệu</Text>  
                <Text style={styless.txtYeuCau}>Yêu cầu</Text>   
                <Text style={styless.txtYeuCau}>Đại học</Text>   
                <Text style={styless.txtYeuCau}>Kinh Nghiệm</Text>
            </TouchableOpacity>    */}
                </View>          
            </ScrollView>   
        );
    }
}

var styless = StyleSheet.create({

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
      marginTop:15,
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