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
            d: "M2,11H7L4.5,8.5L5.92,7.08L10.84,12L5.92,16.92L4.5,15.5L7,13H2V11M12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6C10.6,6 9.31,6.5 8.29,7.29L6.87,5.87L7.05,5.73L8,0H16L16.95,5.73C18.81,7.19 20,9.45 20,12C20,14.54 18.81,16.81 16.95,18.27L16,24H8L7.05,18.27L6.87,18.13L8.29,16.71C9.31,17.5 10.6,18 12,18Z",
        })
    ]))
}
