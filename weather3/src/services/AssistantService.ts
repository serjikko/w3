import axios from "axios";

export default class AssistantService {
  static async fixText(text: string): Promise<string | null> {
    try {
      const body = {text: text}
      const response = await axios.post(`${process.env.REACT_APP_GPT_API}/fix`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      return response.data.text
    } catch (error) {
      console.error(error);
      return null
    }
  }

  static async improveText(text: string): Promise<string | null> {
    try {
      const body = {text: text}
      const response = await axios.post(`${process.env.REACT_APP_GPT_API}/improve`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      return response.data.text
    } catch (error) {
      console.error(error);
      return null
    }
  }

  static async analyzeText(text: string): Promise<string | null> {
    try {
      const body = {text: text}
      const response = await axios.post(`${process.env.REACT_APP_GPT_API}/analyze`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      return response.data.text
    } catch (error) {
      console.error(error);
      return null
    }
  }
}