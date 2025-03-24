import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Assistant = {
  text: string,
  isLoading: {
    fixLoading: boolean,
    improveLoading: boolean,
    analyzeLoading: boolean,
  }
  tone: string  
};

const initialState: Assistant = {
  text: '',
  isLoading: {
    fixLoading: false,
    improveLoading: false,
    analyzeLoading: false,
  },
  tone: ''
};

export const assistantSlice = createSlice({
  name: 'assistant',
  initialState,
  reducers: {
    changeTextValue(state, action: PayloadAction<string>) {
      state.text = action.payload
    },
    changeLoadingStatus(state, action: PayloadAction<{key: keyof Assistant['isLoading'], value: boolean}>) {
      state.isLoading[action.payload.key] = action.payload.value;
    },
    changeTextToneValue(state, action: PayloadAction<string>) {
      state.tone = action.payload
    }
  },
});

export default assistantSlice.reducer;
