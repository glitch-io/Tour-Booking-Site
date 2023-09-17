/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51NrI81SCU6ymzj4oubSGSL48Uvqp2d6IcMaUfFhBAbUfz8PB3JZvuJ5PMQYpROxk6hdY0nvuOSkyFJRy51pp3YsH00DLYKnoi0'
);

export const bookTour = async tourId => {
  //1. Get checkout session from API
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
