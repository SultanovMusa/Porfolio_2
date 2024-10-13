"use client";

import Image from "next/image";
import { FC } from "react";
// import Snowfall from "react-snowfall";
import foto from "@/components/asset/fotoAvatar.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import styles from "./Welcom.module.scss";

const Welcom: FC = () => {
	return (
		<div>
			{/* <Snowfall /> */}
			{/* Section _ 1*/}
			<section id="home" className={styles.section_1}>
				<div className={styles.card_1}>
					<div className={styles.box}>
						<h1>Dive Into The Depths</h1>
						<h2>Of Virtual Reality</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
							Lectus mauris eros in vitae .
						</p>
						<div className={styles.btn}>
							<button>BUILD YOUR WORLD</button>
							<HiArrowSmallRight className={styles.icon} />
						</div>
					</div>
					<Image src={foto} alt="photo" width={490} height={426} />
				</div>
				<div className={styles.card_2}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={styles.card_3}>
					<div></div>
					<div></div>
				</div>
			</section>
		</div>
	);
};

export default Welcom;
