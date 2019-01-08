import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import { Scene, Router ,Actions } from 'react-native-router-flux';
import Echarts from 'native-echarts';
export default class App extends Component<{}> {
  constructor(props){
        super(props)
        this.state={
          first:100
        }
  }
  componentDidMount(){
     
  }
  render() {
    let datax=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    let datayfirst=[220, 301, 191, 234, 290, 330, 310,220, 182, 191, 234, 290,220, 301, 191, 234, 290, 330, 310,220, 182, 191, 234, 290,191, 234, 290, 330, 310,220,];
    let dataysec=[20, 31, 91, 234, 90, 300, 30,20, 12, 11, 234, 290,30,20, 12, 11, 234, 290,20, 31, 91, 234, 90, 300, 30,20, 12, 11, 234, 290];
    let datayth=[320, 332, 301, 334, 390, 280, 320,320, 332, 301, 334, 390,320, 332, 301, 334, 390, 280, 320,320, 332, 301, 334, 390, 320,320, 332, 301, 334, 390];
    let datayfor=[820, 932, 901, 934, 120, 1330, 320,20, 932, 901, 934, 390,820, 932, 901, 934, 120, 330, 320,20, 932, 901, 934, 390, 320,20, 932, 901, 934, 390,]
    const optiondangnian = {
      title: {
        text: '当年四合一趋势图',
        textStyle:{
          color:'#f00',
          align:'left',
          fontSize:15
        },
        left:'4%',
        top:'12%',
        },
      legend: {
        left:'20%',
        top:'12%',
        data:['回款','应收','坏账','发货']
        },
       grid: {
        left:'5%',
        top:'25%',
        right:'15%',
        bottom:'5%',
        width:"80%",
        height:'70%',
        containLabel:true
        // containLabel: true,
        // backgroundColor:'#0f0',
        //  left: '100',
        // right: '100',
        // bottom: '100',
        // top:'100'
        },
          xAxis: {
           name:'/月',
           nameTextStyle:{
            color:"#f00"
           },
           type: 'category',
           boundaryGap : false,
           data: datax,
           axisLabel:{
            interval:0
           }
          },
          yAxis: {
            name:'RMB',
            nameTextStyle:{
            color:"#f00"
            },
            axisLine:{
              lineStyle:{
                color:'#f00'
              }
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:"#f00",
                type:'dashed',
                opacity:0.4
              },
            },
            type: 'value'
          },
          series: [
            {
            name:'回款',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:datayfirst
            },
            {
            name:'应收',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:dataysec
            },
            {
            name:'坏账',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:datayth
            },
            {
            name:'发货',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:datayfor
            }
          ]
        };
    return (
      <View style={styles.flexbox}>
      <ScrollView
        style={{height:1.5*height,marginTop:0.05*height}}
        showsHorizontalScrollIndicator={false}
        >
        <View>
        <Image source={require('./src/img/gif.gif')}/>
        </View>
        <Text>123</Text>
        </ScrollView>
      </View>
    );
  }
}
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  flexbox:{
    flex:1
  },
  container: {
    width:350,
    height:350
  }
});
