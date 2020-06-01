import { DiscordFileOptions, DiscordNotificationOptions } from './discord.interface';
import {
  GenericDefaultFileOptions,
  GenericDefaultNotificationOptions,
} from '../generic/generic.defaults';

export const DiscordDefaultFileOptions: DiscordFileOptions = {
  ...GenericDefaultFileOptions,
  spoiler: false,
  useTitle: true,
  sources: [],
};

export const DiscordDefaultNotificationOptions: DiscordNotificationOptions = {
  ...GenericDefaultNotificationOptions,
  useTitle: true,
};
