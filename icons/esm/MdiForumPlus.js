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
            d: "M21 6H19V12.1C20.2 12.3 21.2 12.8 22 13.5V7C22 6.5 21.5 6 21 6M6 17C6 17.5 6.5 18 7 18H12C12 16.9 12.3 15.9 12.8 15H6V17M16 2H3C2.5 2 2 2.5 2 3V17L6 13H14.7C15.4 12.5 16.2 12.2 17 12.1V3C17 2.5 16.5 2 16 2M17 14H19V17H22V19H19V22H17V19H14V17H17V14Z",
        })
    ]))
}
