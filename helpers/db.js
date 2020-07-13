import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("MyInstruct.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, color TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertCategory = (title, color) =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO categories (title, color) VALUES (?, ?)`,
        [title, color],
        (_, res) => {
          resolve(res);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

export const fetchAllCategories = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM categories`,
        [],
        (_, res) => {
          resolve(res);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

export const deleteAllCategories = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM categories`,
        [],
        (_, res) => {
          resolve(res);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
