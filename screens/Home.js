import React,{Component} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            cases:""
        }
    }
    getInfo=async()=>{
        var url='https://api.opencovid.ca/'
        return fetch(url)
        .then((response)=>{
            response.json()
        })
        .then((responseJson)=>{
            this.setState({
                cases:responseJson
            })
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    componentDidMount=()=>{
        this.getInfo() 
    }
    render(){
        if (this.state.cases==="") {
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        }
        else{
            return(
                <View style={{flex:1}}>
                    <View style={{flex:1,borderWidth:1,alignItems:'center'}}>
                    <Text style={styles.title}>
                        Covid Tracking
                    </Text>
                    <Image style={styles.image} source={require("../assets/icon.png")}/>
                    
                    </View>
                </View>
            )
        }

    }
}
const styles=StyleSheet.create({
    title:{
        marginTop:50,
        fontSize:30,
        fontWeight:'550',
        color:'#00c7ff'

    },
    image:{
        width:200,
        height:200,
        marginTop:30
    }
})