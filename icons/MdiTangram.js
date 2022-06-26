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
            "clip-rule": "evenodd"
            d: "M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M18.59 4L12 10.59L5.41 4H18.59M13.41 12L16.5 8.91L19.59 12L16.5 15.09L13.41 12M14.59 16H9.41L12 13.41L14.59 16M4 5.41L10.59 12L4 18.59V5.41M11.59 20H5.41L7.41 18H13.59L11.59 20M20 20H14.41L20 14.41V20M20 9.59L17.91 7.5L20 5.41V9.59Z",
        })
    ]))
}
