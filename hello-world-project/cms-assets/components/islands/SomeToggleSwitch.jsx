import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function SomeToggleSwitch({ id, islandId, defaultChecked }) {
  id ??= `${islandId}-switch`;

  const [checked, setChecked] = useState(defaultChecked);

  const onChange = () => {
    console.log(`toggle ${id} changed`, !checked);
    setChecked(!checked);
  };
  return (
    <Switch checked={defaultChecked} onChange={onChange} id={id}>
      Some Toggle Switch = {checked ? 'on' : 'off'}
    </Switch>
  );
}
