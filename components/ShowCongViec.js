import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);
var URL =  "http://192.168.0.106/servershowcongviec.php"

export default class showCongViec extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        } 
      this.taohang = this.taohang.bind(this);
      //this.ChiTietCViec = this.ChiTietCViec.bind(this);
      //this.ChiTietCViec = this.ChiTietCViec.bind(this, 'Ahihi')
      }

      ChiTietCViec=(a)=>{
        //Alert.alert(a)
       //this.props.navigation.navigate('ChiTietCViec', {thamso: a})  
       fetch("http://192.168.0.106/servershowchitietcongviec.php",{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         
         "txtDiaDiem": this.state.txtDiaDiem,
         "txtTimKiem": this.state.txtRetypeMatKhau,
         })
        
      })
     .then(  (response) => response.json())
     .then(  (responseJson) => {       
       this.setState({errMessage:responseJson.kq}) 
        //Alert.alert('them thanh cong')
         //setTimeout(() => Alert.alert('tạo tài khoản không thành công'), 2);
         //Alert.alert('login ok bên Js')
         
        //  if(this.state.errMessage == "1"){
       
           this.props.navigation.navigate('ChiTietCViec')
        //  }   else{
       //Alert.alert('Thanh Cong')
        //  } 
        // if(this.state.errMessage == "1"){
        //   Alert.alert('Đăng Kí Thành Công')
        // }   else{
        //   Alert.alert('Đăng Kí Thất Bại')
        // }         
     } )
     .catch((error)=>  
        Alert.alert(error));
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
            //Alert.alert('Không có công việc nào được tìm th',)
        });
      }

    componentDidMount(){
        this.fetchData();
    }
    taohang(property){
        return(
          <View style ={styles.hang}>     
           <TouchableOpacity style={styles.ChiTietCV} onPress={this.ChiTietCViec.bind(this,property.MaCViec)} >
                <Text style={styles.test}>{property.MaCViec}</Text>  
                <Text style={styles.test}>{property.TenCViec}</Text>  
                <Text style={styles.test}>{property.LuongCViec}</Text>  
                <Text style={styles.test}>{property.TenTinh}</Text>    
               
            </TouchableOpacity>   
          </View>
        );
      }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />                      
                </View>          
                
                <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>
            </ScrollView>   
        );
    }
}

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
    hienthi:{
      flex:1,
      
    },
    test:{
      color:'red',
      
    }
  }) 