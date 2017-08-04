/**
 * Created by BJT on 17/8/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

var Shop = React.createClass({

    getInitialState(){
        return{
            detailUrl: 'http://www.meituan.com'
        }
    },

    render() {

        // alert(this.props.url);

        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },

    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>{alert('定位!')}} style={styles.leftViewStyle}>
                    <Image source={{uri: 'icon_shop_local'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>商家</Text>
                <TouchableOpacity onPress={()=>{alert('搜索!')}} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_shop_search'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
});


const styles = StyleSheet.create({
    container: {
        flex:1
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    },

    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    }
});

// 输出组件类
module.exports = Shop;
