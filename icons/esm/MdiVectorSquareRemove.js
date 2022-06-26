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
            d: "M13 19C13 18.7 13 18.3 13.1 18H8V16H6V8H8V6H16V8H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V8H22V2H16V4H8V2H2V8H4V16H2V22H8V20H13.1C13 19.7 13 19.3 13 19M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20M22.5 16.9L20.4 19L22.5 21.1L21.1 22.5L19 20.4L16.9 22.5L15.5 21.1L17.6 19L15.5 16.9L16.9 15.5L19 17.6L21.1 15.5L22.5 16.9Z",
        })
    ]))
}
