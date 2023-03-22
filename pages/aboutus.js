import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
  } from 'react-native';
  
const Aboutus = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.headertext}>About Us</Text>
        </View>
        <View style={styles.body}>
            <Image style={styles.photo} source={require('../assets/photo.png')}></Image>
            <Text style={styles.teks}>Akhmad Fahrizal</Text>
            <Text style={styles.teks}>120140024</Text>
            <Text style={styles.teks}>Teknik Informatika</Text>
        </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFBEB',
    //   overflow: 'hidden',
    },

    header: {
        width: 410,
        height: 110,
        left: 0,
        backgroundColor: '#F8CBA6',
        borderRadius: 20,
    },

    back: {
        width: 41,
        height: 41,
        left: 13,
        top: 50,

    },

    headertext: {
        width: 110,
        height: 35,
        left: 155,
        top: 11,
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: 26,
        lineHeight: 35,

        color: '#ECF9FF',
    },

    photo: {
        width: 144,
        height: 144,
        left: 30,
        top: 120,
    },  

    teks: {
        textAlign: 'center',
        width: 203,
        height: 36,
        // left: 93,
        top: 155,
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: 26,
        lineHeight: 35,
        color: '#6C6C6C',
    },  
  });

export default Aboutus;