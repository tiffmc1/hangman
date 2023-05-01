import React from "react";
import "../app.css";

const Images = ({ chancesImg }) => {
	return (
		<div className="hangman-img-wrapper">
			<div className="hangman-img">
				{chancesImg ? (
					<img
						src={require(`../assets/images/hangman-${chancesImg}.png`).default}
						alt=""
						height={350}
						width={250}
					/>
				) : (
					<img
						src={require("../assets/images/hangman0.png").default}
						alt=""
						height={350}
						width={250}
					/>
				)}
			</div>
		</div>
	);
};

export default Images;
