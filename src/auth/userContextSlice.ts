import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Provider from '../model/Provider';
import { UttuQuery } from '../api';
import { getUserContextQuery } from '../api/uttu/queries';

export interface UserContext {
  preferredName: string;
  isAdmin: boolean;
  providers: Provider[];
  activeProviderCode?: string | null;
  loaded: boolean;
}

const initialState: UserContext = {
  isAdmin: false,
  preferredName: '',
  providers: [],
  activeProviderCode: window.localStorage.getItem('ACTIVE_PROVIDER'),
  loaded: false,
};

export const userContextSlice = createSlice({
  name: 'userContext',
  initialState,
  reducers: {
    setActiveProviderCode: (state, action) => {
      return {
        ...state,
        activeProviderCode: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserContext.fulfilled, (state, action) => {
      state.isAdmin = action.payload.isAdmin;
      state.preferredName = action.payload.preferredName;
      state.providers = action.payload.providers;
      state.loaded = true;
    });
  },
});

export default userContextSlice.reducer;

export const { setActiveProviderCode } = userContextSlice.actions;

export interface FetchUserContextArgs {
  uttuApiUrl?: string;
  getAccessToken: () => Promise<string>;
}

export const fetchUserContext = createAsyncThunk<
  UserContext,
  FetchUserContextArgs
>('fetchUserContext', async (args) => {
  const response = await UttuQuery(
    args.uttuApiUrl,
    'providers',
    getUserContextQuery,
    {},
    await args.getAccessToken(),
  );

  return response.userContext;
});
