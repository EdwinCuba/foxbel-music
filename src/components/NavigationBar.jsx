import React from "react";
import FoxbelIcon from "../assets/static/foxbel-music.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/NavigationBar.scss';

const NavigationBar = () => {
	return (
		<div className="navigation-bar">
			<div className="navigation-bar__header">
				<img src={FoxbelIcon} />
				<FontAwesomeIcon id="close-nav" icon={faTimes} />
			</div>

			<div className="navigation">
				<div className="navigation__item">
					<span>Mi Librería</span>

					<ul>
						<li>
							<a href="#">Recientes</a>
						</li>
						<li>
							<a href="#">Artistas</a>
						</li>
						<li>
							<a href="#">Álbums</a>
						</li>
						<li>
							<a href="#">Canciones</a>
						</li>
						<li>
							<a href="#">Estaciones</a>
						</li>
					</ul>
				</div>

				<div className="navigation__item">
					<span>Playlist</span>

					<ul>
						<li>
							<a href="#">Metal</a>
						</li>
						<li>
							<a href="#">Para bailar</a>
						</li>
						<li>
							<a href="#">Rock 90s</a>
						</li>
						<li>
							<a href="#">Baladas</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
