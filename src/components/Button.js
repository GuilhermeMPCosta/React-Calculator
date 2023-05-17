import react from "react";
import { StyleSheet,Text,Dimensions,TouchableHighlight } from "react-native";

const style = StyleSheet.create({
    button:{
        fontSize:40,
        height:Dimensions.get("window").width/4,
        width:Dimensions.get("window").width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:"center",
        borderWidth:1,
        borderColor:"#888"
        
    },
    operationButton:{
        color:"#fff",
        backgroundColor:"#fa8231"
    },
    buttondouble:{
        width:(Dimensions.get('window').width/4)*2,
    },
    buttontriple:{
        width:(Dimensions.get('window').width/4)*3,
    }
        
})

export default props =>{
    const stylesbutton = [style.button]
    if (props.double) stylesbutton.push(style.buttondouble)
    if (props.triple) stylesbutton.push(style.buttontriple)
    if (props.operation) stylesbutton.push(style.operationButton)
    
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesbutton}>{props.label}</Text>
        </TouchableHighlight>
    )
}