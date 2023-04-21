import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SingleProductStyles} from './SingleProductDetails.styled';
const SingleProductDetails = ({oneItem, detailHeading}) => {
  return (
    <Text style={styles.itemDescription}>
      <Text style={styles.type}>{detailHeading}</Text> {oneItem}
    </Text>
  );
};

const styles = StyleSheet.create(SingleProductStyles);
export default SingleProductDetails;
