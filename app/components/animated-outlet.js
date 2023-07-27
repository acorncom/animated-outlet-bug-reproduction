import Component from '@glimmer/component';
import fade from 'ember-animated/transitions/fade';

export default class AnimatedOutlet extends Component {
  rules({ newItems, oldItems }) {
    const oldRoute = oldItems[oldItems.length - 1];
    const newRoute = newItems[newItems.length - 1];
    let oldRouteName = undefined;
    let newRouteName = undefined;

    if (oldRoute) {
      oldRouteName = oldRoute.outlets.main.render.name;
    }

    if (newRoute) {
      newRouteName = newRoute.outlets.main.render.name;
    }

    if (oldRouteName !== newRouteName) {
      return fade;
    }
  }
}
