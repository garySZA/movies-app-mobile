import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useMovies } from '../../hooks';

export const HomeScreen = () => {
    const {} = useMovies();

    return (
        <View style={ styles.container }>
            <Text> HomeScreen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
