import type { Meta, StoryObj } from '@storybook/react';

import { Params } from './Params';
import { createElement, useState } from 'react';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { IStyleOptions } from 'src/index';
const meta: Meta<typeof Params> = {
	component: Params,
};

export default meta;
type Story = StoryObj<typeof Params>;

export const ParamsStory: Story = {
	render: () =>
		createElement(() => {
			const setFont = useState<OptionType>(
				defaultArticleState.fontFamilyOption
			)[1];
			const setFontSize = useState<OptionType>(
				defaultArticleState.fontSizeOption
			)[1];
			const setColor = useState<OptionType>(defaultArticleState.fontColor)[1];
			const setBackground = useState<OptionType>(
				defaultArticleState.backgroundColor
			)[1];
			const setWidth = useState<OptionType>(
				defaultArticleState.contentWidth
			)[1];

			const onChangeStyles = (options: IStyleOptions) => {
				setFont(options.fontFamily);
				setFontSize(options.fontSize), setColor(options.Color);
				setBackground(options.Background);
				setWidth(options.width);
			};
			return (
				<div style={{ height: 'auto' }}>
					<ArticleParamsForm
						isOpenInStart={false}
						onSubmitOptions={onChangeStyles}></ArticleParamsForm>
				</div>
			);
		}),
};
