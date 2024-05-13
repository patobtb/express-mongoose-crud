import {JSDOM} from "jsdom";
import DOMpurify from "dompurify";

const window = new JSDOM("").window;
const purifiy = DOMpurify(window);

export default purifiy;