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
            d: "M23 17V19H15V17M3 3H21V5C19.9 5 19 5.9 19 7V12C18.3 12 17.63 12.12 17 12.34V5H7V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H13.08C13.2 19.72 13.45 20.39 13.8 21H7C5.9 21 5 20.11 5 19V7C5 5.9 4.11 5 3 5V3Z",
        })
    ]))
}
