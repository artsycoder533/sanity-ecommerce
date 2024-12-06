import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export const getMyOrders = async(userId: string) => {
  if(!userId){
    throw new Error('User ID is requried');
  }

  //get orders based on user id
  const MY_ORDERS_QUERY = defineQuery(`
      *[_type == "order" && clerkUserId == $userId] | order(orderDate desc){
        ...,
        products[]{
          ...,
          // -> gets the product the reference is referring too
          product->
        }
      }
    `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: {userId},
    });

    return orders.data || [];
  } catch (error) {
    console.error('Error fetching orders: ', error);
    throw new Error('Error fetching orders');
  }
}