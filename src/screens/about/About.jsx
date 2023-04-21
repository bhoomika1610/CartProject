import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import {AboutStyles} from './About.styled';
import {PageHeader} from 'components';

const About = props => {
  let image = props?.route?.params?.image;
  let description = props?.route?.params?.description;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <PageHeader title={'About'} back />
        <View style={styles.infoContainer}>
          <Image source={{uri: image}} style={styles.image} />
          <Text style={styles.itemDescription}>{description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(AboutStyles);
export default About;
