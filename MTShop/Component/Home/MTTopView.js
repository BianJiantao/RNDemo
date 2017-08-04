/**
 * Created by BJT on 17/8/3.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');

// 引入外部的组件
var TopListView = require('./MTTopListView');

var TopView = React.createClass({
    getInitialState(){
        return{
            activePage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    // onMomentumScrollEnd = {this.onScrollAnimationEnd}
                    scrollEventThrottle={1}
                    onScroll = {(e)=>{this.changePage(e)}}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    // 当滚动的时候调用,切换页码指示器
    changePage(e){
        // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width + 0.5);

        // 更新状态机
        this.setState({
            activePage: currentPage
        });

    },

    // scrollView内部的组件
    renderScrollItem(){
        // 组件数组
        var itemArr = [];
        // 数据数组
        var dataArr = TopMenu.data;
        // 遍历创建组件
        for(var i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView 
                    key={i} 
                    dataArr={dataArr[i]}
                />
            );
        }
        // 返回组件数组
        return itemArr;
    },


    // 页码(指示器)
    renderIndicator(){
        // 指示器数组
        var indicatorArr = [], style;
        // 遍历创建组件
        for(var i=0; i<2; i++){
            // 设置圆点的样式
            style = (i === this.state.activePage) ? {color:'orange'} :  {color:'gray'}

            indicatorArr.push(
                <Text key={i} style={[{fontSize:25}, style]}>&bull;</Text>
            );
        }
        // 返回数组
        return indicatorArr;
    }
});


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    indicatorViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 水平居中
        justifyContent:'center'
    }
});

// 输出组件类
module.exports = TopView;
