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
            d: "M21 4A2.07 2.07 0 0 0 19 2H5A2.07 2.07 0 0 0 3 4V18H21M8.25 16H7V6H8.25C9.91 6 10.75 9.34 10.75 11S9.91 16 8.25 16M14.5 13.5A2.5 2.5 0 1 1 17 11A2.5 2.5 0 0 1 14.5 13.5M23 21V22H1V21A2 2 0 0 1 3 19H21A2 2 0 0 1 23 21Z",
        })
    ]))
}
