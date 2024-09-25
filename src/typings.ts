export interface Choice {
  title: string;
  options: ChoiceOption[];
  choice?: Choice;
  prev?: Choice;
}

export interface ChoiceOption {
  value: string;
  choice?: Choice;
}
