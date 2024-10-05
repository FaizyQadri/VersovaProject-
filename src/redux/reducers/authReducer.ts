import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthentReducer} from '../../types/authTypes';

const initialState: AuthentReducer = {
  createProfile: {
    FBAId: 0,
    FullName: '',
    UserName: '',
    EmailID: '',
    MobiNumb1: '',
    ProfPictName: '',
  },
};

const authReducer = createSlice({
  initialState,
  name: 'authReducer',
  reducers: {
    setCreatedProfile: (
      state,
      action: PayloadAction<AuthentReducer['createProfile']>,
    ) => {
      state.createProfile = action.payload;
    },

    initcreateProfile(state) {
      state.createProfile = {
        FBAId: 0,
        FullName: '',
        UserName: '',
        EmailID: '',
        MobiNumb1: '',
        ProfPictName: '',
      };
    },
  },
});

export const {setCreatedProfile, initcreateProfile} = authReducer.actions;

export default authReducer.reducer;
