import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

interface IStyleOptions {
	fontFamily: OptionType;
	fontSize: OptionType;
	Color: OptionType;
	Background: OptionType;
	width: OptionType;
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currFont, setFont] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [currFontSize, setFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [currColor, setColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [currBackground, setBackground] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [currWidth, setWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	/*
	const onChangeFont = (selected: OptionType) => {
		setFont(selected);
	}

	const onChangeFontSize = (selected: OptionType) => {
		setFontSize(selected);
	}

	const onChangeColor = (selected: OptionType) => {
		setColor(selected);
	}

	const onChangeBackground = (selected: OptionType) => {
		setBackground(selected);
	}

	const onChangeWidth = (selected: OptionType) => {
		setWidth(selected);
	}
*/
	const onChangeStyles = (options: IStyleOptions) => {
		setFont(options.fontFamily);
		setFontSize(options.fontSize), setColor(options.Color);
		setBackground(options.Background);
		setWidth(options.width);
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currFont.value,
					'--font-size': currFontSize.value,
					'--font-color': currColor.value,
					'--container-width': currWidth.value,
					'--bg-color': currBackground.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpenInStart={false}
				onSubmitOptions={onChangeStyles}></ArticleParamsForm>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
