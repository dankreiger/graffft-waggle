import * as React from 'react';
import {
  PaletteWrapper,
  ColorItem,
  ColorLabel,
} from '../../../helpers/story-helpers';
import { Colors, Gradients } from './index';
export default {
  title: 'Themes/Portfolio',
};

const synth = window.speechSynthesis;
const saySomething = (text: string) => () => {
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
};

export const colors = () => (
  <PaletteWrapper>
    {Object.entries(Colors).map(([key, value]) => (
      <ColorItem
        //@ts-ignore
        themeColor={Colors[key]}
        onClick={saySomething(key)}
      >
        <ColorLabel>
          <code>
            <strong>Colors.{key}</strong> <br />
            {value}
          </code>
        </ColorLabel>
      </ColorItem>
    ))}
  </PaletteWrapper>
);

export const gradients = () => (
  <PaletteWrapper>
    <ColorItem themeColor={Gradients.Primary} onClick={saySomething('primary')}>
      <ColorLabel>
        <code>
          <strong> Gradients.Primary</strong> <br />
          {Gradients.Primary}
          <br />
        </code>
      </ColorLabel>
    </ColorItem>
  </PaletteWrapper>
);
