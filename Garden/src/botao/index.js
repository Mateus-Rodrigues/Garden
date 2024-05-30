import { Pressable, Text, View} from 'react-native';

import styles from '../botao/styles.js';

export default function Botao ( ) {
    return(
        <View style={styles.button}>
        <Pressable >
            <Text style={styles.txtButton}>
                ENTRAR
            </Text>
        </Pressable>
        </View>
    )
}