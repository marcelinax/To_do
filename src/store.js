import {configureStore} from '@reduxjs/toolkit';
import toDosSlice from './state/toDosSlice';

export default configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});
