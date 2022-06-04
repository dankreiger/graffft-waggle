import * as React from 'react';
import { useNoStoryBookStyle } from '../../../helpers/story-hooks';
import { ContainerStProps } from './Container.interfaces';
import { Container } from './Container.styles';

export default {
  title: 'Layouts/Container',
  component: Container,
};

/**
 * Container is useful particularly when wrapping site areas using
 * css grid / other vanilla css layouting
 */
export const Default = (args: ContainerStProps) => {
  useNoStoryBookStyle();

  const style = {
    background: 'black',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
  };
  return (
    <Container {...args}>
      <div style={style}>
        <div>
          <code>Container</code> is useful particularly when wrapping site areas
          using css grid / other vanilla css layouting should be used inside a
          section
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          pretium urna, vitae viverra urna. Aliquam ut dui quis mauris gravida
          dictum vitae at mauris. Duis eleifend neque mauris, eu efficitur magna
          bibendum vel. Donec convallis luctus orci ut imperdiet. Integer sed
          luctus augue. Pellentesque habitant morbi tristique senectus et netus
        </div>
      </div>
    </Container>
  );
};

export const WithSection = (args: ContainerStProps) => {
  useNoStoryBookStyle();

  const style = {
    background: 'black',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
  };
  return (
    <section style={{ background: 'orange' }}>
      <Container {...args}>
        <div style={style}>
          <div>
            <code>Container</code> is useful particularly when wrapping site
            areas using css grid / other vanilla css layouting
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            pretium urna, vitae viverra urna. Aliquam ut dui quis mauris gravida
            dictum vitae at mauris. Duis eleifend neque mauris, eu efficitur
            magna bibendum vel. Donec convallis luctus orci ut imperdiet.
            Integer sed luctus augue. Pellentesque habitant morbi tristique
            senectus et netus
          </div>
        </div>
      </Container>
    </section>
  );
};

Default.args = {};
