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
            d: "M2 7H8V9H4V11H7V13H4V17H2V7M16 7H20C21.11 7 22 7.9 22 9V11C22 12.11 21.11 13 20 13H18V15H22V17H16V13C16 11.9 16.9 11 18 11H20V9H16V7M10 7H14V17H12V9H10V7Z",
        })
    ]))
}
