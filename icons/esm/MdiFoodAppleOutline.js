const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
    _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M20,10C18.58,7.57 15.5,6.69 13,8V3H11V8C8.5,6.69 5.42,7.57 4,10C2,13 7,22 9,22C11,22 11,21 12,21C13,21 13,22 15,22C17,22 22,13 20,10M18.25,13.38C17.63,15.85 16.41,18.12 14.7,20C14.5,20 14.27,19.9 14.1,19.75C12.87,18.76 11.13,18.76 9.9,19.75C9.73,19.9 9.5,20 9.3,20C7.59,18.13 6.36,15.85 5.75,13.39C5.5,12.66 5.45,11.87 5.66,11.12C6.24,10.09 7.32,9.43 8.5,9.4C9.06,9.41 9.61,9.54 10.11,9.79L11,10.24H13L13.89,9.79C14.39,9.54 14.94,9.41 15.5,9.4C16.68,9.43 17.76,10.08 18.34,11.11C18.55,11.86 18.5,12.65 18.25,13.38M11,5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5Z",
        })
    ]))
}
