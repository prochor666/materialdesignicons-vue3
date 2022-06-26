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
            d: "M3 3H15V5H3V3M2 21H16V6H2V21M5 12H7.5V9.5H10.5V12H13V15H10.5V17.5H7.5V15H5V12M20 6C18.3 6 17 7.8 17 10C17 11.8 17.8 13.2 19 13.8V21H21V13.8C22.2 13.3 23 11.8 23 10C23 7.8 21.7 6 20 6Z",
        })
    ]))
}
