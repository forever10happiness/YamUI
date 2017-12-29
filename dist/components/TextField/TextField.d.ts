/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './TextField.css';
export interface TextFieldProps extends BaseComponentProps {
    /**
     * Current value of the textfield.
    */
    value?: string;
    /**
     * Placeholder text. Displayed until a value is entered.
    **/
    placeHolder?: string;
    /**
     * Error message string.
     */
    errorMessage?: string;
    /**
     * Disabled state of the textfield.
    */
    disabled?: boolean;
    /**
     * Label for the textfield.
    */
    label?: string;
    /**
     * The textfield input description
     */
    description?: string;
    /**
     * String for prefix.
    */
    prefix?: string;
    /**
     * String for suffix.
    */
    suffix?: string;
    /**
     * Use to indicate that a value must be provided to allow the containing form to be submitted.
    */
    required?: boolean;
    /**
     * Whether or not the textfield is underlined.
    **/
    underlined?: boolean;
    /**
     * Callback for the onChanged event.
     */
    onChange?: (newValue: any) => void;
    /**
     * Textfield will trigger `onChange` after users stop typing for `onChangeDebounceTime`
     * milliseconds.
     */
    onChangeDebounceTime?: number;
    /**
     * Focus callback handler.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Blur callback handler.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Mouse enter callback handler.
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Mouse leave callback handler.
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
/**
 * The TextField component enables a user to type text into an app. It's typically used to capture
 * a single line of text, but can be configured to capture multiple lines of text. The text
 * displays on the screen in a simple, uniform format.
 */
export default class TextField extends React.PureComponent<TextFieldProps, {}> {
    private async;
    private debouncedOnChange;
    constructor(props: TextFieldProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
    private getClasses();
}
