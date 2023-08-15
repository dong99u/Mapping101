import Calendar from "../Calendar/Calendar";

import styles from "./InfoBar.module.css";

function InfoBar() {
	return (
		<div className={styles.infoBar}>
			<div className={styles.infoWrapper}>
				<Calendar />

				{/* TrendScore Box */}
				<div className={styles.trendScoreBox}></div>
			</div>
		</div>
	);
}

export default InfoBar;