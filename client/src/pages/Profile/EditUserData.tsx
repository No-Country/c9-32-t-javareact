import { useGlobalData } from '@context/GlobalContext';

function EditUserDate() {
	const { userData } = useGlobalData();

	return (
		<div className="w-1/2">
			{userData &&
				Object.entries(userData).map(([entry, key]) => (
					<p key={entry} className="text-gray-800 mb-3">
						<strong className="capitalize mr-2 text-black">
							{entry}
						</strong>
						- {key}
					</p>
				))}
		</div>
	);
}

export default EditUserDate;
