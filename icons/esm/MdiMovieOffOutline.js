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
            d: "M2.39 1.73L1.11 3L2.65 4.54C2.25 4.9 2 5.42 2 6V18C2 19.11 2.9 20 4 20H18.11L20.84 22.73L22.11 21.46L2.39 1.73M4 18V6.47L5.76 10H8.11L16.11 18H4M8.8 5.6L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V10H13.2L8.8 5.6Z",
        })
    ]))
}
