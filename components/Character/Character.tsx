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
    'flex justify-center items-center w-12 h-12 rounded-full border-2 border-black lg:text-lg',
    'transition duration-300',
    { 'bg-gray-200': !isHovered, 'bg-black text-white': isHovered }
  );

  return <div className={classNames}>{children}</div>;
};
