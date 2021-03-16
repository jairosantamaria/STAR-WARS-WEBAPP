import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";

export const Home = () => {
	let planets = [
		{ nombre: "Marte", superficie: 1000 },
		{ nombre: "Neptuno", superficie: 1500 },
		{ nombre: "Tierra", superficie: 5000 }
	];

	return (
		<div className="text-center mt-5">
			<div className="row">
				{planets.map((item, index) => {
					return (
						<div key={index} className="col">
							<Card key={index} nombre={item.nombre} superficie={item.superficie} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
