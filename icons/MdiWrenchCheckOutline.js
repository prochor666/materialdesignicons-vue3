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
            d: "M9 1.09V6H7V1.09C4.16 1.57 2 4.03 2 7C2 9.22 3.21 11.15 5 12.19V21C5 21.55 5.45 22 6 22H10C10.55 22 11 21.55 11 21V12.19C12.79 11.15 14 9.22 14 7C14 4.03 11.84 1.57 9 1.09M10 10.46L9 11.04V20H7V11.04L6 10.46C4.77 9.74 4 8.42 4 7C4 6 4.37 5.06 5 4.35V8H11V4.35C11.63 5.06 12 6 12 7C12 8.42 11.23 9.74 10 10.46M21.6 13L23 14.41L16.47 21L13 17.5L14.4 16.09L16.47 18.17L21.6 13",
        })
    ]))
}
