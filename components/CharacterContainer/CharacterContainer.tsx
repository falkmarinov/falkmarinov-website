import React from 'react';

import cn from 'classnames';

interface CharacterContainerProps {
  /**
   * Character which should be shown
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
export const CharacterContainer = ({
  children,
  isHovered = false,
}: CharacterContainerProps) => {
  const classNames = cn(
    'grid w-12 h-12 bg-gray-200 rounded-full place-content-center lg:text-lg',
    { 'bg-gray-300': isHovered }
  );

  return <div className={classNames}>{children}</div>;
};
