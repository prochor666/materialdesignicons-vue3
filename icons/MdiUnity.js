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
            d: "M10.11,17H7.5L2.59,12L7.5,7H10.11L11.42,4.74L18.21,3L20.08,9.74L18.77,12L20.08,14.26L18.21,21L11.42,19.26L10.11,17M10.25,16.75L15.38,18.13L12.42,13H6.5L10.25,16.75M17.12,17.13L18.5,12L17.12,6.87L14.15,12L17.12,17.13M10.25,7.25L6.5,11H12.42L15.38,5.87L10.25,7.25Z",
        })
    ]))
}
