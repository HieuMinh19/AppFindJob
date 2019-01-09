import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox, Alert} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';
export default class showCongViec extends React.Component {
    constructor(props){
        super(props);
        this.state={
            txtTimKiem:"",
            txtTenCTY:"Glorucode",
            txtVitri:"Thành phố Hồ Chí Minh",
            txtLuong:"5000000 - 10 000000 VND",
            txtTenCV:"Nhân viên bán hàng",

        }
    }

    static navigationOptions = {
        title: 'Công việc phù hợp',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
      };

      ChiTietCV=()=>{
        this.props.navigation.navigate('ChiTietCV')
      }
      findPartTime=()=>{
        this.props.navigation.navigate('PartTime')
      }
    
      findFullTime=()=>{
        ///this.props.navigation.navigate('PartTime')
      }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput placeholder="Tìm kiếm công việc" placeholderTextColor="#585858" style={styles.txtInput2}  
                    onChangeText={(txtTimKiem) => this.setState({txtTimKiem})}
                    value={this.state.txtTimKiem}/>

                    <View style={styles.LuaChon}>
                         <TouchableOpacity style={styles.btnLuaChon} onPress={ this.findPartTime}>
                            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>PartTime</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.btnLuaChon} onPress={this.findFullTime}>
                            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Full Time</Text>
                         </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.ChiTietCV} onPress={this.ChiTietCV}>
                        <Text style ={styles.tenCV}>{this.state.txtTenCV}</Text>
                        <Text style ={styles.tenCTY}>{this.state.txtTenCTY}</Text>
                        <Text style ={styles.Vitri}>{this.state.txtVitri}</Text>
                        <Text style ={styles.Luong}>{this.state.txtLuong}</Text>
                    </TouchableOpacity>



                </View>
               
            </ScrollView>
        )
    }
}
