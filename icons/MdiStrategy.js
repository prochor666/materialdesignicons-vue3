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
            d: "M6.91 5.5L9.21 7.79L7.79 9.21L5.5 6.91L3.21 9.21L1.79 7.79L4.09 5.5L1.79 3.21L3.21 1.79L5.5 4.09L7.79 1.79L9.21 3.21M22.21 16.21L20.79 14.79L18.5 17.09L16.21 14.79L14.79 16.21L17.09 18.5L14.79 20.79L16.21 22.21L18.5 19.91L20.79 22.21L22.21 20.79L19.91 18.5M20.4 6.83L17.18 11L15.6 9.73L16.77 8.23A9.08 9.08 0 0 0 10.11 13.85A4.5 4.5 0 1 1 7.5 13A4 4 0 0 1 8.28 13.08A11.27 11.27 0 0 1 16.43 6.26L15 5.18L16.27 3.6M10 17.5A2.5 2.5 0 1 0 7.5 20A2.5 2.5 0 0 0 10 17.5Z",
        })
    ]))
}
