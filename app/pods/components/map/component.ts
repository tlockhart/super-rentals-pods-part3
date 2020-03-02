import Component from '@glimmer/component';
import ENV from 'super-rentals-pods/config/environment';
// const

interface MapArgs {

}

export default class Map extends Component<MapArgs> {
  MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
  get src() {
    let { lng, lat, width, height, zoom } = this.args;
    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${this.MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
