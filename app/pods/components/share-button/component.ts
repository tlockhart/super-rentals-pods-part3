import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import Router from "Su"
import {Router} from "@ember/routing"
// import Router from 'super-rentals-pods/router';


const TWEET_INTENT = 'https://twitter.com/intent/tweet';

interface ShareButtonArgs {
  text: string;
  hashtags: string;
  via: string;
}

export default class ShareButton extends Component<ShareButtonArgs> {
  // @service router!: Router;
  @service router!: Router;

  get currentURL() {
    // return window.location.href;
    // use the Browser's URL API to return the URL:
    let returnValue = (new URL(this.router.currentURL, window.location.origin)).toString();
    return returnValue;
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    console.log("URL ", url);
    return url;
  }
}
