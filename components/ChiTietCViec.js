import React from 'react';
import { Text, View,StyleSheet,StatusBar,ListView,ScrollView,TouchableOpacity,Alert
} from 'react-native';

var showcongty = Array();
var arr = new Array(1, 2, 4, 5, 9, 6);

import getMaCViec from '../api/getMaCViec';
import getToken from '../api/getToken';
import checkLogin from '../api/checkLogin';


var URL =  "http://192.168.1.101/servershowchitietcongviec.php"

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

    NopHoSo(){
      const macv = this.props.navigation.state.params.MaCViec;
      console.log("ABCXYZ",macv);
      console.log('MAUSER DNJSAHD', this.state.mauser)
        fetch('http://192.168.1.101/serverNopHoSo.php',
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
          <View>     
           <TouchableOpacity style={styles.list01} onPress={this.NopHoSo} >
                <Text style={styles.txtTenCV}>{property.TenCViec}</Text> 
                <Text style={styles.txtTieude}>* Địa chỉ</Text>
                <Text style={styles.txtChiTiet}>{property.TenCTy}</Text> 
                <Text style={styles.txtChiTiet}>{property.TenTinh}</Text>   
                <Text style={styles.txtTieude}>* Mô tả công việc</Text>
                <Text style={styles.txtChiTiet}>Yêu cầu công việc: {property.YeuCauCViec}</Text>  
                <Text style={styles.txtChiTiet}>Kinh nghiệm: {property.KinhNghiemCViec}</Text>
                <Text style={styles.txtChiTiet}>Trình độ học vấn: {property.TrinhDoCViec}</Text> 
                <Text style={styles.txtTieude}>* Quyền lợi được hưởng</Text>
                <Text style={styles.txtChiTiet}>Lương: {property.LuongCViec}</Text>     
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

              {/* <Text>{this.props.navigation.state.params.MaCViec}</Text> */}
                <View style={styles.container}>                              
                    <ListView dataSource={this.state.dataSource}
                            renderRow = {this.taohang}
                    />    
                    
                     <TouchableOpacity style={styles.btnNopCV} onPress={this.NopHoSo.bind(this)}>
                         <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Nộp hồ sơ</Text>
                     </TouchableOpacity>          


                <Text style={{paddingLeft: 20, color:'red'}}>{this.state.errMessage}</Text>        
                </View>          
            
            </ScrollView>   

        );
    }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      paddingBottom: 100
    }, 
    list01:{
      flexDirection: 'column',
      marginBottom: 40
    },
    txtTieude:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 17
    },

    txtChiTiet:{
      color:'#000',
      marginLeft: 20,
      fontSize:  15 ,
      marginLeft: 15
      
    },
    txtTenCV:{
      color: '#000',
      fontWeight: 'bold',
      fontSize:  22 ,
    },
    btnNopCV:{
      backgroundColor: '#FF3300',
      borderRadius: 25,
      alignItems: 'center',
      padding: 8
    },
  }) 