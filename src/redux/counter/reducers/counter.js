// noi xu ly va cap nhat lai state
import * as types from '../actions/type';

// dinh nghia state mac dinh
const initialState = {
  count : 0
}

// dinh nghia reducer
// no la 1 ham : nhan vao 2 tham so
// tham so thu nhat : state cu cua ung dung
// tham so thu hai: action duoc store goi vao
// can cu vao action de cap lai state nhung voi dieu kien 
// khong lam thay doi state cu

export const counterReducer = (state = initialState, action) => {
  // co 2 hanh dong khac nhau nhung cung xu ly cho 1 state nen mh chi can 1 reducer de xu ly
  // ve nguyen tac thi cac reducer se dam nhan nhiem vu cap nhat nhat state cho tung action tuong ung
  // chung ta can biet hanh dong nao se dc goi vao reducer
  switch(action.type) {
    case types.INCREMENT_COUNTER:
      // cap nhat va xu ly state
      // nguyen tac khong dc lam thay doi state cu ban dau
      // xu ly cac ky thuat js
      return {...state, count: action.payload.val + 1 }
    case types.DECREMENT_COUNTER:
      return {...state, count: action.payload.val - 1 }
    default:
      return state;
  }
}