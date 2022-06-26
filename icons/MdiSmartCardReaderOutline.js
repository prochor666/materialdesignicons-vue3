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
            d: "M14.5 8.5A2.5 2.5 0 1 0 17 11A2.5 2.5 0 0 0 14.5 8.5M8.25 6H7V16H8.25C9.91 16 10.75 12.66 10.75 11S9.91 6 8.25 6M19 2H5A2.07 2.07 0 0 0 3 4V18H5V4H19V18H21V4A2.07 2.07 0 0 0 19 2M23 22H1V21A2 2 0 0 1 3 19H21A2 2 0 0 1 23 21Z",
        })
    ]))
}
