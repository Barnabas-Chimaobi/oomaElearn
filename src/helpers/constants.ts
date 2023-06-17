// import {images} from '../assets';
import {t} from '../i18n';
import {Colors} from './colors';

const AppConstants = {
  MULTI_LANG: {
    EN: 'EN',
    FR: 'FR',
    GER: 'GER',
    PSUEDO_EN: 'PSUEDO_EN',
  },
};

const slideList = [
  {
    key: 1,
    // title: t('expand-your-busness'),
    title: 'Largest digital learning platform',
    subtitle:
      'dummy text dummy text dummy text dummy text dummy text dummy text.u',
    // image: images.onboard1,
    //   image: illustration,
    backgroundColor: Colors.day_mode.primary,
  },
  {
    key: 2,
    // title: t('business-analytics'),
    title: 'Instant or long term learning',
    subtitle:
      'dummy text dummy text dummy text dummy text dummy text dummy text.',
    // subtitle1: 'Increase productivity and block leakages',
    // image: images.onboard3,
  },
  {
    key: 3,
    title: 'Learn with your kids and manage them',
    subtitle:
      'dummy text dummy text dummy text dummy text dummy text dummy text.',
    // subtitle1: 'Attract new Customers to your online store',
    // subtitle2: 'Track and manage online stores',
    // image: images.onboard2,
    backgroundColor: Colors.day_mode.primary,
  },
];

export {AppConstants, slideList};
