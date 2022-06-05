import { render } from '@testing-library/react';
import * as React from 'react';
import { Card } from '../Card';

describe('Card', () => {
  test('', () => {
    render(
      <Card
        title="dog"
        subtitle="woof"
        year="1888"
        category="animals"
        subCategory="puppies"
        imgSrc="https://via.placeholder.com/150"
        imgAlt="dog"
        buttonBgColor="#fafafa"
        buttonTextColor="#000"
        cardBgColor="orange"
        mainFontFamily='"Roboto", sans-serif'
        categoryFontFamily='"Roboto", sans-serif'
      />
    );
  });
});
