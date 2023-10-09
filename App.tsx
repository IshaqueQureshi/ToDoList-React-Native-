import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import List from './components/list';
import Input from './components/input';

const App = () => {
  const [todolist, setToDoList] = useState([]);
  const [modall, setModal] = useState(false);

  const addModal = () => {
    setModal(true);
  };
  const cancleModal = () => {
    setModal(false);
  };

  const toDoList = input => {
    setToDoList(currentTodolist => [
      ...currentTodolist,
      {text: input, id: Math.random().toString()},
    ]);
    cancleModal();
  };

  const deleteList = id => {
    setToDoList(currentTodolist => {
      return currentTodolist.filter(goal => goal.id !== id);
    });
    // console.warn('Deleted');
  };

  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.main}>
        <View style={styles.butt}>
          <Button
            title="Add Your List Here!!"
            onPress={addModal}
            color={'green'}
          />
        </View>
        <Input
          onAddtoDoList={toDoList}
          cancleModall={cancleModal}
          visible={modall}
        />
        <View>
          {/* style={styles.main2} */}
          <FlatList
            data={todolist}
            renderItem={itemData => {
              return (
                <List
                  text={itemData.item.text}
                  onDelete={deleteList}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'purple',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  butt: {
    borderWidth: 4,
    borderRadius: 7,
  },
  // main2: {
  //   flex: 2,
  // },
});
export default App;
