import React from 'react';

import cn from 'classnames';

import Character from '../Character';
import useHover from 'react-use-hover';

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
  const [isHovering, hoverProps] = useHover();

  return (
    <a
      {...hoverProps}
      className='flex items-center gap-5 group'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Character isHovered={isHovering}>{icon}</Character>
      <span className={cn(isHovering && 'underline')}>{label}</span>
    </a>
  );
};

interface LinkListProps {
  /**
   * List of links and their icons and labels
   */
  linkItems: LinkListItemProps[];
}

/**
 * Render a list of links with their icons and labels
 */
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
