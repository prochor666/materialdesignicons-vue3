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
            d: "M14 17V19H22V17M8 16H12V12H8V16M12 12H16V8H12V12M2 2V22H13.5C13 21.4 12.6 20.7 12.3 20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12.4C20.7 12.7 21.4 13.1 22 13.6V2H2Z",
        })
    ]))
}
