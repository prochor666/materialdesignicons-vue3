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
            d: "M1,4.27L2.28,3L21,21.72L19.73,23L18.27,21.54C17.93,21.83 17.5,22 17,22H7C5.97,22 5.13,21.23 5,20.23L3.53,6.8L1,4.27M18.32,8L18.77,4H5.82L3.82,2H21L19.29,17.47L9.82,8H18.32Z",
        })
    ]))
}
