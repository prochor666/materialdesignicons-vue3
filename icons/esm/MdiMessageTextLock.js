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
            d: "M20.5 0A2.5 2.5 0 0 0 18 2.5V3A1 1 0 0 0 17 4V8A1 1 0 0 0 18 9H23A1 1 0 0 0 24 8V4A1 1 0 0 0 23 3V2.5A2.5 2.5 0 0 0 20.5 0M20.5 1A1.5 1.5 0 0 1 22 2.5V3H19V2.5A1.5 1.5 0 0 1 20.5 1M4 2A2 2 0 0 0 2 4V22L6 18H20A2 2 0 0 0 22 16V11H17C15.89 11 15 10.11 15 9V2H4M6 6H13V8H6V6M6 9H13V11H6V9M6 12H14V14H6V12Z",
        })
    ]))
}
