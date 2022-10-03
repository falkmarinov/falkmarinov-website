import React from 'react';

import cn from 'classnames';

interface TitleProps {
  /**
   * Title text
   */
  children: string;
}

/**
 * Title typography
 */
export const Title = ({ children }: TitleProps) => {
  const classNames = cn(
    'text-3xl sm:text-4xl lg:text-5xl tracking-[0.16em] font-bold'
  );

  return <h1 className={classNames}>{children}</h1>;
};
