import {NativeModules} from 'react-native';
import {AppConstants} from '../../helpers/constants';

NativeModules.RNI18n = {languages: [AppConstants.MULTI_LANG.EN]};
jest.unmock('../');
jest.mock('../../locale/en.json', () => ({
  'test.my-country': 'Nigeria',
  'test.key.subkey': 'Label',
  'test.simple-replacement': 'Hello {{name}}',
  'test.pluralize': {
    zero: 'Zero apples',
    one: 'One apple',
    other: '{{count}} apples',
  },
  'test.label-with-bracket': 'Current value ({{currency}})',
  'test.non-breaking-spaces': 'Hello&nbsp;World&nbsp;!',
  'test.constant-shorthand': 'Withdrawal will take __WITHDRAWAL.DURATION__',
  'test.zero-width-space':
    'ถึงแม้ว่าเราจะซื้อ-ขาย ETF ในสกุลเงินดอลลาร์สหรัฐที่อยู่ในตลาดหลักทรัพย์ของสหรัฐอเมริกา แต่ ETF เหล่านี้มีการ​""กระจาย""',
}));

describe('i18n', () => {
  const i18n = require('../');

  describe('t (translate)', () => {
    it('handles dot separated key', () => {
      expect(i18n.t('test.key.subkey')).toEqual('Label');
    });

    it('handles dot separated key', () => {
      expect(i18n.t('test.simple-replacement', {name: 'Sam'})).toEqual(
        'Hello Sam',
      );

      expect(i18n.t('test.simple-replacement')).toEqual(
        'Hello [missing {{name}} value]',
      );
      expect(i18n.t('test.simple-replacement', null)).toEqual(
        'Hello [missing {{name}} value]',
      );
      expect(i18n.t('test.simple-replacement', undefined)).toEqual(
        'Hello [missing {{name}} value]',
      );
      expect(i18n.t('test.simple-replacement', {})).toEqual(
        'Hello [missing {{name}} value]',
      );
    });

    it('handles pluralizations', () => {
      expect(i18n.t('test.pluralize', {count: 0})).toEqual('Zero apples');
      expect(i18n.t('test.pluralize', {count: 1})).toEqual('One apple');
      expect(i18n.t('test.pluralize', {count: 2})).toEqual('2 apples');

      expect(i18n.t('test.pluralize')).toEqual('Zero apples');
      expect(i18n.t('test.pluralize', null)).toEqual('Zero apples');
      expect(i18n.t('test.pluralize', undefined)).toEqual('Zero apples');
      expect(i18n.t('test.pluralize', {})).toEqual('Zero apples');
    });

    it('Handles brackets with missing values', () => {
      expect(i18n.t('test.label-with-bracket', {currency: 'NGN'})).toEqual(
        'Current value (NGN)',
      );

      expect(i18n.t('test.label-with-bracket')).toEqual('Current value');
      expect(i18n.t('test.label-with-bracket', null)).toEqual('Current value');
      expect(i18n.t('test.label-with-bracket', undefined)).toEqual(
        'Current value',
      );
      expect(i18n.t('test.label-with-bracket', {})).toEqual('Current value');
    });

    it('Replaces non breaking spaces', () => {
      expect(i18n.t('test.non-breaking-spaces')).toEqual('Hello\xa0World\xa0!');
    });

    it('Replaces zero width spaces', () => {
      expect(i18n.t('test.zero-width-space')).toEqual(
        'ถึงแม้ว่าเราจะซื้อ-ขาย ETF ในสกุลเงินดอลลาร์สหรัฐที่อยู่ในตลาดหลักทรัพย์ของสหรัฐอเมริกา แต่ ETF เหล่านี้มีการ​​กระจาย​',
      );
    });
  });

  describe('setLocale', () => {
    it('changes i18n locale', () => {
      i18n.setLocale(AppConstants.MULTI_LANG.EN);
      expect(i18n.t('test.my-country')).toEqual('Nigeria');
    });
  });

  describe('pseudo-localization', () => {
    beforeEach(() => {
      i18n.setLocale(AppConstants.MULTI_LANG.PSUEDO_EN);
    });

    it('returns pseudo-localization based on english language', () => {
      expect(i18n.t('test.my-country')).toEqual('Ƞīɠḗḗřīȧȧ');
    });
  });
});
