import { Control, FieldValues, UseFormClearErrors } from 'react-hook-form';
import { TextStyle } from 'react-native';
import { TextInputProps } from 'react-native-paper';

export { default as ControlledInputs } from './Inputs/ControlledInputs';

export interface IControlledInputs {
    fieldName: string;
    fieldLabel?: string;
    placeHolder?: string;
    control?: Control<FieldValues>;
    validateField?: (value: any) => boolean | string;
    required?: boolean;
    onBlurText?: (value: any) => string | number;
    onChangeText?: (value: any) => string | number;
    isLeft?: boolean;
    isLeftIcon?: string;
    isRight?: boolean;
    isPassword?: boolean;
    isMessage?: boolean;
    isDisabled?: boolean;
    isEditable?: boolean;
    isPaste?: boolean;
    maxLength?: number;
    keyboardType?: TextInputProps['keyboardType'];
    returnKeyType?: TextInputProps['returnKeyType']; 
    clearErrors?: UseFormClearErrors<FieldValues>;
    onSearchPress?: () => void;
}

export { DefaultErrorPage } from './UI/DefaultErrorPage';

export { default as DefaultText } from './UI/DefaultText';

export interface IDefaultText { 
    children?: React.ReactNode,
    style?: TextStyle
}
