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
            d: "M15 16.69V13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69M3 20V14L10.11 12.22C10.19 12.09 10.28 11.97 10.37 11.84L3 10V4L15.03 9.07C15.35 9 15.67 9 16 9C17.86 9 19.64 9.74 20.95 11.05C21.2 11.3 21.43 11.57 21.63 11.85L22 12L21.8 12.08C22.58 13.23 23 14.59 23 16C23 19.87 19.86 23 16 23C14.14 23 12.36 22.26 11.05 20.95C10.08 20 9.42 18.74 9.14 17.41L3 20M20.85 16C20.85 13.32 18.67 11.15 16 11.15C14.71 11.15 13.5 11.66 12.57 12.57C11.66 13.5 11.15 14.71 11.15 16C11.15 18.68 13.32 20.85 16 20.85C16.64 20.85 17.27 20.73 17.86 20.5C18.44 20.24 19 19.88 19.43 19.43C19.88 19 20.24 18.44 20.5 17.86C20.73 17.27 20.85 16.64 20.85 16Z",
        })
    ]))
}
