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
            d: "M4 15V18C4 20.21 5.79 22 8 22H16C18.21 22 20 20.21 20 18V15H4M20 13V10C20 8.14 18.72 6.59 17 6.14V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V6.14C5.28 6.59 4 8.14 4 10V13H20M9 4H15V6H13C13 5.45 12.55 5 12 5S11 5.45 11 6H9V4Z",
        })
    ]))
}
