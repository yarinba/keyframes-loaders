import React, { useState } from 'react';

import Loader1 from '../LoadersComponents/Loader1';
import Loader2 from '../LoadersComponents/Loader2';
import Loader3 from '../LoadersComponents/Loader3';
import Loader4 from '../LoadersComponents/Loader4';
import Loader5 from '../LoadersComponents/Loader5';
import Loader6 from '../LoadersComponents/Loader6';
import Loader7 from '../LoadersComponents/Loader7';
import Button from '../AtomsComponents/Button';

import './index.scss';
import Loader8 from '../LoadersComponents/Loader8';

const loaders = [
	{
		title: 'Loader 1',
		component: <Loader1 />,
	},
	{
		title: 'Loader 2',
		component: <Loader2 />,
	},
	{
		title: 'Loader 3',
		component: <Loader3 />,
	},
	{
		title: 'Loader 4',
		component: <Loader4 />,
	},
	{
		title: 'Loader 5',
		component: <Loader5 />,
	},
	{
		title: 'Loader 6',
		component: <Loader6 />,
	},
	{
		title: 'Loader 7',
		component: <Loader7 />,
	},
	{
		title: 'Loader 8',
		component: <Loader8 />,
	},
];

const HomePage = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [displayedLoderIndex, setDisplayedLoaderIndex] = useState(null);

	const handleClick = (index) => {
		setIsClicked(true);
		setDisplayedLoaderIndex(index);
	};

	return (
		<div className="homepage-wrapper">
			<div className="btns-container">
				{loaders.map((loader, index) => (
					<Button key={index} title={loader.title} onClick={() => handleClick(index)} />
				))}
			</div>
			<div className="loader-container">{isClicked && loaders[displayedLoderIndex].component}</div>
		</div>
	);
};

export default HomePage;
