import React, { useCallback, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import s from "./Assistant.module.scss";
import "./style.scss";
import Button from "./components/Button";
import { useCustomDispatch } from "../../hooks/store";
import { useSelector } from "react-redux";
import selectors from "../../store/selectors";
import { assistantSlice } from "../../store/slices/assistantSlice";
import {
  analyzeText,
  fixTextErrors,
  improveText,
} from "../../store/thunks/textOperations";


interface AssistantProps {
}

const Assistant: React.FC<AssistantProps> = () => {
  const dispatch = useCustomDispatch();
  const { text, isLoading, tone } = useSelector(selectors.selectAssistant);

  const handleFixTextErrors = useCallback(() => {
    dispatch(fixTextErrors(text));
    dispatch(
      assistantSlice.actions.changeLoadingStatus({
        key: "fixLoading",
        value: !isLoading.fixLoading,
      })
    );
  }, [dispatch, text, isLoading.fixLoading]);

  const handleImproveText = useCallback(() => {
    dispatch(improveText(text));
    dispatch(
      assistantSlice.actions.changeLoadingStatus({
        key: "improveLoading",
        value: !isLoading.improveLoading,
      })
    );
  }, [dispatch, text, isLoading.improveLoading]);

  const handleAnalyzeText = useCallback(() => {
    dispatch(analyzeText(text));
    dispatch(
      assistantSlice.actions.changeLoadingStatus({
        key: "analyzeLoading",
        value: !isLoading.analyzeLoading,
      })
    );
  }, [dispatch, text, isLoading.analyzeLoading]);

  const toneDisplay = useMemo(() => {
    return tone; 
  }, [tone]);

  return (
    <div className={s.wrapper}>
      <div className={s.functions_row}>
        <Button onClick={handleFixTextErrors} isLoading={isLoading.fixLoading}>
          Исправить ошибки
        </Button>
        <Button onClick={handleImproveText} isLoading={isLoading.improveLoading}>
          Улучшение стиля
        </Button>
        <Button onClick={handleAnalyzeText} isLoading={isLoading.analyzeLoading}>
          Анализировать эмоциональный тон текста
        </Button>
      </div>
      <div className={s.input_wrapper}>
        <div className={s.tone_wrapper}>{toneDisplay}</div>
        <ReactQuill
          value={text}
          onChange={(value: string) =>
            dispatch(assistantSlice.actions.changeTextValue(value))
          }
        />
      </div>
    </div>
  );
};

export default React.memo(Assistant);
