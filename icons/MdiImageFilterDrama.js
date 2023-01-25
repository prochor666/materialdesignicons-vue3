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
            d: "M6.5 20H18.5Q20.38 20 21.69 18.69 23 17.38 23 15.5 23 13.8 21.79 12.4 20.58 11 19 11 19 8.05 17 6.03 14.95 4 12 4 9.88 4 8.29 5.08 6.7 6.15 6.25 8 8.8 8.45 10.4 10.19 12 11.93 12 14.5H10Q10 12.68 8.66 11.34 7.33 10 5.5 10T2.34 11.34Q1 12.68 1 14.5 1 16.8 2.6 18.4T6.5 20Z",
        })
    ]))
}
