import Button from '@/components/shared/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function CheckPayment() {
	return (
		<div className="  border-dotted border-royalBlue rounded p-32 text-center">
			<i className="material-icons-outlined text-[300px]  text-green-600 ">
				check_circle
			</i>
			<p className="text-4xl mb-8">Su compra se ha realizado con exito</p>
			<Button
				element={Link}
				to="/orders"
				variant="outlined"
				classes="mt-5"
			>
				Ver Servicios agendados
			</Button>
		</div>
	);
}

export default CheckPayment;
