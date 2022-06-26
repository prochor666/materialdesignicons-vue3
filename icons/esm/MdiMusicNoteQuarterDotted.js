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
            d: "M12 13V13.56A3.96 3.96 0 0 0 10 13A4 4 0 1 0 14 17V3H12M16.5 17A1.5 1.5 0 1 1 15 18.5A1.5 1.5 0 0 1 16.5 17Z",
        })
    ]))
}
