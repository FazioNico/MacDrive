import { Category, Database } from './interfaces';

export const getRecipes = async (): Promise<Category[]> => {
  const url = './resto-data.json';
  const request = await fetch(url);
  const json: Database = await request.json();
  const result = json.data;
  return result;
};
