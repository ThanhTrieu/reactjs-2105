import { createSelector } from 'reselect';

const detailState = state => state.detailFootball;

export const getStateLoadingDetail = createSelector(
  detailState,
  item => item.loading
)

export const getDataStateDetail = createSelector(
  detailState,
  item => item.detail
);

export const isEmptyDetailFootball = createSelector(
  detailState,
  item => item.message
)

export const getFixtureDetail = createSelector(
  getDataStateDetail,
  item => {
    if(item.hasOwnProperty('fixture_detail')) {
      return item.fixture_detail;
    }
    return {}
  }
)
export const getLeagueDetail = createSelector(
  getDataStateDetail,
  item => {
    if(item.hasOwnProperty('league_detail')) {
      return item.league_detail;
    }
    return {}
  }
)