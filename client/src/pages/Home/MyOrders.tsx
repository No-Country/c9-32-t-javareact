import React from 'react';

function MyOrders() {
	return (
		<section className="my-12 " id="orders">
			<h3 className="heading3 ">Mis Pedidos</h3>
			<div className="mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
					<OrderCard />
					<OrderCard />
					<OrderCard />
					<OrderCard />
				</div>
			</div>
		</section>
	);
}

function OrderCard({ order }: any) {
	return (
		<div className="p-5  border-royalBlue border-dashed border-[1px] rounded-2xl  flex flex-col gap-4 bg-white">
			<div className="flex flex-wrap justify-between items-center  gap-4">
				<span className="flex-grow text-sm">Hogar</span>
				<span className="text-gray-500 text-xs">
					11 de Diciembre 2022
				</span>
			</div>

			<div className="h-full ">
				<p className=" text-sm">
					132 Joe St Apt 3 Stockton CA 20500, USA
				</p>

				<span className="inline-block h-1 w-full rounded bg-yellow-500  " />
				<p className=" text-xs">Status: Pendiente</p>
			</div>
		</div>
	);
}

export default MyOrders;
