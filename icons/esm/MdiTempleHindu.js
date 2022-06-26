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
            d: "M6.6 11H17.4L16.5 8H7.5L6.6 11M20 11V13H4V11H2V22H10V17H14V22H22V11H20M15.9 6L15 3V1H13V3H11V1H9V3.1L8.1 6H15.9Z",
        })
    ]))
}
