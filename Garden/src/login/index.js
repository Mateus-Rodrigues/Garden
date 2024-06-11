import React, {useState} from "react";
import { ImageBackground, Pressable, StyleSheet,  Text, TextInput, View} from 'react-native';


import fundologin from '../assets/styles/fundologin.png';
import Botao from "../botao/index.js";
import styles from '../login/styles.js';
import Botao from "../botao/index.js";

export default function Login ( ) {
    return (
        <View style={styles.container} >

            <ImageBackground
             source={fundologin} style={styles.fundoLogin}
            >
            <Text style={styles.titulo}>GARDEN</Text>

            
            <TextInput style={styles.input} placeholder="Usuário"></TextInput>

            
            <TextInput style={styles.input} placeholder="Senha"></TextInput>
<<<<<<< Updated upstream
            
            <View style={styles.button} >
               
               <Botao style={styles.button} />

            </View>
=======

            <Botao />
>>>>>>> Stashed changes

            <Text style={styles.textPeq}>Esqueceu a senha?</Text>
            <Text style={styles.textPeq}>Cadastre-se</Text>

            </ImageBackground>
            
        </View>

    );
}