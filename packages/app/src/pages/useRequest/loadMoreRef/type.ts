export interface Item {
  id: number;
  title: string;
}

export interface Result {
  total: number;
  list: Item[];
}
