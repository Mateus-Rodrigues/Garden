import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login/index.js';
import Botao from './src/botao/index.js';

export default function App() {
  return (
    

       <Botao />,
       <Login />
       
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
