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
            d: "M2 6H1L5 2L9 6H8V9H6V6H4V9H2V6M13 10.9L14.3 12H16V9H18V12H21V8H22L17 3L12 8H13V10.9M13.8 22C13.3 21.1 13 20.1 13 19C13 17.4 13.6 15.9 14.7 14.9L9 10L2 16H4V22H7V17H11V22H13.8M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z",
        })
    ]))
}
