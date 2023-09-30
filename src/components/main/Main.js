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
              <p className="price">$12.99</p>
            </div>
            <h4 className="itemTitle">Greek salad</h4>
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
              <p className="price">$ 5.99</p>
            </div>
            <h4 className="itemTitle">Bruchetta</h4>
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
              <p className="price">$ 5.00</p>
            </div>
            <h4 className="itemTitle">Lemon Dessert</h4>
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
      <section className="testimonials">
        <h1 className="testHeader">Testimonials</h1>
        <div className="reviewContainer">
          <div className="reviewCards">
            <div className="cardTop">
              <span class="material-symbols-outlined ratingIcon">grade</span>
              <h5 className="rating">4.5/5</h5>
            </div>
            <div className="reviewer">
              <img src="" alt="" className="reviewImg" />
              <h5 className="reviewerName">Name</h5>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              deleniti vero labore. Aspernatur, suscipit esse dolores eligendi
              sunt aliquid Doloremque, amet corporis!
            </p>
          </div>
          <div className="reviewCards">
            <div className="cardTop">
              <span class="material-symbols-outlined ratingIcon">grade</span>
              <h5 className="rating">3.2/5</h5>
            </div>
            <div className="reviewer">
              <img src="" alt="" className="reviewImg" />
              <h5 className="reviewerName">Name</h5>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque nam ipsam non voluptas porro possimus . Eligendi
              numquam aperiam facere et.
            </p>
          </div>
          <div className="reviewCards">
            <div className="cardTop">
              <span class="material-symbols-outlined ratingIcon">grade</span>
              <h5 className="rating">5/5</h5>
            </div>
            <div className="reviewer">
              <img src="" alt="" className="reviewImg" />
              <h5 className="reviewerName">Name</h5>
            </div>
            <p className="reviewText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quibusdam exercitationem atque eligendi. Harum, amet
              ab.
            </p>
          </div>
          <div className="reviewCards">
            <div className="cardTop">
              <span class="material-symbols-outlined ratingIcon">grade</span>
              <h5 className="rating">4.3/5</h5>
            </div>
            <div className="reviewer">
              <img src="" alt="" className="reviewImg" />
              <h5 className="reviewerName">Name</h5>
            </div>
            <p className="reviewText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              quas sint. Veritatis adipisci nam accusamus velit accusantium.
            </p>
          </div>
        </div>
      </section>
      <section className="lowerHeader">
        <div className="lowerLeft">
          <h1 className="lowerHead">Little Lemon</h1>
          <h3 className="lowerLocation">Chicago</h3>
          <p className="lowerInfo">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="lowerRight">
          <img src="" alt="" className="bottomImg" />
          <img src="" alt="" className="topImg" />
        </div>
      </section>
    </main>
  );
}
