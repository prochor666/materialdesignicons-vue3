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
            d: "M9 11H18V13H9V11M18 7H6V9H18V7M22 4V22L18 18H4C2.9 18 2 17.11 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.89 22 4M20 4H4V16H18.83L20 17.17V4Z",
        })
    ]))
}
