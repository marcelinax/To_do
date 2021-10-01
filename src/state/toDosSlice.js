import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToDos = async state => {
  try {
    await AsyncStorage.setItem('@toDos', JSON.stringify(state));
  } catch (e) {}
};

const toDosSlice = createSlice({
  name: 'toDos',
  initialState: {
    toDos: [],
  },
  reducers: {
    setToDos: (state, action) => {
      state.toDos = [...action.payload];
      storeToDos(state.toDos);
    },
    addToDo: (state, action) => {
      const {task, isDone} = action.payload;
      const toDo = {
        task,
        isDone,
      };
      state.toDos = [...state.toDos, toDo];
      storeToDos(state.toDos);
    },
    setDoneToDos: (state, action) => {},
    deleteToDo: (state, action) => {
      const startDeleteIndex = state.toDos
        .map(toDo => toDo)
        .indexOf(action.payload);
      state.toDos.splice(startDeleteIndex, 1);
      state.toDos = [...state.toDos];
      storeToDos(state.toDos);
    },
    toggleIsDone: (state, action) => {
      const {task} = action.payload;
      const toDoIndex = state.toDos.map(toDo => toDo.task).indexOf(task);
      console.log(toDoIndex);
      state.toDos[toDoIndex].isDone = !state.toDos[toDoIndex].isDone;
      state.toDos = [...state.toDos];
      storeToDos(state.toDos);
    },
  },
});

export const {setToDos, addToDo, deleteToDo, toggleIsDone} = toDosSlice.actions;
export default toDosSlice.reducer;
