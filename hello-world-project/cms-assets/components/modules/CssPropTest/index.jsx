import styles from './fancy.module.css';

export const meta = {
  label: `Fancy CSS custom properties test`,
};

export { fields } from './fields.jsx';

export const Component = (fieldValues) => {
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
};
