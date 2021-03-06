import { observable, computed, action } from 'mobx';
import socket from '../utils/websocket';
import {
  PostStatuses,
  PostInfo
} from '../../../electron-app/src/submission/post/interfaces/post-status.interface';
import PostService from '../services/post.service';
import { Submission } from '../../../electron-app/src/submission/interfaces/submission.interface';
import { PostEvent } from '../shared/enums/post.events.enum';

export class PostStatusStore {
  @observable
  state: PostStatuses = {
    queued: [],
    posting: []
  };

  constructor() {
    PostService.getStatus().then(status => Object.assign(this.state, status));
  }

  @computed
  get queued(): Submission[] {
    return [...this.state.queued];
  }

  @computed
  get posting(): PostInfo[] {
    return [...this.state.posting];
  }

  @action
  updateStatus(status: PostStatuses) {
    Object.assign(this.state, status);
  }
}

export const postStatusStore = new PostStatusStore();

socket.on(PostEvent.UPDATED, (data: PostStatuses) => postStatusStore.updateStatus(data));
