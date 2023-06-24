import i18n, {TranslateOptions} from 'i18n-js';
import _ from 'lodash';
import en from '../locale/en.json';
import {AppConstants} from '../helpers/constants';
import {pseudoLocalize} from './pseudoLocalize';

const normaliseKey = (key: string) => _.replace(key, /\./g, '-');
const normaliseTranslationDictinary = (
  dictionary: Record<string, string | object>,
) =>
  _(dictionary)
    .omitBy((value: string | object) => value === '')
    .mapKeys((_value, key) => normaliseKey(key))
    .value();

export const translations = {
  EN: require('../locale/en.json'),
  FR: require('../locale/fr.json'),
};

const DEFAULT_LOCALE = AppConstants?.MULTI_LANG.EN;
i18n.locale = DEFAULT_LOCALE;
i18n.fallbacks = true;
i18n.translations = _.mapValues(
  translations,
  normaliseTranslationDictinary,
) as TSFixMe;

let usePseudoTranslations = false;

type DefaultLocale = typeof en;
export type LocaleKey = DefaultLocale;

/**
 * t takes a locale key and returns the associated locale string.
 * If the locale key does not match any keys in en-SG.json, such as when using a template literal,
 * the consumer must provide a `defaultValue` in the params.
 */
export function t(key: string, _params?: TranslateOptions): string;
export function t(
  key: string,
  _params: TranslateOptions & {defaultValue: string},
): string;
export function t(key: string, _params?: TranslateOptions): string {
  let text: string;

  const params = {count: 0, ..._params};

  text = i18n.t(normaliseKey(key), params) || '';
  text = _.replace(text, / \(\[missing.*\)/g, ''); // Remove "([Missing currency variable])"
  text = _.replace(text, /&nbsp;/g, '\xa0'); // Replace non breaking spaces
  text = _.replace(text, /&#8209;/g, '‑'); // Replace non breaking hypens
  text = _.replace(text, /""/g, '​'); // Replace non breaking zero width space
  if (usePseudoTranslations) return pseudoLocalize(text as string);
  return text;
}

export const setLocale = (localKey: string) => {
  if (localKey === AppConstants.MULTI_LANG.PSUEDO_EN) {
    usePseudoTranslations = true;
    i18n.locale = AppConstants.MULTI_LANG.EN;
  } else {
    usePseudoTranslations = false;
    i18n.locale = `${localKey}`;
  }
};

export default i18n;
