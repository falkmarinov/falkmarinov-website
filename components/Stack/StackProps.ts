/**
 * Responsive breakpoint prefix of tailwindcss
 */
export interface Breakpoints<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

export const byBreakpoints = (left: string, right: string): number => {
  const sortedBreakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];

  const containsBreakpoint = (value: string) => {
    return value.match(/^((sm)|(md)|(lg)|(xl)|(2xl)):[a-zA-Z-]+$/gim)
      ? true
      : false;
  };

  const leftContainsBreakpoint = containsBreakpoint(left);
  const rightContainsBreakpoint = containsBreakpoint(right);

  if (!leftContainsBreakpoint && !rightContainsBreakpoint) {
    return 0;
  } else if (!leftContainsBreakpoint) {
    return -1;
  } else if (!rightContainsBreakpoint) {
    return 1;
  } else {
    const leftBreakpoint = left.split(':')[0];
    const rightBreakpoint = right.split(':')[0];

    return (
      sortedBreakpoints.indexOf(leftBreakpoint) -
      sortedBreakpoints.indexOf(rightBreakpoint)
    );
  }
};

/**
 * Extends a type with all possible breakpoint prefix of tailwindcss
 */
export type PropWithBreakpoints<T> = T | (Breakpoints<T> & { default: T });

const directionPropValues = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
] as const;

export type DirectionPropValues = typeof directionPropValues[number];

/**
 * Check whether prop is a `DirectionPropValue`
 *
 * @param prop to be tested
 * @returns `true` when prop is a `DirectionPropValue` otherwise `false`
 */
export const isDirectionPropValue = (
  prop: any
): prop is DirectionPropValues => {
  return directionPropValues.includes(prop);
};

export type AlignPropValues =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'baseline';

export type JustifyPropValues =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type SpacingPropValues =
  | 0
  | 'px'
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export interface StackProps {
  /**
   * Items inside of the stack
   */
  children: React.ReactNode;
  /**
   * Arrange items in `row` or `column`
   */
  direction?: PropWithBreakpoints<DirectionPropValues>;
  /**
   * How to position items along containers cross axis
   */
  align?: PropWithBreakpoints<AlignPropValues>;
  /**
   * How to position items along containers main axis
   */
  justify?: PropWithBreakpoints<JustifyPropValues>;
  /**
   * Gap between items
   */
  spacing?: PropWithBreakpoints<SpacingPropValues>;
}
