import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Dimensions} from 'react-native';
import Camera from 'react-native-camera';
export default class Profile extends Component{
    constructor(props){
        super(props);
    }
    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
    }
    render(){
        return (

            // <View style={styles.container}>
            //     <Button title="Go Products" onPress={() => this.props.navigation.navigate('Products')} />
            //     <Text style={styles.welcome}>Home</Text>
            // </View>
            <Camera
                ref={cam => { this.camera = cam }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
            >
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                    [CAPTURE]
                </Text>
            </Camera>


        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width},
        capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          color: '#000',
          padding: 10,
          margin: 40  
        }
      
});