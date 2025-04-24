import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, ReactNode } from 'react';
import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	children: ReactNode;
}

export const ArticleParamsForm = ({ children }: ArticleParamsFormProps) => {
	const [isOpen, setOpen] = useState(false);

	const onClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside className={styles.container}>
				<form className={styles.form}>
					{children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
