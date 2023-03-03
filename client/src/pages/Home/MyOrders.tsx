import { useGlobalData } from '@/context/GlobalContext';
import moment from 'moment';

import { getUserSchedule } from '@api/service-schedule';
import { useEffect, useState } from 'react';
import empty from '@assets/empty.png';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';

function MyOrders() {
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
		<section className="my-12 " id="orders">
			<div className="flex flex-row justify-between flex-wrap ">
				<h3 className="heading3 ">Mis Pedidos</h3>
				<Button element={Link} to="/orders" classes="h-fit">
					Ver Todos
				</Button>
			</div>
			<div className="mt-10">
				{orders.length === 0 && (
					<div className=" ">
						<img src={empty} alt="empty" className="mx-auto w-32" />
						<p className="text-center text-xs mt-2 text-gray-400">
							Aún no has hecho ninguna compra
						</p>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
					{orders.slice(-4).map((order: any) => (
						<OrderCard order={order} key={order.id} />
					))}
				</div>
			</div>
		</section>
	);
}

function OrderCard({ order }: any) {
	const { id, programDate, direction, status, typeId } = order;
	const { servTypes } = useGlobalData();
	const service: any = servTypes.find((serv: any) => serv.id == typeId);
	return (
		<div className="p-5  border-royalBlue border-dashed border-[1px] rounded-2xl  flex flex-col gap-4 bg-white">
			<div className="flex flex-wrap justify-between items-center  gap-4">
				<span className="flex-grow text-sm capitalize font-semibold ">
					{service?.type || 'Servicio'}
				</span>
				<span className="text-gray-500 text-xs">
					{moment(programDate).format('LL')}
				</span>
			</div>

			<div className="h-full ">
				<p className=" text-sm">{direction}</p>
			</div>
			<span className="inline-block h-2 w-full rounded bg-yellow-500  " />
			<p className=" text-xs">Status: {status}</p>
		</div>
	);
}

export default MyOrders;
