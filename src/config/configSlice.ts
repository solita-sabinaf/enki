import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

import { Config } from './config';

export interface ConfigState extends Config {
  loaded: boolean;
}

const initialState: ConfigState = {
  loaded: false,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig: (state, action: PayloadAction<Config>) => ({
      loaded: true,
      ...action.payload,
    }),
  },
});

export const { updateConfig } = configSlice.actions;

export const selectConfigLoaded = (state: RootState) => state.config.loaded;

export default configSlice.reducer;
