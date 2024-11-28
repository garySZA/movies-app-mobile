import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../navigation';
import { useMovie } from '../../hooks';
import { MovieDetails, MovieHeader } from '../../components/movie';
import { FullScreenLoader } from '../../components/loaders';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    const { movie, isLoading, cast } = useMovie( movieId );

    if( isLoading ){
        return <FullScreenLoader />;
    }

    return (
        <ScrollView style={ styles.container }>
            <MovieHeader
                poster={ movie!.poster }
                title={ movie!.title }
                originalTitle={ movie!.originalTitle }
            />

            <MovieDetails 
                movie={ movie! }
                cast={ cast! }
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});
