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
            d: "M23 19L20 16V18H16V20H20V22L23 19M13.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8V13.1C19.7 13 19.3 13 19 13S18.3 13 18 13.1V9H13V4H6V20H13.1C13.2 20.7 13.5 21.4 13.8 22M8 12H16V13.8C15.9 13.9 15.8 13.9 15.7 14H8V12M8 16H13V18H8V16Z",
        })
    ]))
}
