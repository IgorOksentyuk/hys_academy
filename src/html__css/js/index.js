import '../styles/style.scss';

import '../images/sprite.svg';
import '../images/courses-block/woman-design.png';
import '../images/courses-block/woman-marketing.png';
import '../images/courses-block/woman-web.png';
import '../images/tour-block/rectangle.png';
import '../images/customers-block/customers-photo.png';

import 'jquery';
import 'slick-carousel';
import './mobile-menu.js';
import './paginator.js';
import './slick.min.js';
import './slider.js';

import App from './app.js';

const app = new App();
app.init();
