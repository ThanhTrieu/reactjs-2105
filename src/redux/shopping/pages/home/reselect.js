import { createSelector } from 'reselect';

const homeState = state => state.homeReducer;

export const getLoadingProduct = createSelector(
  homeState,
  item => item.loading
);

export const getMessgaeNotFoundProduct = createSelector(
  homeState,
  item => item.messgaeProduct
);

export const getDataProducts = createSelector(
  homeState,
  item => item.allProducts
);

export const getDataProductFeatured = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('featured')) {
      return item.featured;
    }
    return {}
  } 
)

export const getDataProductLatest = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('latest')) {
      return item.latest;
    }
    return {}
  } 
)

export const getDataProductTopSelling = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('top_selling')) {
      return item.top_selling;
    }
    return {}
  } 
)