import { Pressable, Text, View} from 'react-native';

import styles from '../botao/styles.js';

export default function Botao ( ) {
    return(
        <View >
        <Pressable style={styles.button} >
            <Text style={styles.txtButton}>
                ENTRAR
            </Text>
        </Pressable>
        </View>
    )
}