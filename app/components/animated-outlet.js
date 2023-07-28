import Component from '@glimmer/component';
import fade from 'ember-animated/transitions/fade';

export default class AnimatedOutlet extends Component {
  duration = 500;

  rules = () => {
    return fade;
  };
}
