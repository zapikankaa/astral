import { createStore } from 'vuex'

export const store = createStore({
  state: {
    today: new Date(),
    isLoading: true,
    isRecording: false,
    answers: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: ''
    }
  },
  mutations: {
    setAnswer(state, payload) {
      const questionNum = payload.questionNum;
      state.answers['question' + questionNum] = payload.answer
    },
    setLoading(state, payload) {
      state.isLoading = payload.isLoading
    },
    setRecording(state, payload) {
      state.isRecording = payload.isRecording
    }
  }
})