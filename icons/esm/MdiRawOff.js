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
            d: "M17.15 14.32L14.72 11.9L14 9H15.5L16.24 12L17 9H18.5L19.24 12L20 9H21.5L20 15H18.5L17.74 11.96L17.15 14.32M1.39 4.22L2.81 2.81L21.19 21.2L19.78 22.61L10.67 13.5H10.63L10.25 15H8.75L9.43 12.26L8 10.83V11.5C8 12.1 7.6 12.6 7.1 12.9L8 15H6.5L5.6 13H4.5V15H3V9H6.17L1.39 4.22M6.5 11.5V10.5H4.5V11.5H6.5Z",
        })
    ]))
}
