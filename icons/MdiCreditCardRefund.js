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
            d: "M18 11H6A2 2 0 0 0 4 13V21A2 2 0 0 0 6 23H18A2 2 0 0 0 20 21V13A2 2 0 0 0 18 11M18 17H6V14H18M17 5V10H15.5V6.5H9.88L12.3 8.93L11.24 10L7 5.75L11.24 1.5L12.3 2.57L9.88 5Z",
        })
    ]))
}
