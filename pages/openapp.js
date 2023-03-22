import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Linking,
    Button,
  } from 'react-native';

const Openapp = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo2.png')}></Image>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Apps</Text>
                <View styles={styles.box}>
                    <View style={styles.appitems}>
                        <TouchableOpacity style={styles.apps} onPress={() => Linking.openURL('https://wa.me/000')}>
                            <Image source={require('../assets/WA.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.apps} onPress={() => Linking.openURL('https://instagram.com/itera.official')}>
                            <Image source={require('../assets/IG.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Aboutus')}>
                <Image source={require('../assets/ask.png')}></Image>
                <Text style={styles.btnplaceholder}>About Us</Text>
            </TouchableOpacity>
        </View>
        <Text styles={styles.footer}>Akhmad Fahrizal || 120140024</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFBEB',
        overflow: 'hidden',
    },

    content: {
        backgroundColor: '#F8CBA6',
        width: 410,
        height: 750,
        borderRadius: 20,
        // marginBottom: 100,
    },

    header: {
      marginTop: 130,
        alignItems: 'center',
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  
    body: {
      margin: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    },

    appitems: {
        backgroundColor: '#FFFBEB',
        width: 313,
        height: 323,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContents:'space-between',
    },

    apps: {
        margin: 25,
    },

    textInput: {
        width: 345,
        height: 50,
        backgroundColor: '#FFFBEB',
        borderRadius: 15,
        textAlign: 'center',
    },

    placeholder: {
        color: '#4F5D73',
        textAlign: 'center',
        alignItems: 'center',
        justifyContents: 'center',
    },

    text: {
        marginTop: 80,
        marginBottom: 10,
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 27,
    },

    button: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#F8CBA6',
        width: 150,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
    },

    btnplaceholder: {
        color: '#ffffff',
    },

  });

export default Openapp;