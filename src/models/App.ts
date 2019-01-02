import { observable } from 'mobx';
import { I18n } from './I18n';

class SessionController {
  @observable user: any = {};
}

class App {
  @observable session = new SessionController();
  @observable i18n = new I18n();
}

export const app = new App();
