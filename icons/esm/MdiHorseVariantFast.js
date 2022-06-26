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
            d: "M23 8V16L20 17L16.91 11.5C16.65 11.04 15.92 11.27 16 11.81L17 21L7 17L8.15 8.94C8.64 5.53 11.56 3 15 3H23L21.42 5.37C22.36 5.88 23 6.86 23 8M4 5H7.58C8.08 4.24 8.7 3.57 9.41 3H4C3.45 3 3 3.45 3 4S3.45 5 4 5M5.84 11H2C1.45 11 1 11.45 1 12S1.45 13 2 13H5.55L5.84 11M3 9H6.12L6.17 8.66C6.25 8.08 6.39 7.53 6.58 7H3C2.45 7 2 7.45 2 8S2.45 9 3 9Z",
        })
    ]))
}
