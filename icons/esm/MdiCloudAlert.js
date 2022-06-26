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
            d: "M19 20H6C2.7 20 0 17.3 0 14C0 10.9 2.3 8.4 5.3 8C6.6 5.6 9.1 4 12 4C15.6 4 18.7 6.6 19.4 10C22 10.2 24 12.3 24 15C24 17.7 21.7 20 19 20M11 15V17H13V15H11M11 13H13V7H11V13Z",
        })
    ]))
}
