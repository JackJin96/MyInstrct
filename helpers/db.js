import * as SQLite from "expo-sqlite";

import AsyncStorage from '@react-native-community/async-storage';

import {
  CATEGORY_TITLES,
  ATEGORY_COLORS,
  CATEGORY_COLORS,
} from "../data/dummy-data";

const db = SQLite.openDatabase("MyInstruct.db");

const getFromAsyncStorage = async () => {
  try {
    console.log("Calling getFromAsyncStorage");
    const responseVal = await AsyncStorage.getItem('@appHasBeenRun');
    return responseVal;
  } catch (e) {
    console.log("Error getFromAsyncStorage:");
    console.log(e);
  }
}

const storeToAsyncStorage = async (value) => {
  try {
    console.log("Calling storeToAsyncStorage");
    await AsyncStorage.setItem('@appHasBeenRun', value);
  } catch (e) {
    console.log("Error storeToAsyncStorage:");
    console.log(e);
  }
}

export const init = () => {
  const promise = new Promise((resolve, reject) => {

    const appHasBeenRun = getFromAsyncStorage();
    if (!appHasBeenRun) {
      console.log("FIST TIME!");
      storeToAsyncStorage("yes");
      // create categories table
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, color TEXT NOT NULL);",
          [],
          (_, res) => {
            console.log("CREATE TABLE SUCCESS");
          },
          (_, err) => {
            reject(err);
          }
        );
      });

      // initialize 10 default categories
      for (let i = 0; i < 10; i++) {
        db.transaction((tx) => {
          tx.executeSql(
            `INSERT INTO categories (title, color) SELECT * FROM (SELECT ?, ?) AS tmp WHERE NOT EXISTS (SELECT (title, color) FROM categories WHERE title = ? AND color = ?) LIMIT 1;`,
            [
              CATEGORY_TITLES[i],
              CATEGORY_COLORS[i],
              CATEGORY_TITLES[i],
              CATEGORY_COLORS[i],
            ],
            (_, res) => {
              console.log("INSERT " + CATEGORY_TITLES[i] + " SUCCESS");
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      }
    } else {
      console.log("NOT FIRST TIME!");
    }

    resolve("init success");
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
