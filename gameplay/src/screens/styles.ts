import { StyleSheet } from "react-native";
import { theme } from "../global/styles/theme";
export const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#ABF2F2',
        justifyContent : 'center',
        alignItems : 'center'
    },
    input: {
        height: 50,
        width: 200,
        borderBottomWidth: 2
    },
    image:{
        width:'100%',
        height:360
    }
})