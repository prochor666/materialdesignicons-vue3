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
            d: "M15.94 10.28C15.66 7.87 14 6 12 6S8.34 7.87 8.06 10.28C4.5 10.82 2 12.06 2 13.5C2 15.43 6.5 17 12 17S22 15.43 22 13.5C22 12.06 19.5 10.82 15.94 10.28Z",
        })
    ]))
}
