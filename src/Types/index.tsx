export interface PushedStateParams {
  difficulty: string;
  topic: string;
  name: string;
}
export interface Questions {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  category: string;
  difficulty: string;
  type: string;
}

export interface Options {
  title: string;
  value: number | string;
}
export interface DropdownProps {
  data: Array<Options> | Array<string>;
  label: string;
  selectionChangeHandler: (label: string, value: any) => void;
}
export interface QuizModalProps {
  questions: Array<Questions>;
}
export interface SingleOptionProps {
  option: string;
  handleAnswerPicked: (answer: string) => void;
}
