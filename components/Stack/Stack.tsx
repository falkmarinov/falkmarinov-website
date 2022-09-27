import React from 'react';

import cn from 'classnames';

import { StackProps } from './StackProps';
import {
  ALIGN_MAPS,
  DIRECTION_MAPS,
  JUSTIFY_MAPS,
  mapPropToClassnames,
  SPACING_MAPS,
} from './StackStyles';

/**
 * Layout-Component manages children either vertical or horizontal axis
 * with optional spacing
 */
export const Stack = ({
  children,
  direction = 'column',
  justify = 'start',
  align = 'start',
  spacing = 0,
}: StackProps) => {
  const classNames = cn(
    'flex h-full w-full',
    mapPropToClassnames(direction, DIRECTION_MAPS),
    mapPropToClassnames(justify, JUSTIFY_MAPS),
    mapPropToClassnames(align, ALIGN_MAPS),
    mapPropToClassnames(spacing, SPACING_MAPS)
  );
  return <div className={classNames}>{children}</div>;
};
