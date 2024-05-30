import React, {useState} from "react";
import { ImageBackground, Pressable, StyleSheet,  Text, TextInput, View} from 'react-native';

import fundologin from '../assets/styles/fundologin.png';

import styles from '../login/styles.js';


export default function Login ( ) {
    return (
        <View style={styles.container} >

            <ImageBackground
             source={fundologin} style={styles.fundoLogin}
            >
            <Text style={styles.titulo}>GARDEN</Text>

            <Text style={styles.text}>Usuário</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={styles.textPeq}>Esqueceu a senha?</Text>
            <Text style={styles.textPeq}>Cadastre-se</Text>
            </ImageBackground>
        </View>

    );
}