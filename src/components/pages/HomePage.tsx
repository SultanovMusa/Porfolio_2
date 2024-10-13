// import AboutMe from "./aboutSection/AboutMe";

import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import Welcom from "./homeSection/Welcom";

const HomePage = () => {
	return (
		<div className="container">
			<AnimatedBackground/>
			<Welcom  />
			{/* <AboutMe/> */}
		</div>
	);
};

export default HomePage;
