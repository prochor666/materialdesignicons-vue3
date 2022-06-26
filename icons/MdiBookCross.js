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
            d: "M5.81,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20C20,21.05 19.05,22 18,22H6C4.95,22 4,21.05 4,20V4C4,3 4.83,2.09 5.81,2M13,10V13H10V15H13V20H15V15H18V13H15V10H13Z",
        })
    ]))
}
