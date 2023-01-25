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
            d: "M22.1 21.5L2.4 1.7L1.1 3L5 6.9V21H7V14C7 14 7.8 12.4 10.2 12.1L20.9 22.8L22.1 21.5M7 11.5V8.9L8.7 10.6C7.7 11 7 11.5 7 11.5M9.4 6.2L7.8 4.6C8.7 4.3 9.8 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19.2 13.5 17.1 13.9L15 11.8C15.3 11.9 15.6 12 16 12C18 12 18 11 18 11V7.5C18 7.5 17 8 16 8C14 8 13 6 11 6C10.5 6 9.9 6.1 9.4 6.2Z",
        })
    ]))
}