import { Module } from '@nestjs/common';
import { WebsiteProvider } from './website-provider.service';
import { WebsitesService } from './websites.service';
import { PiczelModule } from './piczel/piczel.module';
import { WeasylModule } from './weasyl/weasyl.module';
import { FurifficModule } from './furiffic/furiffic.module';
import { DiscordModule } from './discord/discord.module';
import { WebsitesController } from './websites.controller';
import { DerpibooruModule } from './derpibooru/derpibooru.module';
import { KoFiModule } from './ko-fi/ko-fi.module';
import { InkbunnyModule } from './inkbunny/inkbunny.module';
import { SoFurryModule } from './so-furry/so-furry.module';
import { E621Module } from './e621/e621.module';
import { FurAffinityModule } from './fur-affinity/fur-affinity.module';
import { SubscribeStarModule } from './subscribe-star/subscribe-star.module';
import { Route50Module } from './route50/route50.module';
import { HentaiFoundryModule } from './hentai-foundry/hentai-foundry.module';
import { AryionModule } from './aryion/aryion.module';
import { CustomModule } from './custom/custom.module';
import { NewgroundsModule } from './newgrounds/newgrounds.module';
import { PixivModule } from './pixiv/pixiv.module';
import { NewTumblModule } from './new-tumbl/new-tumbl.module';
import { FurryLifeModule } from './furry-life/furry-life.module';
import { FurryNetworkModule } from './furry-network/furry-network.module';
import { PatreonModule } from './patreon/patreon.module';
import { TumblrModule } from './tumblr/tumblr.module';
import { DeviantArtModule } from './deviant-art/deviant-art.module';
import { MastodonModule } from './mastodon/mastodon.module';
import { TwitterModule } from './twitter/twitter.module';
import { PillowfortModule } from './pillowfort/pillowfort.module';

@Module({
  controllers: [WebsitesController],
  providers: [WebsiteProvider, WebsitesService],
  exports: [WebsiteProvider, WebsitesService],
  imports: [
    PiczelModule,
    WeasylModule,
    FurifficModule,
    DiscordModule,
    DerpibooruModule,
    KoFiModule,
    InkbunnyModule,
    SoFurryModule,
    E621Module,
    FurAffinityModule,
    SubscribeStarModule,
    Route50Module,
    HentaiFoundryModule,
    AryionModule,
    CustomModule,
    NewgroundsModule,
    PixivModule,
    NewTumblModule,
    FurryLifeModule,
    FurryNetworkModule,
    PatreonModule,
    TumblrModule,
    DeviantArtModule,
    MastodonModule,
    TwitterModule,
    PillowfortModule,
  ],
})
export class WebsitesModule {}
