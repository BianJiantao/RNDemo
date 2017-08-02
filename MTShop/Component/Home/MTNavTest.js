/**
 * Created by BJT on 17/8/2.
 * 
 * 导航跳转测试
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var NavTest = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popTopHome()}}>
                    <Text style={styles.welcome}>
                        测试跳转
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popTopHome(){ // 返回上一界面
        this.props.navigator.pop();
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

// 输出组件类
module.exports = NavTest;