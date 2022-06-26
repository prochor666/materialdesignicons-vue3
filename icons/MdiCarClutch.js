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
            d: "M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z",
        })
    ]))
}
