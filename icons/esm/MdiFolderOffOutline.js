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
            d: "M2.39 1.73L1.11 3L2.64 4.53C2.25 4.9 2 5.42 2 6V18C2 19.11 2.9 20 4 20H18.11L20.84 22.73L22.11 21.46L2.39 1.73M4 18V8H6.11L16.11 18H4M11.2 8L7.2 4H10L12 6H20C21.1 6 22 6.89 22 8V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V8H11.2Z",
        })
    ]))
}
