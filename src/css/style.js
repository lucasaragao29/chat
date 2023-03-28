import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        backgroundColor:'rgb(20,100,100)',
        alignItems:'center',
        justifyContent:'center',
        height:70,
        marginTop:'5%',
        
        
        
    },
    nome:{
        fontSize:27,
        color:'white',
    },
    chat:{
        height:'80%',
        backgroundColor:'#aaa',
        flexDirection:'column-reverse',
        position:'relative',
        alignItems:'flex-end'
        
        
                
    },
    box:{
        
    },
    msg:{
        height:'20%',
        width:'50%',
        backgroundColor:'white',
        fontSize:17,
        borderRadius:20,
        padding:10,
        marginBottom:10,
    },
    inputArea:{
        backgroundColor:'green',
        height:'10%',
    }
})

export default styles;
