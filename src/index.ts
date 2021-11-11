import { compile, serialize, stringify } from "stylis";
import { generateClassName } from "./generateClassName";

export default (function () {
  const headStyles = document.createElement("style");
  document.head.appendChild(headStyles);

  const css = (...args: any[]) => {
    const className = generateClassName();
    addStyle(args, className);

    return className;
  };

  const addStyle = (style: any[], className: string) => {
    const styleBlock = style[0];
    const cssClass = `.${className}{
          ${styleBlock}
      }`;
    const compiledCSS = serialize(compile(cssClass), stringify);
    headStyles.appendChild(document.createTextNode(compiledCSS));
  };

  return css;
})();
