import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { Navigation } from './presentation/navigation';

const iconProvider = (props: React.ComponentProps<typeof IonIcon>) => <IonIcon { ...props }/>;

export const Main = () => {
    return (
      <NavigationContainer>
        <PaperProvider
          settings={{
            icon: iconProvider,
          }}
        >
          <SafeAreaView style={ styles.container }>
            <Navigation />
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
