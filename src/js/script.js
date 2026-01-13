// js/main.js
import {videoDB} from "./videos.js";

import {initSidebar} from "./sidebar.js";
import {initSearch} from "./search.js";
import {initKeyboard} from "./keyboard.js";
import {initMinibar} from "./minibar.js";
import {initCategory} from "./category.js";
import {initFeed} from "./feed.js";
import {initFocus} from "./focus.js";

const sidebar = initSidebar();
const search = initSearch({sidebar});

initKeyboard({sidebar, search});
initMinibar();
initCategory();
initFeed(videoDB);
initFocus();