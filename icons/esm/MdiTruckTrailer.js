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
            d: "M22,15V17H10A3,3 0 0,1 7,20A3,3 0 0,1 4,17H2V6A2,2 0 0,1 4,4H17A2,2 0 0,1 19,6V15H22M7,16A1,1 0 0,0 6,17A1,1 0 0,0 7,18A1,1 0 0,0 8,17A1,1 0 0,0 7,16Z",
        })
    ]))
}
