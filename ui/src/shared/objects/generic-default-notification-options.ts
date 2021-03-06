import { DefaultOptions } from '../../../../electron-app/src/submission/submission-part/interfaces/default-options.interface';

export const GenericDefaultNotificationOptions: DefaultOptions = {
  tags: {
    extendDefault: true,
    value: []
  },
  description: {
    overwriteDefault: false,
    value: ''
  },
  rating: null
};
