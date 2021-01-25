import React, { useEffect } from 'react';
import CastData from './CastData';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import LoadingSpinner from '../../Common/LoadingSpinner';
import DataNotFound from '../../Common/DataNotFound';
import { fetchCastsList } from '../../../redux/actions';

const AllCast = ({
	movie_id,
	fetchCastsList,
	castsList,
	isLoadingCastsList,
}) => {
	useEffect(() => {
		fetchCastsList(movie_id);
	}, []);

	if (castsList) {
		var minimum = 8;
		var minimum1024 = 5;
		var minimum480 = 2;
		var minimum600 = 3;
		if (castsList.cast.length === 1) {
			minimum = castsList.cast.length;
			minimum480 = 1;
			minimum600 = 1;
			minimum1024 = 1;
		} else if (castsList.cast.length === 2) {
			minimum = 2;
			minimum1024 = 2;
			minimum600 = 2;
			minimum480 = 2;
		} else if (castsList.cast.length === 3) {
			minimum = 3;
			minimum1024 = 3;
			minimum600 = 3;
			minimum480 = 2;
		} else if (castsList.cast.length < 8) {
			minimum = castsList.cast.length;
			minimum1024 = parseInt(minimum / 2);
			minimum600 = parseInt(minimum / 2);
		}
		var settings = {
			cssEase: 'linear',
			speed: 500,
			slidesToShow: minimum,
			slidesToScroll: 2,
			arrows: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: minimum1024,
						slidesToScroll: 5,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: minimum600,
						slidesToScroll: minimum600,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: minimum480,
						slidesToScroll: minimum480,
					},
				},
			],
		};
		return (
			<div className="other_data">
				<h2 className="heading_color">Movie Cast</h2>
				<hr />
				{castsList && castsList.cast.length > 0 ? (
					<Slider {...settings}>
						{castsList &&
							castsList.cast.map((cast, idx) => {
								return <CastData data={cast} key={idx} />;
							})}
					</Slider>
				) : (
					<h1 className="text-center">
						<i>No cast information available</i>
					</h1>
				)}
			</div>
		);
	} else if (isLoadingCastsList) {
		return <LoadingSpinner />;
	} else {
		return <DataNotFound />;
	}
};

const mapStateToProps = (state) => {
	return {
		castsList: state.IndividualMovieDetail.castsList,
		isLoadingCastsList: state.IndividualMovieDetail.isLoadingCastsList,
	};
};

export default connect(mapStateToProps, { fetchCastsList })(AllCast);
