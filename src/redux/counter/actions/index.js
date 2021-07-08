import * as types from './type';

// day la noi dinh nghia action
// action no la 1 ham se tra ve pure object thong thuong se bao gom 2 thuoc tinh co ban type va payload
// type: ten cu hanh dong
// payload: gia tri truyen len cua action

export const decrementCounter = (val) => ({
  type: types.DECREMENT_COUNTER,
  payload: { val }
});

export const incrementCounter = (val) => ({
  type: types.INCREMENT_COUNTER,
  payload: { val }
});