import "../../../styles.scss";

import "../images/sprite.svg";
import "../images/courses-block/woman-design.png";
import "../images/courses-block/woman-marketing.png";
import "../images/courses-block/woman-web.png";
import "../images/tour-block/rectangle.png";
import "../images/customers-block/customers-photo.png";

import "jquery";
import "./mobile-menu.ts";
import "./paginator.ts";
import "./slick.min.ts";
import "./slider.ts";

import App from "./app";

const app = new App();
app.init();
