import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
	const { results, isLoading, getResults, searchTerm } = useResultContext();
	const location = useLocation(); //images, news, videos, etc

	if(isLoading) return <Loading />;
	return (
		<div>
			RESULTS
		</div>
	)
};
