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
            d: "M3 4.9V4.95L3.05 4.94L4.11 6H3V18H16.11L20.84 22.73L22.11 21.46L4.57 3.91L2.39 1.73L1.11 3L3 4.9M6.41 9.41C6.61 9.22 6.76 9 6.86 8.75L9.16 11.05C9.05 11.35 9 11.67 9 12C9 12.8 9.32 13.56 9.88 14.12C10.44 14.68 11.2 15 12 15C12.33 15 12.65 14.95 12.95 14.84L14.11 16H7C7 15.47 6.79 14.96 6.41 14.59C6.04 14.21 5.53 14 5 14V10C5.53 10 6.04 9.79 6.41 9.41M17.69 14.5L21 17.8V6H9.2L11.2 8H17C17 8.53 17.21 9.04 17.59 9.41C17.96 9.79 18.47 10 19 10V14C18.5 14 18.05 14.18 17.69 14.5Z",
        })
    ]))
}
