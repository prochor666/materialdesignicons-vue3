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
            d: "M21 11.11V7A2 2 0 0 0 19 5H15V3A2 2 0 0 0 13 1H9A2 2 0 0 0 7 3V5H3A2 2 0 0 0 1 7V18A2 2 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M19 20A5 5 0 0 1 13 20A5 5 0 1 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13",
        })
    ]))
}
