import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, MouseEvent, useEffect, useRef } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import { Params, uiParamProps } from '../param/Params';

interface ArticleParamsFormProps {
	isOpenInStart: boolean;
	onSubmitOptions: (options: IArticleOptions) => void;
}

interface IArticleOptions {
	fontFamily: OptionType;
	fontSize: OptionType;
	Color: OptionType;
	Background: OptionType;
	width: OptionType;
}

const changeFormFunction = (setter: (selected: OptionType) => void) => {
	return (selected: OptionType) => {
		setter(selected);
	};
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { isOpenInStart, onSubmitOptions } = props;

	const asideRef = useRef<HTMLDivElement>(null);

	const [isOpen, setOpen] = useState(isOpenInStart);

	const onClick = (event: MouseEvent<HTMLElement>) => {
		if (!asideRef.current?.contains(event.target as HTMLElement)) {
			setOpen((prev) => !prev);
		}
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('mousedown', onClick as unknown as EventListener);
			console.log('Add');
		}
		return () => {
			window.removeEventListener(
				'mousedown',
				onClick as unknown as EventListener
			);
			console.log('Remove');
		};
	}, [isOpen]);

	const [articleFont, setArticleFont] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [articleSize, setArticleFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [articleColor, setArticleColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [articleBackground, setArticleBackground] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [articleWidth, setArticleWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const fontFamilyParamProps: uiParamProps = {
		onChange: changeFormFunction(setArticleFont),
		selected: articleFont,
	};

	const fontSizeParamProps: uiParamProps = {
		onChange: changeFormFunction(setArticleFontSize),
		selected: articleSize,
	};

	const fontColorParamProps: uiParamProps = {
		onChange: changeFormFunction(setArticleColor),
		selected: articleColor,
	};

	const backgroundParamProps: uiParamProps = {
		onChange: changeFormFunction(setArticleBackground),
		selected: articleBackground,
	};

	const widthParamProps: uiParamProps = {
		onChange: changeFormFunction(setArticleWidth),
		selected: articleWidth,
	};

	const onClickSubmit = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		submitOptions({
			fontFamily: articleFont,
			fontSize: articleSize,
			Color: articleColor,
			Background: articleBackground,
			width: articleWidth,
		});
	};

	const submitOptions = (options: IArticleOptions) => {
		onSubmitOptions(options);
	};

	const resetArticleOptions = () => {
		setArticleFont(defaultArticleState.fontFamilyOption);
		setArticleFontSize(defaultArticleState.fontSizeOption);
		setArticleColor(defaultArticleState.fontColor);
		setArticleBackground(defaultArticleState.backgroundColor);
		setArticleWidth(defaultArticleState.contentWidth);
	};

	const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		resetArticleOptions();
		submitOptions({
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			Color: defaultArticleState.fontColor,
			Background: defaultArticleState.backgroundColor,
			width: defaultArticleState.contentWidth,
		});
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside
				className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
				ref={asideRef}>
				<form className={styles.form}>
					<Params
						fontProps={fontFamilyParamProps}
						fontSizeProps={fontSizeParamProps}
						fontColorProps={fontColorParamProps}
						backgroundProps={backgroundParamProps}
						widthProps={widthParamProps}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onClickReset}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={onClickSubmit}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
