import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
         width: '100%', 
         height: '100%', 
        // alignItems: 'center', 
        backgroundColor: '#236c1a', 
        padding: 8,
        borderRadius: 10, 
        
    },

    fundoLogin: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        backgroundColor: '#236c1a', 
        padding: 8,
        borderRadius: 10, 
    },

    titulo:{ 
        alignItems: 'center', 
        textAlign: 'center',
        padding: 8,
        color: '#0F3820',
    },

    text:{
        fontSize: 15,
        color: '#fff',
        display: 'flex',
        alignContent: 'stretch',
        
    },

    input:{
        fontSize: 20, 
        color: '#fff',
        width: '100%', 
        textAlign: 'center', 
        borderWidth: 2, 
        borderColor: '#fff',  
        padding: 5,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,

        
    },

    button: {
        color: '#fff',
        backgroundColor: '#074A05',
        margin: 5,
        padding: 10,
        width: '35%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
    },
    txtButton: {
        color: '#fff',
        fontSize: 15,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        

    },

    backg: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },

    textPeq: {
        color: '#fff',
        fontSize: 6,
        textAlign: 'center'
    },
});

export default styles;