import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

import getMaCViec from '../api/getMaCViec';
import getToken from '../api/getToken';
import checkLogin from '../api/checkLogin';

var URL =  "http://192.168.1.8/servershowchitietcongviec.php"

export default class TrangChu extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          
          dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
          mauser:null,
        }
      }

    componentDidMount(){

      getToken()
      .then(token => checkLogin(token))
          .then(res => {
            this.setState({mauser:res.user.MaUser})

            // console.log("ccccccccccccccccccccc",res.user.MaUser)
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

    taohang(property){
        return(
          <View style ={styles.hang}>     
           <TouchableOpacity style={styles.ChiTietCV} onPress={this.ChiTietCV} >
                <Text style={styles.test}>{property.YeuCauCViec}</Text>  
                <Text style={styles.test}>{property.KinhNghiemCViec}</Text>
                <Text style={styles.test}>{property.TrinhDoCViec}</Text>     
             
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