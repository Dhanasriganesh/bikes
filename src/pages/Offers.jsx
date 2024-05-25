import React from 'react';
import '../styles/offers.css'; // Import the CSS file for styling

const offersList = [
  "Exchange bonus - Rs.3,000/-",
  "Low downpayment for scooties- Rs.9,999/- ",
  "For all petrol vehicles below 125 cc - Rs.9,999/-",
  "Tank full petrol",
  "Body cover",
  "Helmet",
  "Low rate of interest",
  "For every one referral - Rs.1,000/- bonus"
];

const Offers = () => {
  return (
    <div className="offers-container">
      <h2>Best Offers</h2>
      <ul className="offers-list">
        {offersList.map((offer, index) => (
          <li key={index} className="offer-item">{offer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Offers;
