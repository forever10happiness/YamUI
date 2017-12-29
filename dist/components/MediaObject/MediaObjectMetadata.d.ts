/// <reference types="react" />
import * as React from 'react';
import { MediaObjectSize } from './enums';
export { MediaObjectSize };
export interface MediaObjectMetadataProps {
    size: MediaObjectSize;
}
export default class MediaObjectMetadata extends React.Component<MediaObjectMetadataProps, {}> {
    render(): JSX.Element;
}