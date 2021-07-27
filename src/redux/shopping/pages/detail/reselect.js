import { createSelector } from 'reselect';

const detailState = state => state.detailReducer;

export const getLoadingDetail = createSelector(
    detailState,
    item => item.loadingDetail
)

export const getDataDetailProduct = createSelector(
    detailState,
    item => item.detail
);

export const getErrorDetailProduct = createSelector(
    detailState,
    item => item.error
);

export const getMessNotFoundProduct = createSelector(
    detailState,
    item => item.mess
);