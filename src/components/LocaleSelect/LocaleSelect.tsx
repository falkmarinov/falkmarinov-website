import { ChangeEvent, ChangeEventHandler, HTMLAttributes } from 'react';
import { useRouter } from 'next/router';

interface LocaleSelectProps {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const LocaleSelect = ({ onChange }: LocaleSelectProps) => {
  const router = useRouter();

  const localeSelectChangeHandler: ChangeEventHandler<HTMLSelectElement> =
    async (e) => {
      await router.push('', '', { locale: e.target.value });
      onChange && onChange(e);
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
