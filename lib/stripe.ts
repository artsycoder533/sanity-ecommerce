import Stripe from 'stripe'

if(!process.env.STRIPE_SECRET_KEY){
  throw new Error("STRIPE_SECRET_KEY is not set");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
})

export default stripe;


//server actions arent completely safe? you should be using a helper function by nextjs instead??
//it prevents your server variable from being exposed???