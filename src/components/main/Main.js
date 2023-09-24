import React from 'react';

import './main.css';

export default function Main() {
  return (
    <main>
      <section className="specials">
        <div className="specTop">
          <h1 className="specHeader">This weeks specials!</h1>
          <button className="specBtn">Online Menu</button>
        </div>
        <div className="specBottom">
          <div className="card">
            <img src="" alt="" />
            <div className="cardTop">
              <h4 className="itemTitle">Greek salad</h4>
              <p className="price">$12.99</p>
            </div>
            <div className="cardMid">
              <p className="cardInfo">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
            <div className="cardBottom">
              <h5 className="orderDeli">Order a delivery</h5>
              <span class="material-symbols-outlined">takeout_dining</span>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="cardTop">
              <h4 className="itemTitle">Bruchetta</h4>
              <p className="price">$ 5.99</p>
            </div>
            <div className="cardMid">
              <p className="cardInfo">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </div>
            <div className="cardBottom">
              <h5 className="orderDeli">Order a delivery</h5>
              <span class="material-symbols-outlined">takeout_dining</span>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="cardTop">
              <h4 className="itemTitle">Lemon Dessert</h4>
              <p className="price">$ 5.00</p>
            </div>
            <div className="cardMid">
              <p className="cardInfo">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
            <div className="cardBottom">
              <h5 className="orderDeli">Order a delivery</h5>
              <span class="material-symbols-outlined">takeout_dining</span>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials"></section>
      <section className="underHeader"></section>
    </main>
  );
}
