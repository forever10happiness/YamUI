/// <reference types="react" />
import * as React from 'react';
import { MediaObjectSize } from './enums';
export { MediaObjectSize };
export interface MediaObjectTitleProps {
    size: MediaObjectSize;
}
export default class MediaObjectTitle extends React.Component<MediaObjectTitleProps, {}> {
    render(): JSX.Element;
}