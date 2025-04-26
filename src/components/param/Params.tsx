import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';

type ChangeCallback = (selected: OptionType) => void;

export interface uiParamProps {
	onChange: ChangeCallback;
	selected: OptionType;
}

interface paramsProps {
	fontProps: uiParamProps;
	fontSizeProps: uiParamProps;
	fontColorProps: uiParamProps;
	backgroundProps: uiParamProps;
	widthProps: uiParamProps;
}

export const Params = (props: paramsProps) => {
	const {
		fontProps,
		fontSizeProps,
		fontColorProps,
		backgroundProps,
		widthProps,
	} = props;

	const FontParam = (
		<Select
			selected={fontProps.selected}
			options={fontFamilyOptions}
			placeholder={fontProps.selected.title}
			title={'ШРИФТ'}
			onChange={fontProps.onChange}></Select>
	);

	const FontSizeParam = (
		<RadioGroup
			name={'fontSize'}
			title={'РАЗМЕР ШРИФТА'}
			options={fontSizeOptions}
			selected={fontSizeProps.selected}
			onChange={fontSizeProps.onChange}></RadioGroup>
	);

	const FontColorParam = (
		<Select
			selected={fontColorProps.selected}
			options={fontColors}
			placeholder={fontColorProps.selected.title}
			title={'ЦВЕТ ШРИФТА'}
			onChange={fontColorProps.onChange}></Select>
	);

	const SeparatorAfterFont = <Separator></Separator>;

	const BackgroundColorParam = (
		<Select
			selected={backgroundProps.selected}
			options={backgroundColors}
			placeholder={backgroundProps.selected.title}
			onChange={backgroundProps.onChange}
			title={'ЦВЕТ ФОНА'}></Select>
	);

	const WidthParam = (
		<Select
			selected={widthProps.selected}
			options={contentWidthArr}
			placeholder={widthProps.selected.title}
			onChange={widthProps.onChange}
			title='ШИРИНА КОНТЕНТА'></Select>
	);

	return (
		<>
			{FontParam}
			{FontSizeParam}
			{FontColorParam}
			{SeparatorAfterFont}
			{BackgroundColorParam}
			{WidthParam}
		</>
	);
};
