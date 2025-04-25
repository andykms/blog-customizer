/*import type { Meta, StoryObj } from '@storybook/react';

import { Params } from './Params';
import { createElement, useState } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
const meta: Meta<typeof Params> = {
	component: Params,
};

export default meta;
type Story = StoryObj<typeof Params>;

export const ParamsStory: Story = {
	render: () =>
		createElement(() => {
			const [currFont, setFont] = useState<OptionType>(defaultArticleState.fontFamilyOption);
				const [currFontSize, setFontSize] = useState<OptionType>(defaultArticleState.fontSizeOption);
				const [currColor, setColor] = useState<OptionType>(defaultArticleState.fontColor);
				const [currBackground, setBackground] = useState<OptionType>(defaultArticleState.backgroundColor);
				const [currWidth, setWidth] = useState<OptionType>(defaultArticleState.contentWidth);
			
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
			return (
        <div style={{height: 'auto'}}>
          <ArticleParamsForm isOpenInStart={false} changeEvents={{
				onChangeFontFamily: onChangeFont,
				onChangeFontSize: onChangeFontSize,
				onChangeColor: onChangeColor,
				onChangeBackground: onChangeBackground,
				onChangeWidth: onChangeWidth,
			}}>
			</ArticleParamsForm>
        </div>);
		}),
};
*/
