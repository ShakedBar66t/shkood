import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Switch from 'react-switch';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentLocale = pathname.startsWith('/he') ? 'he' : 'en';
    setChecked(currentLocale === 'he');
  }, [pathname]);

  const toggleLocale = () => {
    const currentLocale = pathname.startsWith('/he') ? 'he' : 'en';
    const newLocale = currentLocale === 'he' ? 'en' : 'he';
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    router.push(`${newPathname}?${searchParams.toString()}`);
    setChecked(!checked);
  };

  return (
    <Switch
      onChange={toggleLocale}
      checked={checked}
      checkedIcon={<div style={{ paddingLeft: '5px', paddingTop: "2px", color: "white"  }}>HE</div>}
      uncheckedIcon={<div style={{ padding: '2px', color: "white"  }}>EN</div>}
      offColor="#16A34A"
      onColor="#16A34A"
    />
  );
};

export default LanguageSwitcher;
