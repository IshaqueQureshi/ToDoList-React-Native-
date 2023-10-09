import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const List = props => {
  return (
    <Pressable onPress={props.onDelete.bind(this,props.id)}>
      <View>
        <Text style={styles.list}>{props.text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  list: {
    borderWidth: 2,
    margin: 2,
    alignItems: 'center',
    borderColor: 'grey',
    padding: 10,
    backgroundColor: 'black',
    fontWeight: 'bold',
    borderRadius: 16,
    color: 'white',
  },
});
export default List;
