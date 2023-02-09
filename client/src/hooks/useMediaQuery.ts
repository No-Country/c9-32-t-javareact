import { useEffect, useState } from 'react';

// Custom hook to hide navbar and framer motion animations on desktop's screen
export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => {
			setMatches(media.matches);
		};
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [matches, query]);

	return matches;
}
