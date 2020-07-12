import { SQLite } from "expo-sqlite";

const db = SQLite.openDatabase("MyInstruct.db");

export const init = () => {
  db.transaction((tx) => {
    tx.esecuteSql(
      "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, color TEXT NOT NULL)"
    );
  });
};
