import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const PopularMoviesPage = lazy(() => import('../pages/popularMovies/index'));
const SearchMoviesPage = lazy(() => import('../pages/searchMovies/index'));
const DetailMoviePage = lazy(() => import('../pages/detail/index'));

const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
          {/* duong dan mac dinh */}
          <Route path="/" exact>
            <PopularMoviesPage/>
          </Route>
          <Route path="/popular-movie">
            <PopularMoviesPage/>
          </Route>
          <Route path="/search-movie">
            <SearchMoviesPage/>
          </Route>
          {/* localhost:3000/movie/ngoi-nha-hanh-phuc~189723 */}
          {/* :slug :ten prama */}
          <Route path="/movie/:slug~:id">
            <DetailMoviePage/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouteMovie);