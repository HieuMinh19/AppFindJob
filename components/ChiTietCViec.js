import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

var URL =  "http://192.168.0.103/servershowchitietcongviec.php"

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
                <Text style={styles.test}>{property.YeuCauCViec}</Text>  
                <Text style={styles.test}>{property.KinhNghiemCViec}</Text>
                <Text style={styles.test}>{property.TrinhDoCViec}</Text>     
                {/* <Text>{property.DiaChi}</Text>  
                <Text>{property.Email}</Text>        
                <Text>{property.DienThoai}</Text>   
                <Text>{property.MaTinh}</Text>       */}
            </TouchableOpacity>   
          </View>
        );
      }
    render(){
        return(

            

            <ScrollView>
              <Text>{this.props.navigation.state.params.TenCTy}</Text>
                <View style={styles.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />                      
                </View>          
                <View>
                  {/* <Text>{this.props.navigation.state.params.thamso}</Text> */}
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