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
            d: "M2.39 1.73L1.11 3L2.32 4.21C2.12 4.56 2 4.95 2 5.38V19.63C2 20.94 3.06 22 4.38 22H19.63C19.78 22 19.92 22 20.07 21.96L20.84 22.73L22.11 21.46L2.39 1.73M15 18H13V15H11V18H9V15H7V18H5V9H7.11L15 16.89V18M9.2 6L6.2 3H19.63C20.94 3 22 4.06 22 5.38V18.8L19 15.8V9H15V6H9.2Z",
        })
    ]))
}