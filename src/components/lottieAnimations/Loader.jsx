import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {LoaderStyles} from './Loader.styled';

const Loader = () => {
  return (
    <LottieView
      style={styles.loaderContainer}
      source={require('../../assets/animationJsonFiles/loaderAnimation.json')}
      autoPlay
      colorFilters={[
        styles.path5,
        styles.path4,
        styles.path3,
        styles.path2,
        styles.path1,
      ]}
    />
  );
};

const styles = StyleSheet.create(LoaderStyles);
export default Loader;
