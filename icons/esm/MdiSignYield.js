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
            d: "M20.5 3H3.5C2.4 3 1.6 4.3 2.2 5.3L10.7 20.2C11 20.7 11.5 21 12 21S13 20.7 13.3 20.2L21.8 5.3C22.4 4.3 21.6 3 20.5 3M12 18.5L4.3 5H19.6L12 18.5M6.9 6.5H17.1L12 15.5L6.9 6.5Z",
        })
    ]))
}
