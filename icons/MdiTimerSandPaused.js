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
            d: "M22 6V18H16L12 14L8 18H2V6H8L12 10L16 6M7.5 16L11.5 12L7.5 8H4V16M12.5 12L16.5 16H20V8H16.5M18 12V14H17.2L15.2 12M8.8 12L6.8 14H6V12Z",
        })
    ]))
}
