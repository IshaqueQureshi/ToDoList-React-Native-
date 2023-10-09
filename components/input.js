import React, {useState} from 'react';
import {View,Text, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

const Input = props => {
  const [input, setInput] = useState('');

  const inputData = text => {
    setInput(text);
  };

  const toDoList = () => {
    props.onAddtoDoList(input);
    setInput('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require('../assests/todolist.png')} />
        <TextInput
          style={styles.input}
          placeholder="Type Your ToDo Here!"
          onChangeText={inputData}
          value={input}
        />
        <View style={styles.button}>
          <View style={styles.buttonA}>
            <Button title="Add Your ToDo" onPress={toDoList} color={'green'} />
          </View>
          <View style={styles.buttonA}>
            <Button title="Cancel" onPress={props.cancleModall} color={'red'} />
          </View>
        </View>
        <Text
          style={{
            alignItems: 'flex-end',
            fontSize: 20,
            textAlign: 'right',
            color:'white'
          }}>
          {' '}MADE BY : ISHAQUE QURESHI{' '}
        </Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  input: {
    margin: 6,
    borderWidth: 2,
    borderRadius: 17,
    width: '90%',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
  },
  button: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  buttonA: {
    marginHorizontal: 10,
    width: '45%',
    borderWidth: 3,
    borderRadius: 7,
  },
  img: {
    width: 180,
    height: 180,
    margin: 20,
  },
});
export default Input;
