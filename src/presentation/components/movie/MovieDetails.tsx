import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Cast, FullMovie } from '../../../core/entities';
import { Formatter } from '../../../config/helpers';
import { IonIcon } from '../shared';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast';

interface Props {
    movie: FullMovie;
    cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={ styles.container }>
                <View style={ styles.details }>
                    <IonIcon
                        name='star-half-outline'
                    />
                    <Text style={ styles.detailsText } >{ movie.rating }</Text>
                    <IonIcon 
                        name='diamond-outline'
                    />
                    <Text style={ styles.detailsText } >{ movie.genres.join(', ') }</Text>
                </View>
                <Text style={ styles.subtitle } >Historia</Text>
                <Text style={ styles.history } >{ movie.description }</Text>

                <Text style={ styles.subtitle } >Presupuesto</Text>
                <Text style={ styles.budget } >{ Formatter.currency( movie.budget ) }</Text>
            </View>

            <View style={ styles.actorsContainer }>
                <Text style={ styles.actorsTitle }>Actores</Text>

                <FlatList
                    data={ cast }
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    renderItem={ ({ item }) => <CastActor actor={ item } /> }
                />
            </View>
        
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },

    details: {
        flexDirection: 'row',
    },

    detailsText: {
        marginHorizontal: 5
    },

    subtitle: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },

    history: {
        fontSize: 16,
    },

    budget: {
        fontSize: 18,
    },

    actorsContainer: {
        marginTop: 10,
        marginBottom: 50,
    },

    actorsTitle: {
        fontSize: 23,
        marginVertical: 10,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
});
