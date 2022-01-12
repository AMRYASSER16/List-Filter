import React from 'react';
import { Movie } from '../movies';
import { differenceInDays, fromUnixTime } from 'date-fns';

type Props = {
	movie: Movie;
	onAddItem: (movie: Movie) => void;
	mouseOverFn: (e: any, color: string) => void
};

const Left: React.FC<Props> = ({ movie, onAddItem, mouseOverFn }) => {
	const { title, release_date } = movie;

	return (
		<div className="movie movie-style"
			onMouseOver={(e) => mouseOverFn(e, '#64c864')}
			onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#64c86420')}
		>
			<div className="movie-title">{title}</div>
			<div>Release date: {differenceInDays(new Date(), fromUnixTime(release_date))} days ago</div>
			<button className="add-button" onClick={() => onAddItem(movie)}>
				Add
			</button>
		</div>
	);
};

export default Left;