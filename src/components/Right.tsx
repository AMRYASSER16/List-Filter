import React from 'react';
import { Movie } from '../movies';
import { differenceInDays, fromUnixTime } from 'date-fns';

type Props = {
    movie: Movie;
    onRemoveItem: (movie: Movie) => void;
    mouseOverFn: (e: any, color: string) => void
};

const Right: React.FC<Props> = ({ movie, onRemoveItem, mouseOverFn }) => {
    const { title, release_date } = movie;

    return (
        <div className="movie movie-style"
            onMouseOver={(e) => mouseOverFn(e, '#c86464')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8646420')}
        >
            <div className="movie-title">{title}</div>
            <div>Release date: {differenceInDays(new Date(), fromUnixTime(release_date))} days ago</div>
            <button className="remove-button" onClick={() => onRemoveItem(movie)}>
                Remove
			</button>
        </div>
    );
};

export default Right;