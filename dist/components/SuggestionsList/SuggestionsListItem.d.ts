/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './SuggestionsListItem.css';
export interface SuggestionItem {
    id: string | number;
    imageUrl?: string;
    name: string;
    description?: string;
}
export interface SuggestionsListItemProps extends SuggestionItem, NestableBaseComponentProps {
    searchText: string;
    isHovered: boolean;
    isSelected: boolean;
    onHover(id: string | number): void;
    onSelect(id: string | number): void;
}
export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps, {}> {
    render(): JSX.Element;
    private onMouseDown;
    private onMouseEnter;
}
