import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from "expo-speech";
import { Header } from 'react-native-elements';

export default class TextToSpeechScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  speak = () => {
  var thingToSay = this.state.name;
  Speech.speak(thingToSay);
}
 render() {
  return (
    <View style={styles.container}>
      <Header
          
          backgroundColor={'#FBC02D'}
          centerComponent={{
            text: 'Text to Speech',
            style: { color: '#fff', fontSize: 20, },
          }}
      />
       <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />
      <TextInput style ={styles.inputBox}
      onChangeText= {(text) => {
        this.setState({ name: text});
      }}
      value= {this.state.text}>
      </TextInput>
      <TouchableOpacity style ={styles.button}
      
      onPress ={ this.speak }>
        <Text style ={styles.buttonText}>Listen</Text>
      </TouchableOpacity>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  inputBox:{
    width:200,
    height:40,
    borderWidth:2.5,
    fontSize:20,
    marginLeft: 60,
    marginTop: 20,
  },
  button:{
    backgroundColor:"#FBC02D",
    width:100,
    height:50,
    borderWidth: 2.5,
    marginTop: 20,
    marginLeft: 110
  },
  buttonText:{
    padding:10,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"white",
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 90,
    marginTop: 20
  }
});
