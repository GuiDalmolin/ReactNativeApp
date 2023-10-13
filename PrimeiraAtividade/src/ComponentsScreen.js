import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const res = 2 + 2;
    return (
    <View>
        <Text style={styles.textStyle}>Bem-Vindo ao Meu Primeiro App</Text>
        <Text>Esse app é pra dizer que 2 + 2 pode ser igual a {res} (as vezes nao é)</Text>
        <Text style={styles.observacao}>Obs: usei expo, pq o método tradicional nao estava funcionando por um erro: HAXM requires an Intel CPU (eu uso amd)</Text>
    </View>);
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    observacao:{
        marginTop: 30
    }
})

export default ComponentsScreen;