import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RSSResult } from '../types/RSSResult';
import { RSSResponse } from '../types/RSSResponse';

type RSS = {
  results: RSSResult[];
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: RSS = {
  results: [
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    },
    {
      image_url: null,
      title: null, 
      description: null
    }
  ],
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const RSSSlice = createSlice({
  name: 'RSS',
  initialState,
  reducers: {
    fetchRSS(state) {
      state.isLoading = true;
    },
    fetchRSSSuccess(
      state,
      action: PayloadAction<AxiosResponse<RSSResponse>>
    ) {
      state.isLoading = false;
      state.results = action.payload.data.results;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchRSSError(
      state,
      action: PayloadAction<AxiosResponse<RSSResponse>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default RSSSlice.reducer;
