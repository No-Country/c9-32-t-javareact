import { getUserSchedule } from '@/api/service-schedule';
import { useGlobalData } from '@/context/GlobalContext';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Orders() {
	const { userData } = useGlobalData();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				if (userData?.id) {
					const response = await getUserSchedule(userData?.id);
					console.log(response);
					setOrders(response.data);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [userData]);
	return (
		<section>
			<h3 className="heading3 my-6">Mis Pedidos</h3>
			<div className="flex flex-col gap-3">
				{orders.map((order: any) => (
					<OrderCard order={order} key={order.id} />
				))}
			</div>
		</section>
	);
}

function OrderCard({ order }: any) {
	const { id, programDate, direction, status, typeId } = order;
	const { servTypes } = useGlobalData();
	const service: any = servTypes.find((serv: any) => serv.id == typeId);
	return (
		<div className="p-2  border-royalBlue border-dashed border-[1px] rounded-lg  flex flex-col gap-2 bg-white">
			<div className="flex flex-wrap justify-between items-center  gap-4">
				<span className="flex-grow text-sm font-semibold">
					Servicio de {service?.type || 'Limpieza'}
					<span className="ml-2 bg-yellow-500 text-white text-xs p-1 rounded-full">
						{status}
					</span>
				</span>
				<span className="text-gray-500 text-xs">
					{moment(programDate).format('LL')}
				</span>
			</div>

			<div className="h-full ">
				<p className=" text-sm">{direction}</p>
			</div>
		</div>
	);
}

export default Orders;
