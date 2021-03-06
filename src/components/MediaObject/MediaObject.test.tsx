/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MediaObject, { MediaObjectSize, MediaObjectProps } from '.';

const image = <img src="404.jpg" alt="" />;
const title = <div className="TITLE">TITLE CONTENT</div>;
const metadata = <div className="METADATA">METADATA CONTENT</div>;
const extra = <div className="EXTRA">EXTRA CONTENT</div>;
const children = <div className="CHILDREN">CHILDREN CONTENT</div>;

describe('<MediaObject />', () => {
  let component: ShallowWrapper<MediaObjectProps, {}>;

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with image content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} imageContent={image} />);
      component.render();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with title content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} titleContent={title} />);
      component.render();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with metadata content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} metadataContent={metadata} />);
      component.render();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('at extra small size', () => {
      beforeEach(() => {
        component = shallow(
          <MediaObject size={MediaObjectSize.XSMALL} metadataContent={metadata} />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with extra content', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM} extraContent={extra} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('at extra large size', () => {
      beforeEach(() => {
        component = shallow(<MediaObject size={MediaObjectSize.XLARGE} extraContent={extra} />);
        component.render();
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with arbitrary children', () => {
    beforeEach(() => {
      component = shallow(<MediaObject size={MediaObjectSize.MEDIUM}>{children}</MediaObject>);
      component.render();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
