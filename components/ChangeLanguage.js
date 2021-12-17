import { useTranslation } from 'react-i18next';

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation();
  let defaultLang = i18n.language;

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={(e) => changeLang(e)}>
      <option selected={defaultLang == 'en' ? true : false} value="en">
        En
      </option>
      <option selected={defaultLang == 'fr' ? true : false} value="fr">
        Fr
      </option>
    </select>
  );
}
