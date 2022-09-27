import { byBreakpoints, isDirectionPropValue } from './StackProps';

describe('function: isDirectionPropValue', () => {
  describe('should return true when `prop` is', () => {
    it.each(['row', 'row-reverse', 'column', 'column-reverse'])(
      '`%p`',
      (prop: string) => {
        const returnedValue = isDirectionPropValue(prop);
        expect(returnedValue).toBeTruthy();
      }
    );
  });

  describe('should return false when `prop` is', () => {
    it.each([
      'text',
      42,
      { id: 32, name: 'random' },
      true,
      false,
      ['1', 2],
      () => {},
    ])('`%p`', (prop: any) => {
      const returnedValue = isDirectionPropValue(prop);
      expect(returnedValue).toBeFalsy();
    });
  });
});

describe('comparator: isBreakpoint', () => {
  it('should sort by tailwind breakpoint prefixes', () => {
    const sortedArray = ['xl:dolor', 'sm:lorem', 'lg:ipsum'].sort(
      byBreakpoints
    );

    expect(sortedArray).toStrictEqual(['sm:lorem', 'lg:ipsum', 'xl:dolor']);
  });
});
