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
            d: "M8 17H16V19H8V17M2 5.6V10.4C2 11.3 2.5 12 3.2 12H20.9C21.5 12 22.1 11.3 22.1 10.4V5.6C22 4.7 21.5 4 20.8 4H3.2C2.5 4 2 4.7 2 5.6M10 9V7H9V9H10M5 9H7V7H5V9M20 10H4V6H20V10Z",
        })
    ]))
}
