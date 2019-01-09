import {AsyncStorage} from 'react-native';
const saveToken = async(token)=>{
    //hàm có 2 biến, biến thứ nhất đại diện cho tên biến, biến thứ 2 là giá trị của biến
    await AsyncStorage.setItem("@token", token);
};
export default saveToken;