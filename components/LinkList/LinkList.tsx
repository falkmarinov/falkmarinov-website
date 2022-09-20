import React, { useState } from 'react';

import cn from 'classnames';

import Character from '../Character';

interface LinkListItemProps {
  /**
   * Icon of the URL
   */
  icon?: JSX.Element;
  /**
   * Alias which will be shown
   */
  label?: string;
  /**
   * URL of the link
   * TODO: refactor to URL
   */
  url: string;
}

/**
 * Renders a row for LinkList
 */
const LinkListItem = ({ icon, label, url }: LinkListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnterEvent = () => setIsHovered(true);
  const onMouseLeaveEvent = () => setIsHovered(false);

  return (
    <a
      key={label as string}
      className='flex items-center gap-5 group'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={onMouseEnterEvent}
      onMouseLeave={onMouseLeaveEvent}
    >
      <Character isHovered={isHovered}>{icon}</Character>
      <span className={cn(isHovered && 'underline')}>{label}</span>
    </a>
  );
};

interface LinkListProps {
  /**
   *
   */
  linkItems: LinkListItemProps[];
}

export const LinkList = ({ linkItems }: LinkListProps) => {
  return (
    <div className='flex flex-col gap-5'>
      {linkItems.map(({ icon, label, url }, index) => {
        return (
          <LinkListItem
            key={`${index}-${label}`}
            icon={icon}
            label={label}
            url={url}
          />
        );
      })}
    </div>
  );
};
