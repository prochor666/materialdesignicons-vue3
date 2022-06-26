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
            d: "M18 8H8C6.9 8 6 8.9 6 10V16C6 17.11 6.9 18 8 18H18C19.11 18 20 17.11 20 16V10C20 8.9 19.11 8 18 8M14 16H8V14H14V16M18 12H8V10H18V12M22 6H4V22H2V2H4V4H22V6Z",
        })
    ]))
}
