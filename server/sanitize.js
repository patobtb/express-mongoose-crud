import {JSDOM} from "jsdom";
import DOMpurify from "dompurify";

const window = new JSDOM("").window;
const purify = DOMpurify(window);

export default purify;