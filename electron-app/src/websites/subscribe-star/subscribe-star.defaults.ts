import {
  SubscribeStarFileOptions,
  SubscribeStarNotificationOptions,
} from './subscribe-star.interface';
import {
  GenericDefaultFileOptions,
  GenericDefaultNotificationOptions,
} from '../generic/generic.defaults';

export const SubscribeStarDefaultFileOptions: SubscribeStarFileOptions = {
  ...GenericDefaultFileOptions,
  tier: 'free',
};

export const SubscribeStarDefaultNotificationOptions: SubscribeStarNotificationOptions = {
  ...GenericDefaultNotificationOptions,
  tier: 'free',
};
