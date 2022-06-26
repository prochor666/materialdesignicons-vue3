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
            d: "M20 19.35V19.34L6.66 6L6.07 5.41L2.39 1.73L1.11 3L4.26 6.15C3.5 6.44 3 7.16 3 8V15C3 15.82 3.5 16.5 4.2 16.83L8 18.6V20L7 21V22H20.11L20.84 22.73L22.11 21.46L20 19.35M8 16.39L5 15V8H6.11L8 9.89V16.39M8 4L7 3V2H21V3L20 4V16.8L10.2 7H18V4H10V6.8L8 4.8V4Z",
        })
    ]))
}
