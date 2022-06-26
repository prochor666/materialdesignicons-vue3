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
            d: "M9 19H11V22H9L9 19M13 22H15V19H13V22M2 2V4H22V2H2M9 14L9 17H15V14C17.5 12.57 20 11 20 6H4C4 11 6.5 12.57 9 14Z",
        })
    ]))
}
