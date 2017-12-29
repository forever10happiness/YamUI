/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './LayoutList.css';
export interface BaseLayoutListProps extends NestableBaseComponentProps {
    /**
     * Horizontal or vertical alignment of items.
     */
    direction: 'horizontal' | 'vertical';
}
export interface HorizontalListProps extends BaseLayoutListProps {
    /**
     * Align the horizontal list items to the left or right of the list's container.
     * @default 'left'
     */
    align?: 'left' | 'right';
    direction: 'horizontal';
}
export declare type LayoutListProps = BaseLayoutListProps | HorizontalListProps;
/**
 * A `LayoutList` displays a list of items either horizontally or vertical. Horizontal list items
 * are evenly spaced with a fixed margin of 4px, and can be aligned to the right or left. Vertical
 * list items do not have any margin.
 */
export default class LayoutList extends React.Component<LayoutListProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
