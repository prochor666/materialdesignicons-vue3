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
            d: "M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12M15.6 13.72A4 4 0 0 0 16 12A4 4 0 0 0 12 8V10L8.88 7L12 4V6A6 6 0 0 1 18 12A5.9 5.9 0 0 1 17.07 15.19M6 12A5.9 5.9 0 0 1 6.93 8.81L8.4 10.28A4 4 0 0 0 8 12A4 4 0 0 0 12 16V14L15 17L12 20V18A6 6 0 0 1 6 12Z",
        })
    ]))
}