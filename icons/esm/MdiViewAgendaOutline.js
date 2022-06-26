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
            d: "M21 13H3A1 1 0 0 0 2 14V20A1 1 0 0 0 3 21H21A1 1 0 0 0 22 20V14A1 1 0 0 0 21 13M20 19H4V15H20M21 3H3A1 1 0 0 0 2 4V10A1 1 0 0 0 3 11H21A1 1 0 0 0 22 10V4A1 1 0 0 0 21 3M20 9H4V5H20Z",
        })
    ]))
}
