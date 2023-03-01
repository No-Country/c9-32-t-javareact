import { ArrowRight } from '@/components/icons';
import BillingInformation from '@/components/layout/Payment/BillingInformation';
import PayMethod from '@/components/layout/Payment/PayMethod';
import PurchaseDetail from '@/components/layout/Payment/PurchaseDetail';
import Summary from '@/components/layout/Payment/Summary';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';

const Payment = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-5 mt-10 mb-10 ">
			<Summary />
			<PurchaseDetail />
			<PayMethod />
			<BillingInformation />
			<div className='flex gap-2'>
				<input className='w-8' type="checkbox" name="" id="" />
				<p className='text-xs'>
					Guarda mi información de pago para que sea más facil hacer
					la compra la próxima vez
				</p>
			</div>

			<Button
				element={Link}
				classes="w-full"
				to="/checkout"
				type="submit"
			>
				<div className='w-full justify-start items-center flex gap-5 pb-1'>
			 <span>Confirmar compra</span>	
				<span className=" ml-2">$16.000 </span>
				<ArrowRight />
				</div>
			
				
			</Button>
		</div>
	);
};
export default Payment;
