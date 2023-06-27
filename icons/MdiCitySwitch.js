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
            d: "M21 15V9H15V3L12 0L9 3V5H3V15H21M19 13H17V11H19V13M11 5V3H13V5H11M11 9V7H13V9H11M11 13V11H13V13H11M7 9H5V7H7V9M7 13H5V11H7V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17Z",
        })
    ]))
}
