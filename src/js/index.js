import '../html__css/styles/style.scss';

import '../html__css/images/sprite.svg';
import '../html__css/images/courses-block/woman-design.png';
import '../html__css/images/courses-block/woman-marketing.png';
import '../html__css/images/courses-block/woman-web.png';
import '../html__css/images/tour-block/rectangle.png';
import '../html__css/images/customers-block/customers-photo.png';

import 'jquery';
import 'slick-carousel';
import './mobile-menu.js';
import './paginator.js';
import './slick.min.js';
import './slider.js';

import App from './app.js';

const app = new App();
app.init();
