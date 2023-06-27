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
            d: "M15 16.69V13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.58 20.42C10.72 20.61 10.88 20.78 11.05 20.95C12.36 22.26 14.14 23 16 23C19.86 23 23 19.87 23 16C23 14.17 22.28 12.41 21 11.1V2L19.5 3.5M11.1 11C10.5 11.57 10.03 12.25 9.67 13H6V11H11.1M9.07 15C9 15.33 9 15.66 9 16C9 16.34 9 16.67 9.07 17H6V15H9.07M18 9H6V7H18V9M20.85 16C20.85 16.64 20.73 17.27 20.5 17.86C20.24 18.44 19.88 19 19.43 19.43C19 19.88 18.44 20.24 17.86 20.5C17.27 20.73 16.64 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 14.71 11.66 13.5 12.57 12.57C13.5 11.66 14.71 11.15 16 11.15C18.67 11.15 20.85 13.32 20.85 16Z",
        })
    ]))
}
