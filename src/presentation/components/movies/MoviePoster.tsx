import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Movie } from '../../../core/entities';
import { RootStackParams } from '../../navigation';

interface Props {
    movie: Movie
    height?: number
    width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={ () => navigation.navigate('Details', { movieId: movie.id }) }
            style={({ pressed }) => ({
                width,
                height,

                opacity: pressed ? 0.9 : 1,
                ...styles.container,
            })}

        >
            <View style={ styles.imageContainer }>
                <Image
                    style={ styles.image }
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 2,
    },

    image: {
        flex: 1,
        borderRadius: 18,
    },

    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
});
