import AssistantService from "../../services/AssistantService";
import { assistantSlice }  from "../slices/assistantSlice";
import { AppDispatch } from "../store";

export const fixTextErrors = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await AssistantService.fixText(payload)
    if (res)
      dispatch(assistantSlice.actions.changeTextValue(res));
  } catch (error) {
    dispatch(assistantSlice.actions.changeLoadingStatus({key: 'fixLoading', value: false}))
    console.log(error);
  } 
  dispatch(assistantSlice.actions.changeLoadingStatus({key: 'fixLoading', value: false}))
};

export const improveText = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await AssistantService.improveText(payload)
    if (res)
      dispatch(assistantSlice.actions.changeTextValue(res));
  } catch (error) {
    dispatch(assistantSlice.actions.changeLoadingStatus({key: 'improveLoading', value: false}))
    console.log(error);
  } 
  dispatch(assistantSlice.actions.changeLoadingStatus({key: 'improveLoading', value: false}))
}

export const analyzeText = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await AssistantService.analyzeText(payload)
    if (res)
      dispatch(assistantSlice.actions.changeTextToneValue(`Эмоциональный тон: ${res}`));
  } catch (error) {
    dispatch(assistantSlice.actions.changeLoadingStatus({key: 'analyzeLoading', value: false}))
    console.log(error);
  } 
  dispatch(assistantSlice.actions.changeLoadingStatus({key: 'analyzeLoading', value: false}))
}

