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
            d: "M22.1 21.5L2.4 1.7L1.1 3L6.1 8H5.4L4.1 10.5L5.9 11.4L6.6 10H8.1L9.1 11L6.2 22H8.3L8.5 21.1L12 15.9L15.5 21.1L15.7 22H17.8L17 18.8L20.9 22.7L22.1 21.5M9.3 18.1L10.5 13.6L11.4 14.9L9.3 18.1M14.7 18.1L12.6 15L12.8 14.7L14.1 16L14.7 18.1M14.2 11H14.9L15.1 11.9L14.2 11M14.1 8H18.6L19.9 10.6L18.1 11.5L17.4 10H13.2L10.2 7L10.7 5H13.3L14.1 8M8.4 5.2L6.9 3.7L7.8 2H16.3L17.6 4.5L15.8 5.4L15 4H9L8.4 5.2Z",
        })
    ]))
}
