import { DIRECTION_MAPS, mapPropToClassnames } from './StackStyles';
import { PropWithBreakpoints, DirectionPropValues } from './StackProps';

describe('function: getDirectionPropClassnames', () => {
  const table: Array<{
    prop: PropWithBreakpoints<DirectionPropValues>;
    expectedClassnames: string;
  }> = [
    { prop: 'row', expectedClassnames: 'flex-row' },
    { prop: 'row-reverse', expectedClassnames: 'flex-row-reverse' },
    { prop: 'column', expectedClassnames: 'flex-col' },
    { prop: 'column-reverse', expectedClassnames: 'flex-col-reverse' },
    {
      prop: { default: 'row', sm: 'column', md: 'row' },
      expectedClassnames: 'flex-row sm:flex-col md:flex-row',
    },
  ];

  it.each(table)(
    'getDirectionPropClassnames($prop) => "$expectedClassnames"',
    ({ prop, expectedClassnames }) => {
      const returnedClassnames = mapPropToClassnames(prop, DIRECTION_MAPS);
      expect(returnedClassnames).toBe(expectedClassnames);
    }
  );

  it('should return classnames sorted by breakpoints', () => {
    const returnedClassnames = mapPropToClassnames(
      {
        lg: 'row',
        md: 'row-reverse',
        sm: 'column',
        default: 'row',
      },
      DIRECTION_MAPS
    );

    expect(returnedClassnames).toBe(
      'flex-row sm:flex-col md:flex-row-reverse lg:flex-row'
    );
  });
});
