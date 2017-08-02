/**
 * Created by BJT on 17/8/2.
 *
 * Tabbar 主框架
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 用于判断当前运行的系统  ios,Android
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components'

/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/MTHome');
var Shop = require('../Shop/MTShop');
var Mine = require('../Mine/MTMine');
var More = require('../More/MTMore');


var Main = React.createClass({

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'home' // 默认是第一个
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>

        );
    },
    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                <Navigator   // 包装导航跳转功能
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                />
            </TabNavigator.Item>
        )
    }

});


const styles = StyleSheet.create({

        iconStyle:{  // tabbar 的 icon 大小
            width: 30 ,
            height: 30
        },

        selectedTitleStyle:{
            color:'orange' // tabbatItem 的 title 颜色
        }
}

);

module.exports = Main;
