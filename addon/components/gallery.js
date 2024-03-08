import { getOwner } from '@ember/application';
import Component from '@glimmer/component';

export default class GalleryComponent extends Component {
  get rootURL() {
    const config = getOwner(this).factoryFor('config:environment');
    if (config) {
      return config.class.rootURL;
    }
    return '/';
  }
}
