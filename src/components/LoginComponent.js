import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ToastAndroid 
} from 'react-native';
import { loginUser } from '../services/services';
const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            message:'User Logged In',
           user:{  password: '', email:""}
        }

        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        navigation.title = "LoginComponent"     
    }
    login(){
        loginUser(this.state.user).then(result=>{
            this.setState({message:'User Logged Successfully',visible:true});
            // this.props.navigation.navigate('ProfilePage');
        }).catch(err=>{
            this.setState({message:err.message,visible:true});
        });
    }
    handleChange(e,fieldName){
        let currentState=this.state;
        currentState.user[fieldName]=e.nativeEvent.text;
        this.setState(currentState);
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChange={(e)=>{
                            this.handleChange(e,'email')
                        }}
                        />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChange={(e)=>{
                            this.handleChange(e,'password')
                        }} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
                onPress={this.login}>
                    <Text style={styles.signUpText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
                onPress={() => this.props.navigation.navigate('SignupPage')}>
                    <Text style={styles.signUpText}>SignUP</Text>
                </TouchableHighlight>
                <Toast visible={this.state.visible} message={this.state.message} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#000',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 10,
    },
    signupButton: {
        backgroundColor: "#36aaa1",
    },
    signUpText: {
        color: 'white',
    }
});