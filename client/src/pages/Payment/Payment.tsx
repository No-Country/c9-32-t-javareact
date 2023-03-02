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
			<div className="flex gap-2">
				<input className="w-8" type="checkbox" name="" id="" />
				<p className="text-xs">
					Guarda mi información de pago para que sea más facil hacer
					la compra la próxima vez
				</p>
			</div>

			<Button
				element={Link}
				classes="w-full flex justify-between items-center "
				to="/checkout"
				type="submit"
			>
				<span>Confirmar compra</span>
				<span className=" ml-2 flex items-center">
					$16.000
					<i className="material-icons text-2xl  text-white ml-2">
						chevron_right
					</i>
				</span>
			</Button>
		</div>
	);
};
export default Payment;
