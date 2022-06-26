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
            d: "M15 20C15 19.45 14.55 19 14 19H13V17H19C20.11 17 21 16.11 21 15V3C21 1.9 20.11 1 19 1H5C3.9 1 3 1.9 3 3V15C3 16.11 3.9 17 5 17H11V19H10C9.45 19 9 19.45 9 20H2V22H9C9 22.55 9.45 23 10 23H14C14.55 23 15 22.55 15 22H22V20H15M13 5H19V9H13V5M13 11H19V15H13V11M5 5H11V9H5V5M5 15V11H11V15H5Z",
        })
    ]))
}
