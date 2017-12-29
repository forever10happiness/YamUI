/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { SuggestionItem } from './SuggestionsListItem';
import './SuggestionsList.css';
import { IPoint } from 'office-ui-fabric-react/lib/utilities/positioning';
export interface SuggestionsListProps extends NestableBaseComponentProps {
    /**
     * The target that the Callout should try to position itself based on.
     */
    target: HTMLElement | IPoint;
    /**
     * The active search that produced the current state.
     */
    searchText: string;
    /**
     * Text to show next to the loading spinner.
     */
    loadingText: string;
    /**
     * Text to show when the results are empty for the active search.
     */
    noResultsText: string;
    /**
     * Flag to indicate that a search is in flight
     * @default false
     */
    isLoading?: boolean;
    /**
     * The groups of items to render.
     */
    groupedItems?: SuggestionItemGroupProps[];
    /**
     * The index of current keyboard selection.
     */
    selectedId?: string | number;
    /**
     * Called when an item in a group is selected by clicking.
     */
    onItemSelected(id: string | number): void;
}
export interface SuggestionItemGroupProps {
    title: string;
    items: SuggestionItem[];
}
export interface SuggestionsListState {
    hoveredId: string | number | null;
}
/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
export default class SuggestionsList extends React.PureComponent<SuggestionsListProps, SuggestionsListState> {
    constructor();
    render(): JSX.Element;
    private getGroupedResults();
    private getGroupResults;
    private getResultItem;
    private getSearchStatus();
    private getLoading();
    private getNoResults();
    private onHover;
    private onMouseLeave;
}
