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
            d: "M7.5,2A2,2 0 0,1 9.5,4A2,2 0 0,1 7.5,6A2,2 0 0,1 5.5,4A2,2 0 0,1 7.5,2M6,7H9A2,2 0 0,1 11,9V14.5H9.5V22H5.5V14.5H4V9A2,2 0 0,1 6,7M16.5,2A2,2 0 0,1 18.5,4A2,2 0 0,1 16.5,6A2,2 0 0,1 14.5,4A2,2 0 0,1 16.5,2M15,7H18A2,2 0 0,1 20,9V14.5H18.5V22H14.5V14.5H13V9A2,2 0 0,1 15,7Z",
        })
    ]))
}
