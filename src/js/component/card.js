import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">
						La superficie del planeta: {props.nombre} es {props.superficie} kms.
					</p>
					<a href="#" className="btn btn-primary">
						Conocer más
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	superficie: PropTypes.number
};

export default Card;
