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
            d: "M7 2C5.9 2 5 2.9 5 4V6H4C2.9 6 2 6.9 2 8V20H4V21C4 21.55 4.45 22 5 22H6C6.55 22 7 21.55 7 21V20H17V21C17 21.55 17.45 22 18 22H19C19.55 22 20 21.55 20 21V20H22V8C22 6.9 21.11 6 20 6H19V4C19 2.9 18.11 2 17 2H7M14 10V8H20V10H14M14 14V12H20V14H14M7 4H17V6H7V4M7 8V12H9L6 18V14H4L7 8Z",
        })
    ]))
}
