"use client";

import { FC, useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

interface LayouPagestProps {
	children: React.ReactNode;
}

const LayouPagest: FC<LayouPagestProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const time = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(time);
	}, []);

	return (
		<div className={scss.layout}>
			{loading ? (
				<div className={scss.loader} />
			) : (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</div>
	);
};

export default LayouPagest;
