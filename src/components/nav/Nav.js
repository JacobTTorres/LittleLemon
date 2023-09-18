import React from 'react';

import Logo from '../../icons_assets/Logo.svg';

export default function Nav() {
	return (
		<nav>
			<img src={Logo} alt="Little Lemon img" />
			<ul className="navLinks">
				<li className="links"></li>
				<li className="links"></li>
				<li className="links"></li>
				<li className="links"></li>
				<li className="links"></li>
				<li className="links"></li>
			</ul>
		</nav>
	);
}
