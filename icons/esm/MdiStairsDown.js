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
            d: "M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M4.83 8.34L10.34 2.83L12.17 4.66L6.66 10.17L8.5 12H3V6.5L4.83 8.34Z",
        })
    ]))
}
