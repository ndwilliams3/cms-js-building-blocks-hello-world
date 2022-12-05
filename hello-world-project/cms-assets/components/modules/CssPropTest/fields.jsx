import React from 'react';
import {
  ModuleFields,
  BooleanField,
  NumberField,
  ColorField,
} from '@hubspot/cms-components/fields';

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
