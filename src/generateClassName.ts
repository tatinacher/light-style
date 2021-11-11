import * as Chance from "chance";

const START_POOL = "-_abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALL_POOL = START_POOL + "0123456789";

export const generateClassName = () => {
  const chanceClass = new Chance();
  const length = chanceClass.natural({
    max: 20,
    min: 1,
  });
  const startChar = chanceClass.character({
    pool: START_POOL,
  });

  const randomString = chanceClass.string({
    pool: ALL_POOL,
    length,
  });

  return startChar + randomString;
};
