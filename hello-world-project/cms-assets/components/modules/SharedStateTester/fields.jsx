import React from 'react';
import {
  ModuleFields,
  BooleanField,
  TextField,
  NumberField,
} from '@hubspot/cms-components/fields';

/**
 * Here we are defining module fields that will show up for marketers in the page editor so they can customize the module
 * We also define default field values
 */
export const fields = (
  <ModuleFields>
    <BooleanField label="Render top section" name="renderTop" default={true} />
    <BooleanField
      label="Render middle section"
      name="renderMiddle"
      default={true}
    />
    <BooleanField
      label="Render bottom section"
      name="renderBottom"
      default={true}
    />
    <NumberField
      label="Number islands per state"
      name="num_island_per_state"
      default={2}
      min={0}
      max={5}
    />
    <TextField
      label="Island prefix"
      name="island_prefix"
      default={'shared-state-tester-'}
    />
  </ModuleFields>
);
