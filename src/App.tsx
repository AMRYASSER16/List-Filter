import React, { useState } from 'react';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';
import { Movie, movies } from './movies';
import './App.scss';

const App: React.FC = () => {
	const [leftList, setLeftList] = useState<Movie[]>(movies);
	const [rightList, setRightList] = useState<Movie[]>([]);

	// add items
	const onAddItem = (movie: Movie) => {
		rightList.push(movie);
		const newLeftItems = leftList.filter((item) => item.id !== movie.id);

		setLeftList(newLeftItems);
		setRightList(rightList);
	};

	// remove items
	const onRemoveItem = (movie: Movie) => {
		leftList.push(movie);
		const newRightItems = rightList.filter((item) => item.id !== movie.id);

		setLeftList(leftList);
		setRightList(newRightItems);
	};

	// search for items
	const onSearchItems = (value: string) => {
		const filteredItem = leftList.filter(item => item.title.includes(value));

		setLeftList(filteredItem);

		if (value === '') setLeftList(movies);
		if (filteredItem.length === 0) {
			alert('no items found, please search again');
			setLeftList(movies)
		};
	};

	// mouse over fn
	const mouseOverFn = (e: any, color: string) => {
		const el = e.currentTarget;
		let l = 0;
		function updateColor(newl: number) {
			l = newl;
			el.style.backgroundColor = `${color}${20 + l * 5}`;
			if (l < 10) {
				setTimeout(() => updateColor(l + 1), 25);
			}
		}
		setTimeout(() => updateColor(l + 1), 25);
	};

	return (
		<div className="App">
			<div className='header'>
				<Header onSearchItems={onSearchItems} />
			</div>
			<div className='content'>
				{leftList.length > 0 && <div className="left-movie-container">
					{leftList.map((movie) => <Left key={movie.id} onAddItem={onAddItem} movie={movie} mouseOverFn={mouseOverFn} />)}
				</div>}
				{rightList.length > 0 && <div>
					<div className="right-movie-container">
						<h3>Added items: {rightList.length}</h3>
						<div className='items'>
							{rightList.map((movie) => <Right key={movie.id} onRemoveItem={onRemoveItem} movie={movie} mouseOverFn={mouseOverFn} />)}
						</div>
					</div>
				</div>}
			</div>
		</div>
	);
};

export default App;