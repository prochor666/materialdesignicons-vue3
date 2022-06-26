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
            d: "M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16M13 18.21C12.5 18.7 11.78 19 11 19C9.35 19 8 17.65 8 16V13H14V14.69C14.5 13.92 15.2 13.27 16 12.81V11H6V16C6 17.64 6.81 19.09 8.03 20H4V4H6V6C6 6.55 6.45 7 7 7H15C15.55 7 16 6.55 16 6V4H18V2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H14.54C13.63 21 13.06 19.67 13 18.21M10 9C10 9.55 10.45 10 11 10S12 9.55 12 9 11.55 8 11 8 10 8.45 10 9Z",
        })
    ]))
}
