import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity
} from 'react-native';

var URL =  "http://192.168.0.126/showchitietcongviec.php"

export default class TrangChu extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        }
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
                <Text style={styles.test}>{property.MaCTY}</Text>  
                <Text style={styles.test}>{property.TenCTY}</Text>     
                <Text>{property.DiaChi}</Text>  
                <Text>{property.Email}</Text>        
                <Text>{property.DienThoai}</Text>   
                <Text>{property.MaTinh}</Text>      
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