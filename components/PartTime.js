import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var arr = [];
var URL =  "http://192.168.0.106/serverFindPartTime.php";
var people = [
  {name: 'sdds', age: 29},
  {name: 'Sơn Tùng', age: 24},
];

export default class TrangChu extends React.Component {
 
  constructor(props){
      super(props);
      this.state = {

        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
      }
      //this.ChiTietCV = this.ChiTietCV.bind(this);
      this.taohang = this.taohang.bind(this);
    }

    ChiTietCV=()=>{
      Alert.alert("sdfsdf")
      
      this.props.navigation.navigate('Login')  
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
          Alert.alert('lỗi lik',)
      });
    }
    

  componentDidMount(){
      this.fetchData();
  }
 
  taohang(property){
  
      return(
        
        <View style ={styles.hang}>     
         <TouchableOpacity style={styles.ChiTietCV} onPress={this.ChiTietCV} >
              <Text style={styles.test}>{property.MaChiTietCV}</Text>  
              <Text style={styles.test}>{property.MaLoaiCV}</Text>     
              <Text>{property.MaNganh}</Text>  
              <Text>{property.TenCV}</Text>        
              <Text>{property.SoLuong}</Text>   
              <Text>{property.YeuCau}</Text>      
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

              <View style={styles.container}>                              
                <TouchableOpacity style={styles.ChiTietCV} onPress={this.ChiTietCV}>         
                  <Text>dsadsa</Text>      
                </TouchableOpacity>         
              </View>      
             

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
    justifyContent:'center',
    alignItems:'center',
    
  },
  hienthi:{
    flex:1,
    
  },
  test:{
    color:'red',
    
  }
}) 