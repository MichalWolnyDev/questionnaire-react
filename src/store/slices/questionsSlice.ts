import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuestionState {
  totalChecked: number;
  totalCount: number;
  dictionary: Array<{
    title: string;
    checkedCount: number;
    groupId: number;
    questions: Array<{ id: number; question: string; checked: boolean }>;
  }>;
}

const initialState: QuestionState = {
  totalChecked: 0,
  totalCount: 0,
  dictionary: [
    {
      title: "Przywitanie",
      checkedCount: 0,
      groupId: 0,
      questions: [
        {
          id: 1,
          question: "Przedstawienie się.",
          checked: false,
        },
        {
          id: 2,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 3,
          question: "Odpowiedź 3",
          checked: false,
        },
        {
          id: 4,
          question: "Odpowiedź 4",
          checked: false,
        },
      ],
    },
    {
      title: "Analiza potrzeb",
      checkedCount: 0,
      groupId: 1,
      questions: [
        {
          id: 5,
          question: "Jaki jest Pana/Pani obecny samochód?",
          checked: false,
        },
        {
          id: 6,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 7,
          question: "Odpowiedź 3",
          checked: false,
        },

        {
          id: 8,
          question: "Odpowiedź 4",
          checked: false,
        },
        {
          id: 9,
          question: "Odpowiedź 5",
          checked: false,
        },
        {
          id: 10,
          question: "Odpowiedź 6",
          checked: false,
        },
        {
          id: 11,
          question: "Odpowiedź 7",
          checked: false,
        },
        {
          id: 12,
          question: "Odpowiedź 8",
          checked: false,
        },
        {
          id: 13,
          question: "Odpowiedź 9",
          checked: false,
        },
        {
          id: 14,
          question: "Odpowiedź 10",
          checked: false,
        },
        {
          id: 15,
          question: "Odpowiedź 11",
          checked: false,
        },
        {
          id: 16,
          question: "Odpowiedź 12",
          checked: false,
        },
        {
          id: 17,
          question: "Odpowiedź 13",
          checked: false,
        },
        {
          id: 18,
          question: "Odpowiedź 14",
          checked: false,
        },
        {
          id: 19,
          question: "Odpowiedź 15",
          checked: false,
        },
        {
          id: 20,
          question: "Odpowiedź 16",
          checked: false,
        },
      ],
    },
    {
      title: "Prezentacja",
      checkedCount: 0,
      groupId: 2,
      questions: [
        {
          id: 21,
          question: "Aktywne oferowanie prezentacji.",
          checked: false,
        },
        {
          id: 22,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 23,
          question: "Odpowiedź 3",
          checked: false,
        },
        {
          id: 24,
          question: "Odpowiedź 4",
          checked: false,
        },
        {
          id: 25,
          question: "Odpowiedź 5",
          checked: false,
        },
      ],
    },
    {
      title: "Jazda próbna",
      checkedCount: 0,
      groupId: 3,
      questions: [
        {
          id: 26,
          question: "Propozycja jazdy próbnej.",
          checked: false,
        },
        {
          id: 27,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 28,
          question: "Odpowiedź 3",
          checked: false,
        },
        {
          id: 29,
          question: "Odpowiedź 4",
          checked: false,
        },
        {
          id: 30,
          question: "Odpowiedź 5",
          checked: false,
        },
      ],
    },
    {
      title: "Oferta",
      checkedCount: 0,
      groupId: 4,
      questions: [
        {
          id: 31,
          question: "Przygotowana indywidualna oferta.",
          checked: false,
        },
        {
          id: 32,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 33,
          question: "Odpowiedź 3",
          checked: false,
        },
        {
          id: 34,
          question: "Odpowiedź 4",
          checked: false,
        },
        {
          id: 35,
          question: "Odpowiedź 5",
          checked: false,
        },
        {
          id: 36,
          question: "Odpowiedź 6",
          checked: false,
        },
        {
          id: 37,
          question: "Odpowiedź 7",
          checked: false,
        },
        {
          id: 38,
          question: "Odpowiedź 8",
          checked: false,
        },
        {
          id: 39,
          question: "Odpowiedź 9",
          checked: false,
        },
        {
          id: 40,
          question: "Odpowiedź 10",
          checked: false,
        },
        {
          id: 41,
          question: "Odpowiedź 11",
          checked: false,
        },
      ],
    },
    {
      title: "Kontakt telefoniczny",
      checkedCount: 0,
      groupId: 5,
      questions: [
        {
          id: 42,
          question: "Pytanie o decyzję zakupową.",
          checked: false,
        },
        {
          id: 43,
          question: "Odpowiedź 2",
          checked: false,
        },
        {
          id: 44,
          question: "Odpowiedź 3",
          checked: false,
        },
        {
          id: 45,
          question: "Odpowiedź 4",
          checked: false,
        },
        {
          id: 46,
          question: "Odpowiedź 5",
          checked: false,
        },
      ],
    },
  ],
};

export const questionSlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    countAllQuestions: (state) => {
      const totalQuestions = state.dictionary.reduce(
        (acc, section) => acc + section.questions.length,
        0
      );

      state.totalCount = totalQuestions;
    },
    changeChecked: (state, action: PayloadAction<number>) => {
      for (const group of state.dictionary) {
        const question = group.questions.find((q) => q.id === action.payload);

        if (question) {
          question.checked = !question.checked;
          if (question.checked) {
            group.checkedCount++;
            state.totalChecked++;
          } else {
            group.checkedCount--;
            state.totalChecked--;
          }
          break; // Exit the loop once the question is found and updated
        }
      }
    },
  },
});

export const { changeChecked, countAllQuestions } = questionSlice.actions;

export default questionSlice.reducer;
