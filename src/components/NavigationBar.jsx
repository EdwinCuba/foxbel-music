import React from "react";
import FoxbelIcon from "../assets/static/foxbel-music.png";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <img src={FoxbelIcon} />

      <div className="navigation">
				<div className="navigation__item">
					<span>Mi Librería</span>
					<ul>
						<li>Recientes</li>
						<li>Artistas</li>
						<li>Álbums</li>
						<li>Canciones</li>
						<li>Estaciones</li>
					</ul>
				</div>

				<div className="navigation__item">
					<span>Playlist</span>
					<ul>
						<li>Metal</li>
						<li>Para bailar</li>
						<li>Rock 90s</li>
						<li>Baladas</li>
					</ul>
				</div>
			</div>
    </div>
  );
};

export default NavigationBar;
