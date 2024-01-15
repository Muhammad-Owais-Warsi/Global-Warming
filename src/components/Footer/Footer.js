import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<p className={styles.credits}>
				{t('components.footer')}
				<strong>
					<a className={styles.contact} href="mailto:kamranwarsi.kw@gmail.com">
						Kamran Warsi
					</a>
					<br/>
					<a className={styles.contact} href="mailto:Chitranshu.gupta2021@vitstudent.ac.in">
						Chitranshu Gupta
					</a>
					<br/>
					<a className={styles.contact} href="mailto:kartik.baghel2021@vitstudent.ac.in">
						Kartik Bhagel
					</a>
				</strong>
			</p>
			<p className={styles.copyright}>Copyright © 2024</p>
		</footer>
	);
}
