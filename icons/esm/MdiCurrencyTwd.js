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
            d: "M3,11H21V13H15V19H21V21H15A2,2 0 0,1 13,19V13H10.35L5.73,21L4,20L8.04,13H3V11M5,3H19V5H5V3Z",
        })
    ]))
}
