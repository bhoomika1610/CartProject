import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AddButtonStyles} from './AddButton.styled';
import {Icon, IconNames} from 'icons';

const AddButton = ({oneItem, dispatch, addToCart}) => {
  return (
    <TouchableOpacity
      style={styles.addButtonMainContainer}
      onPress={() => {
        dispatch(addToCart({product: oneItem, quantity: 1}));
      }}>
      <View style={styles.addButtonContainer}>
        <View style={styles.cartIconContainer}>
          <Icon iconName={IconNames.CartIcon} height={24} width={24} />
        </View>
        <View style={styles.addButtonTextContainer}>
          <Text style={[styles.type, styles.addButtonText]}>ADD</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(AddButtonStyles);
export default AddButton;
