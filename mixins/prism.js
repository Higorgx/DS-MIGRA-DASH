import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default {
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll(); // highlight your code on mount
      }
}