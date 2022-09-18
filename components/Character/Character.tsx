import React from 'react';

import cn from 'classnames';

interface CharacterProps {
  /**
   * Character which should be rendered
   */
  children: React.ReactNode;
  /**
   * Set hover state
   */
  isHovered?: boolean;
}

/**
 * Container with shaped background
 */
export const Character = ({ children, isHovered = false }: CharacterProps) => {
  const classNames = cn(
    'grid w-12 h-12 transition duration-300 rounded-full place-content-center lg:text-lg',
    { 'bg-gray-200': !isHovered, 'bg-gray-300': isHovered }
  );

  return <div className={classNames}>{children}</div>;
};
