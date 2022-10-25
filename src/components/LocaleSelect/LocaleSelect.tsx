import { ChangeEvent, ChangeEventHandler, HTMLAttributes } from 'react';
import { useRouter } from 'next/router';

interface LocaleSelectProps {
  /**
   * Executes everytime when value changed
   */
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Renders an dropdown select item to select a locale
 */
export const LocaleSelect = ({ onChange = () => {} }: LocaleSelectProps) => {
  const router = useRouter();

  const localeSelectChangeHandler: ChangeEventHandler<HTMLSelectElement> =
    async (e) => {
      await router.push('', '', { locale: e.target.value });
      onChange(e);
    };

  return (
    <select
      defaultValue={router.locale}
      onChange={localeSelectChangeHandler}
      className='bg-transparent cursor-pointer'
    >
      {router.locales?.sort().map((locale, index) => {
        return (
          <option value={locale} key={`${locale}-${index}`}>
            {locale.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};
