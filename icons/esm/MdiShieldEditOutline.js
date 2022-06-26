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
            d: "M21.7 13.6L20.4 12.3C20.3 12.2 20.2 12.1 20 12.1C19.9 12.1 19.7 12.2 19.6 12.3L18.6 13.3L20.6 15.3L21.6 14.3C21.9 14.1 21.9 13.8 21.7 13.6M12 19.9V22H14.1L20.2 15.9L18.2 13.8L12 19.9M10 22.3C5.9 20.3 3 15.8 3 11V5L12 1L21 5V8.1L19 10.1V6.3L12 3.2L5 6.3V11.2C5 14.7 7.2 18.3 10 20.1V22.3Z",
        })
    ]))
}
