import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';
import global from '../api/global';
var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

var URL =  "http://192.168.1.101/serverFindFullTime.php"

export default class showCongViec extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
          user: null,
        } 
        global.onSignIn = this.onSignin.bind(this);
      this.taohang = this.taohang.bind(this);
      //this.ChiTietCViec = this.ChiTietCViec.bind(this);
      //this.ChiTietCViec = this.ChiTietCViec.bind(this, 'Ahihi')
      }
      onSignin(user){
        this.setState({user});
      }
      ChiTietCViec=(a)=>{
        this.props.navigation.navigate('ChiTietCViec',{MaCViec: a})  
      }

      PartTime=(a)=>{
        this.props.navigation.navigate('PartTime')  
      }

    fetchData(){
        fetch(URL, {method: "POST", body: null})
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData)
           
          });  
       
        })
        .catch((error) => {
            Alert.alert(error);
            //Alert.alert('Không có công vi?c nào du?c tìm th',)
        });
      }

    componentDidMount(){
        this.fetchData();
    }
    taohang(property){
        return(
          <View style ={styless.list01}>     
           <TouchableOpacity style ={styless.list02} onPress={this.ChiTietCViec.bind(this,property.MaCViec)} >
                <Text style={styless.txtTenCViec}>{property.TenCViec}</Text>  
                <Text style={styless.txtTenCty}>{property.TenCTy}</Text> 
                <Text style={styless.txtTinh}>{property.TenTinh}</Text>     
                <Text style={styless.txtLuong}>{property.LuongCViec}</Text>  
                {/* <Text style={styless.txtYeuCau}>{property.YeuCauCViec}</Text>   
                <Text style={styless.txtYeuCau}>{property.TrinhDoCViec}</Text>   
                <Text style={styless.txtYeuCau}>{property.KinhNghiemCViec}</Text>    */}
            </TouchableOpacity>   
          </View>
        );
      }

      static navigationOptions = {
        title: 'Những Công Việc Toàn Thời Gian',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
    };

    render(){
      
      const { user } = this.state;
      const showUsername = (
       
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>{user ? user.username: ''}</Text>
      
    )    
    const hideUsername = (
      //ki?m tra xem user có t?n t?i hay không,
      // n?u có ti?n hành gán giá tr?
      //this.state.user.name => ti?n hành l?y thu?c tính name trong array c?a user tr? v?
      <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}></Text>
    )    
    const username = this.state.user ? showUsername : hideUsername;
        return(
            <ScrollView>
                <View style={styless.LuaChon}>
                         <TouchableOpacity style={styless.btnLuaChon} onPress={this.PartTime}>
                            <Text style={{fontSize: 15, color:'#2E2EFE', fontWeight:'bold'}}>PartTime</Text>
                         </TouchableOpacity>
                         <View style={styless._DisbtnLuaChon} >
                            <Text style={{fontSize: 15, color:'#fff', fontWeight:'bold'}}>FullTime</Text>
                         </View>
                </View>

                <View>
                    <Text style={styless.title}>Công Việc FullTime</Text>
                </View>  

                <View style={styless.container}>  
                {username}                            
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />                      
                </View>          
            </ScrollView>   
        );
    }
}

var styless = StyleSheet.create({
  title:{
    paddingTop: 10,
    fontSize: 27,
    marginLeft: 10,

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
    borderRadius: 40,
    alignItems: 'center',
    padding: 8,
    marginRight:3,
    justifyContent: 'space-between',
    width: '40%',
    borderWidth: 1.5,
    borderColor: '#2E2EFE'
},
_DisbtnLuaChon:{
  marginTop: 20,
  marginLeft: 10,
  borderRadius: 40,
  alignItems: 'center',
  padding: 8,
  marginRight:3,
  justifyContent: 'space-between',
  width: '40%',
  backgroundColor: '#2E2EFE'
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