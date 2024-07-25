export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
  theme?: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};
