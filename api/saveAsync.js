import {AsyncStorage} from 'react-native';
const saveAsync = async(name,token)=>{
    //hàm có 2 biến, biến thứ nhất đại diện cho tên biến, biến thứ 2 là giá trị của biến
    await AsyncStorage.setItem(name, token);
};
export default saveAsync;