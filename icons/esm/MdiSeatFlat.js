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
            d: "M22,11V13H9V7H18A4,4 0 0,1 22,11M2,14V16H8V18H16V16H22V14M7.14,12.1C8.3,10.91 8.28,9 7.1,7.86C5.91,6.7 4,6.72 2.86,7.9C1.7,9.09 1.72,11 2.9,12.14C4.09,13.3 6,13.28 7.14,12.1Z",
        })
    ]))
}
