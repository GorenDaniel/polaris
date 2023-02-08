import React from 'react';
import {mountWithApp} from 'tests/utilities';

import {
  expandHex,
  rgbStringToHex,
  nameToHex,
  normalizeColorString,
} from '../../../../../utilities/color-transformers';
import {TextPicker} from '../TextPicker';
import {TextField} from '../../../../TextField';

const red = {
  hue: 0,
  saturation: 1,
  brightness: 1,
};

describe('<TextPicker />', () => {
  const mockProps = {
    color: red,
    allowAlpha: false,
    onChange: noop,
  };

  describe('color', () => {
    it("displays #FF0000 when 'red' color is passed as prop", () => {
      const textPicker = mountWithApp(<TextPicker {...mockProps} />);
      const textField = textPicker.find(TextField);
      const expectedHex = '#FF0000';

      expect(textField!.prop('value')).toBe(expectedHex);
    });
  });

  describe('allowAlpha', () => {
    it('renders color swatch', () => {
      const textPicker = mountWithApp(<TextPicker {...mockProps} />);

      expect(textPicker.find('div.TextFieldSwatch')).toHaveLength(1);
    });
  });

  describe('onChange()', () => {
    it("calls onChange with #FFFFFF when 'white' is entered", () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = 'white';
      const expectedHex = nameToHex(normalizeColorString(colorValue));

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedHex);
    });

    it('calls onChange with #ffffff when rgb(255, 255, 255) is entered', () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = 'rgb(255, 255, 255)';
      const expectedHex = rgbStringToHex(normalizeColorString(colorValue));

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedHex);
    });

    it('calls onChange with #ffffff when ffffff is entered', () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = 'ffffff';
      const expectedHex = expandHex(`#${normalizeColorString(colorValue)}`);

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedHex);
    });

    it('calls onChange with #ffffff when #fff is entered', () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = '#fff';
      const expectedHex = expandHex(normalizeColorString(colorValue));

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedHex);
    });

    it('calls onChange with #ffffff when fff is entered', () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = 'fff';
      const expectedHex = expandHex(`#${normalizeColorString(colorValue)}`);

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedHex);
    });

    it('does not call onChange when invalid value is entered', () => {
      const onChangeSpy = jest.fn();
      const textPicker = mountWithApp(
        <TextPicker {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = textPicker.find(TextField);
      const colorValue = '#00000z';

      (textField!.find('input')!.domNode as HTMLInputElement).value =
        colorValue;
      textField!.find('input')!.trigger('onChange');
      textField!.find('input')!.trigger('onBlur');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });
});

function noop() {}
