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
            d: "M13 18.9L19.1 12.8L21.2 14.9L15.1 21H13V18.9M21.4 11.3L22.7 12.6C22.9 12.8 22.9 13.1 22.7 13.3L21.7 14.3L19.6 12.3L20.6 11.3C20.7 11.2 20.8 11.1 21 11.1C21.2 11.1 21.3 11.2 21.4 11.3M11 18H4V12H17.1L22 7.1V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M4 6H20V8H4V6Z",
        })
    ]))
}
