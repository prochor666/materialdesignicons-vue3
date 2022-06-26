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
            d: "M8 11H2V9H8C8.55 9 9 9.45 9 10C9 10.55 8.55 11 8 11M14.87 4.35L14.5 5.27L8.18 4.86L6.9 8H8C9.1 8 10 8.9 10 10S9.1 12 8 12H5.27L4.41 14.12L9.21 18.24L8.83 19.16L10.69 19.92L16.72 5.1L14.87 4.35M20.81 6.29L21.57 8.14L19.26 9.1L18.5 7.25L20.81 6.29M18.78 13.57L21.55 14.72L20.79 16.57L18 15.42L18.78 13.57M16.15 21.23L14.3 22L13.34 19.69L15.19 18.93L16.15 21.23Z",
        })
    ]))
}
