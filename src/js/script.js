// js/main.js
import {videoDB} from "./videos.js";

import {initSidebar} from "./sidebar.js";
import {initSearch, searchForm} from "./search.js";
import {initKeyboard} from "./keyboard.js";
import {initCategory} from "./category.js";
import {initFeed} from "./feed.js";
import {initNavSync} from "./navSync.js";

const sidebar = initSidebar();
const search = initSearch({sidebar});

initKeyboard({sidebar, search});
initCategory();
initFeed(videoDB);
initNavSync();
searchForm();