import React from "react";

const Proposition = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <h2>A whole world of freelance talent at your fingertips</h2>
        <ul>
          <li>
            <h5>The best for every budget</h5>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>
          <li>
            <h5>Quality work done quickly</h5>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </li>
          <li>
            <h5>Protected payments, every time</h5>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </li>
          <li>
            <h5>24/7 support</h5>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-1/2">
        <img className="w-full" src="https://picsum.photos/500" alt="" />
      </div>
    </div>
  );
};

export default Proposition;
