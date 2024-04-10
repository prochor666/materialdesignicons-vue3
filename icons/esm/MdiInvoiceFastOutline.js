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
            d: "M19.5 19.32L22 21V5H7V21L9.5 19.32L12 21L14.5 19.32L17 21L19.5 19.32M20 7V16.57L17 18.59L14.5 16.9L12 18.59L9 16.57V7H20M2 8C2 7.4 2.4 7 3 7H5V9H3C2.4 9 2 8.6 2 8M2 11C1.4 11 1 11.4 1 12C1 12.6 1.4 13 2 13H5V11H2M0 16C0 15.4 .4 15 1 15H5V17H1C.4 17 0 16.6 0 16Z",
        })
    ]))
}
