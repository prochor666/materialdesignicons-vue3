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
            d: "M7 8H17C17.3 8 17.6 8.1 17.8 8.1C17.9 7.8 18 7.4 18 7.1C18 5.8 17.4 4.6 16.3 3.9L12 1L7.7 3.8C6.7 4.6 6 5.8 6 7.1C6 7.5 6.1 7.8 6.2 8.1C6.4 8.1 6.7 8 7 8M24 7C24 5.9 22 4 22 4S20 5.9 20 7C20 7.7 20.4 8.4 21 8.7V13H19V11C19 9.9 18.1 9 17 9H7C5.9 9 5 9.9 5 11V13H3V8.7C3.6 8.4 4 7.7 4 7C4 5.9 2 4 2 4S0 5.9 0 7C0 7.7 .4 8.4 1 8.7V21H10V17C10 15.9 10.9 15 12 15S14 15.9 14 17V21H23V8.7C23.6 8.4 24 7.7 24 7Z",
        })
    ]))
}
