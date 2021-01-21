import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import MovieCard from '../Common/MovieCard';
import Sidebar from './Sidebar/Index';
import { fetchDiscoverMovieList } from '../../redux/actions';
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner';
import DataNotFound from '../Common/DataNotFound';
import DisplayPagination from './Pagination/DisplayPagination';
import NoMovies from '../Common/NoMovies';

const Home = (props) => {
	useEffect(() => {
		props.fetchDiscoverMovieList('popular', 1);
	}, []);
	const renderMovieList = ({ movieList, isLoadingMovieList }) => {
		if (movieList) {
			if (movieList.length > 0) {
				return movieList.map((movie, idx) => {
					return (
						<MovieCard
							data={movie}
							key={idx}
							height_s="250px"
							show_wishlist={true}
						/>
					);
				});
			} else {
				return <NoMovies />;
			}
		} else if (isLoadingMovieList) {
			return <LoadingSpinner />;
		} else {
			return <DataNotFound />;
		}
	};
	const renderPagination = ({ movieList, isLoadingMovieList }) => {
		if (movieList && !isLoadingMovieList) {
			if (movieList.length > 0) {
				return <DisplayPagination />;
			} else {
				return <></>;
			}
		} else {
			return <></>;
		}
	};

	return (
		<div className="container-fluid mt-4">
			<div className="row">
				<Fade left>
					<div className="col-md-2 col-12" id="accordion">
						<Sidebar />
					</div>
				</Fade>
				<div className="col-md-10 col-12 container d-flex flex-row flex-wrap justify-content-start">
					{renderMovieList(props)}
				</div>
				<div className="col-md-12 d-flex flex-row justify-content-center mt-1">
					{renderPagination(props)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movieList: state.HomeMovie.movieList,
		isLoadingMovieList: state.HomeMovie.isLoadingMovieList,
	};
};

export default connect(mapStateToProps, { fetchDiscoverMovieList })(Home);
