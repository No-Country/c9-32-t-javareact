import BillingInformation from '@/components/layout/Payment/BillingInformation';
import PayMethod from '@/components/layout/Payment/PayMethod';
import PurchaseDetail from '@/components/layout/Payment/PurchaseDetail';
import Summary from '@/components/layout/Payment/Summary';

const Payment = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center gap-5 mt-10 mb-10 '>
			<Summary />
      <PurchaseDetail/> 
      <PayMethod/>
      <BillingInformation/>
		</div>
	);
};
export default Payment;
