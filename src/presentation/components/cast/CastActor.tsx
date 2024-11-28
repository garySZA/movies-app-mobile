import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../../core/entities';

interface Props {
    actor: Cast
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View style={ styles.container }>
            <Image
                source={{ uri: actor.avatar }}
                style={ styles.actorAvatar }
            />

            <View style={ styles.actorInfo }>
                <Text style={ styles.actorInfoName } >{ actor.name }</Text>
                <Text style={ styles.actorInfoCharacter } >{ actor.character }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },

    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    },

    actorInfoName: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    actorInfoCharacter: {
        fontSize: 12,
        opacity: 0.7
    },

    actorAvatar: {
        width: 100, height: 150, borderRadius: 10
    },
});
