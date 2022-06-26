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
            d: "M14,10V14A0.5,0.5 0 0,1 13.5,14.5H12.5V9.5H13.5A0.5,0.5 0 0,1 14,10M21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M9.5,9.5A1.5,1.5 0 0,0 8,8H4.5V9.5H8V11.25H5.5V12.75H8V14.5H4.5V16H8A1.5,1.5 0 0,0 9.5,14.5M15.5,9.5A1.5,1.5 0 0,0 14,8H11V16H14A1.5,1.5 0 0,0 15.5,14.5",
        })
    ]))
}