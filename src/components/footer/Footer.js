import React from 'react';

import FooterImg from '../../icons_assets/restaurant.jpg';

export default function Footer() {
	return (
		<footer>
			Footer
			<img src={FooterImg} alt="" />
			<nav className="doormatNav">
				<ul className="footerNav">
					<li className="footerNavLink">
						<a href=""></a>
					</li>
					<li className="footerNavLink">
						<a href=""></a>
					</li>
					<li className="footerNavLink">
						<a href=""></a>
					</li>
					<li className="footerNavLink">
						<a href=""></a>
					</li>
					<li className="footerNavLink">
						<a href=""></a>
					</li>
					<li className="footerNavLink">
						<a href=""></a>
					</li>
				</ul>
			</nav>
			<div className="contact">
				<p className="address"></p>
				<p className="phoneNumber"></p>
				<p className="email"></p>
			</div>
		</footer>
	);
}
