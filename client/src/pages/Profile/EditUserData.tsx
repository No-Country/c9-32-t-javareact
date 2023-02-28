import { useGlobalData } from '@context/GlobalContext';

function EditUserDate() {
	const { userData } = useGlobalData();

	return (
		<div className="w-1/2 ">
			<h3 className="heading3 mb-12">Perfil</h3>

			<p className="text-gray-600 text-lg mb-3">
				<strong className="capitalize mr-2 text-black text-lg">
					Nombre:{' '}
				</strong>
				{userData?.name}
			</p>
			<p className="text-gray-600 text-lg mb-3">
				<strong className="capitalize mr-2 text-black text-lg">
					Correo:{' '}
				</strong>
				{userData?.email}
			</p>
			<p className="text-gray-600 text-lg mb-3">
				<strong className="capitalize mr-2 text-black text-lg">
					Telefono:
				</strong>
				{userData?.phoneNumber}
			</p>
			{/* {userData &&
				Object.entries(userData).map(([entry, key]) => (
					<p key={entry} className="text-gray-800 mb-3">
						<strong className="capitalize mr-2 text-black">
							{entry}
						</strong>
						- {key}
					</p>
				))} */}
		</div>
	);
}

export default EditUserDate;
