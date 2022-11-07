import React, { useEffect } from 'react';

import cn from 'classnames';
import useHover from 'react-use-hover';
import { AiOutlineLink } from 'react-icons/ai';

import Character from '../Character';

export interface LinkListItemProps {
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
  /**
   * Gets called when on enter and on leave
   */
  onHover?: (isHovering: boolean) => void;
}

/**
 * Renders a row for LinkList
 */
const LinkListItem = ({
  icon = <AiOutlineLink />,
  url,
  label = url,
  onHover = () => {},
}: LinkListItemProps) => {
  const [isHovering, hoverProps] = useHover();

  useEffect(() => {
    onHover(isHovering);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering]);

  return (
    <li {...hoverProps}>
      <a
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
          />
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
  /**
   * Gets called when on enter and on leave
   */
  onRowHover?: (index: number | undefined) => void;
}

/**
 * Render a list of links with their icons and labels
 */
export const LinkList = ({
  linkItems,
  onRowHover = () => {},
}: LinkListProps) => {
  return (
    <ol className='flex flex-col gap-5'>
      {linkItems.map(({ icon, label, url }, index) => {
        return (
          <LinkListItem
            key={`${index}-${label}`}
            icon={icon}
            label={label}
            url={url}
            onHover={(isHovering: boolean) => {
              isHovering ? onRowHover(index) : onRowHover(undefined);
            }}
          />
        );
      })}
    </ol>
  );
};
