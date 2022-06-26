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
            d: "M18 2H12V9L9.5 7.5L7 9V2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V4A2 2 0 0 0 18 2M14 12A2 2 0 1 1 12 14A2 2 0 0 1 14 12M18 20H10V19C10 17.67 12.67 17 14 17S18 17.67 18 19Z",
        })
    ]))
}
