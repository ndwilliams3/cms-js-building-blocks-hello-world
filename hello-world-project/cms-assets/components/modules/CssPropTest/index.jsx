import {
  ModuleFields,
  BooleanField,
  ColorField,
  NumberField,
} from '@hubspot/cms-components/fields';

import styles from './fancy.module.css';

export const meta = {
  label: `Fancy CSS custom properties test`,
};

export function Component(fieldValues) {
  const { hasPurpleBorder, paddingPx, customSecondTextColor } = fieldValues;

  console.log('customSecondTextColor', customSecondTextColor);

  // Example of toggling styles via a prop
  const classes = [styles['fancy-module-wrapper']];
  if (hasPurpleBorder) {
    classes.push(styles['purple-border']);
  }

  // Example of using inline style attribute (with React's style syntax)
  const inlineStyles = { padding: paddingPx };

  // Example of setting a CSS custom property value that is picked up by other CSS
  const inlineAndCustomPropertyStyles = {
    ...inlineStyles,
    '--second-text-color': customSecondTextColor.color,
  };

  return (
    <div className={classes.join(' ')} style={inlineAndCustomPropertyStyles}>
      <p>First text</p>
      <p className={styles['second-text']}>Second text</p>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <BooleanField
      label="Has purple border?"
      name="hasPurpleBorder"
      default={true}
    />
    <ColorField
      label="Custom second text color"
      name="customSecondTextColor"
      default={{ color: 'MediumAquamarine' }}
    />
    <NumberField label="Padding" name="paddingPx" suffix="px" default={10} />
  </ModuleFields>
);
