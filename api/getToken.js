import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (value !== null) {
            //value có kiểu dữ liệu là 1 chuỗi
           //nếu value có kiểu dữ liệu là 1 mảng thì phải trả về kiểu JSON.Parse(value)
           console.log('GET TOKEN'); 
           return value;
            
        }
        return '';
    } catch (error) {
    // Error retrieving data
        return '';
    }
};

export default getToken;
