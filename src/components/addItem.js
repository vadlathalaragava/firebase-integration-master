import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {db} from '../services/config';
let itemsRef = db.ref('/items');
let addItem = (item) => {
    db.ref('/items').push({
        itemInfo: item
    });
}

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: '',
            items:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickToAdd = this.clickToAdd.bind(this);
    }
    handleChange(e) {
        this.setState({ itemInfo: e.nativeEvent.text })
    }
    clickToAdd() {
        addItem(this.state.itemInfo);
    }
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.welcome}
                    onChange={this.handleChange}
                    value={this.state.itemInfo}

                />
                <Button
                    onPress={this.clickToAdd}
                    title="Add Item"
                    color="#841584"
                />
                {this.state.items.map(x=>{
                    return <Text>
                        {x.itemInfo}
                        </Text>
                })}
            </View>
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
});
