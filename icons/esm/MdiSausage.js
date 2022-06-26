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
            d: "M19 5.3C20.2 5.8 21 7.1 21 8.5C21 15.4 15.4 21 8.5 21C7.1 21 5.9 20.2 5.3 19L3 20.5V14.5L5.3 16C5.9 14.8 7.1 14 8.5 14C11.5 14 14 11.5 14 8.5C14 7.1 14.8 5.9 16 5.3L14.5 3H20.5L19 5.3Z",
        })
    ]))
}
