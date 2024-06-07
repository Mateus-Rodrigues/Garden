import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        backgroundColor: '#236c1a', 
        padding: 8,
        borderRadius: 10, 
        
    },

    fundoLogin: {
        width: '100%', 
        height: '100%', 
        //alignItems: 'center', 
        backgroundColor: '#236c1a', 
        padding: 8,
        borderRadius: 10, 
        resizeMode: 'center'
    },

    titulo:{ 
        fontSize: 50,
        alignItems: 'center', 
        textAlign: 'center',
        padding: 8,
        color: '#0F3820',
        fontWeight: 'bold',
    },

    text:{
        fontSize: 20,
        color: '#fff',
        
        
    },

    input:{
        fontSize: 20, 
        color: '#fff',
        width: '100%', 
        borderWidth: 2, 
        borderColor: '#fff',  
        padding: 5,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,

        
    },

    textPeq: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
});

export default styles;