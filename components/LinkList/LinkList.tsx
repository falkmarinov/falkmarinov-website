import React from 'react';

import cn from 'classnames';

import Character from '../Character';
import Stack from '../Stack';
import useHover from 'react-use-hover';
import { AiOutlineLink } from 'react-icons/ai';

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
    <a {...hoverProps} href={url} target='_blank' rel='noopener noreferrer'>
      <Stack direction='row' align='center' spacing={5}>
        <Character isHovered={isHovering}>{icon}</Character>
        <span className={cn(isHovering && 'underline')}>{label}</span>
      </Stack>
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
    <Stack spacing={5}>
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
    </Stack>
  );
};
