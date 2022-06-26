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
            d: "M20,12C18.61,12 17.22,11.53 16,10.67C13.56,12.38 10.44,12.38 8,10.67C6.78,11.53 5.39,12 4,12H2V14H4C5.37,14 6.74,13.65 8,13C10.5,14.3 13.5,14.3 16,13C17.26,13.65 18.62,14 20,14H22V12",
        })
    ]))
}