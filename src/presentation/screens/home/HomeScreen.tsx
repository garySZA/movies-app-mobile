import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks';
import { HorizontalCarousel, PosterCarousel } from '../../components/movies';
import { FullScreenLoader } from '../../components/loaders';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if( isLoading ){
        return <FullScreenLoader />;
    }

    return (
        <ScrollView>
            <View style={[ styles.container, { marginTop: top + 20 } ]}>

                {/* Principal */}
                <PosterCarousel
                    movies={ nowPlaying }
                />

                {/* Populares */}
                <HorizontalCarousel
                    movies={ popular }
                    title="Populares"
                    loadNextPage={ popularNextPage }
                />

                <HorizontalCarousel
                    movies={ topRated }
                    title="Mejor calificadas"
                />

                <HorizontalCarousel
                    movies={ upcoming }
                    title="Próximamente"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
});
