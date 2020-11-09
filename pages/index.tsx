import { Home } from '../components/Home';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export default function Index() {
  // Initializes Stripe's Elements provider to use Element components and access 
  // the Stripe object
  const stripePromise = loadStripe('pk_test_51HlSfSB4q9CvoSIpSELHpJQK9VDEzwtSnL1f08hHflsrHYmcRENkUPJU9mMJZ01YwRAhS1GwwHUJP1HWVZv6HiNM00JeOBOMox');
  return (
    <Elements stripe={stripePromise}>
      <Home />
    </Elements>
  )
}
