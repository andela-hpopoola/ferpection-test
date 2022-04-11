import React from 'react';
import { isCraftable } from '@/utils/helpers';
import { IMaterial } from '@/utils/types';
import classNames from 'classnames';

function CraftStatus({
  materials,
  position,
}: {
  materials: IMaterial[];
  position: string;
}) {
  const craftable = isCraftable(materials);
  return (
    <span
      className={classNames('absolute px-3 py-1 text-xs font-bold', position, {
        'text-yellow-700 bg-yellow-400': !craftable,
        'text-sky-700 bg-sky-400': craftable,
      })}
    >
      {craftable ? 'Craftable' : 'Uncraftable'}
    </span>
  );
}

export default CraftStatus;
