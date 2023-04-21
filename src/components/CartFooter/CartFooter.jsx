import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FooterStyles} from './CartFooter.styled';

const CartFooter = ({numberOfItems, totalPrice}) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.heading}>
        Items In Cart{'\n'}
        <Text style={styles.subHeading}> {numberOfItems}</Text>
      </Text>
      <Text style={styles.heading}>
        Total Cart Value{'\n'}
        <Text style={styles.subHeading}> ${totalPrice.toFixed(2)}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(FooterStyles);
export default CartFooter;
