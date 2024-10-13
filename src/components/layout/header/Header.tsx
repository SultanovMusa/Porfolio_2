import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/components/asset/logo.png";
// import Link from "next/link";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.logo}>
						<Image src={logo} alt="photo" width={80} height={80} />
						<h1>MUFA</h1>
					</div>
					<nav>
						<ul>
							<li>ABOUT</li>
							<li> SERVICES</li>
							<li>TECHNOLOGIES</li>
							<li>HOW TO</li>
						</ul>
					</nav>
					<div className={styles.buttons}>
						<button className={styles.btn_1}>CONTACT US</button>
						<button className={styles.btn_2}>JOIN HYDRA</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
