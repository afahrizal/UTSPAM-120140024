import React,{useState} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
  } from 'react-native';
  
const Home = ({ navigation }) => {
const [PIN, setPIN] = useState(setPIN);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')}></Image>
            </View>
            <View style={styles.body}>
                <View styles={styles.box}>
                    <Text style={styles.text}>Input PIN</Text>
                    <TextInput style={styles.textInput}
                        onChangeNumeric={setPIN}
                        value={PIN}
                        keyboardType="numeric"
                        placeholder="******"
                        secureTextEntry={true}
                        selectTextOnFocus={false}
                    />
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('Openapp')}>
                                <Text style={styles.placeholder}>OK</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
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
    //   overflow: 'hidden',
    },

    content: {
        backgroundColor: '#F8CBA6',
        width: 410,
        height: 691,
        borderRadius: 20,
        marginBottom: 180,
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

    box: {
        alignItems: 'center',
        justifyContent: 'center',
        
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
    },

    text: {
        marginTop: 100,
        color: '#ffffff',
        fontSize: 20,
        paddingLeft: '32%',
        margin: 6,
    },

    button: {
        backgroundColor: '#ECF9FF',
        paddingTop: 10,
        borderRadius: 10,
        width: 80,
        height: 40,
        marginLeft: '33%',
        margin: 14,
    },

    footer: {
        position: 'absolute',
        botoom: 0,
        backgroundColor: '#FFFBEB',
    },
  });

export default Home;