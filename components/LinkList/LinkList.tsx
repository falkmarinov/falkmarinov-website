import React from 'react';

import cn from 'classnames';
import useHover from 'react-use-hover';
import { AiOutlineLink } from 'react-icons/ai';

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
   */
  url: string;
}

/**
 * Renders a row for LinkList
 */
const LinkListItem = ({
  icon = <AiOutlineLink />,
  url,
  label = url,
}: LinkListItemProps) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <li>
      <a
        {...hoverProps}
        className='flex items-center gap-5'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Character isHovered={isHovering}>{icon}</Character>
        <div className='relative'>
          <span>{label}</span>
          <span
            className={cn(
              'absolute left-0 transition-all bg-black h-[2px] bottom-1',
              isHovering ? 'w-full' : 'w-0'
            )}
          ></span>
        </div>
      </a>
    </li>
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
    <ol className='flex flex-col gap-5'>
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
    </ol>
  );
};
