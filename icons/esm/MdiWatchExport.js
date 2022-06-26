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
            d: "M14,11H19L16.5,8.5L17.92,7.08L22.84,12L17.92,16.92L16.5,15.5L19,13H14V11M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.4,6 14.69,6.5 15.71,7.29L17.13,5.87L16.95,5.73L16,0H8L7.05,5.73C5.19,7.19 4,9.46 4,12C4,14.55 5.19,16.81 7.05,18.27L8,24H16L16.95,18.27L17.13,18.13L15.71,16.71C14.69,17.5 13.4,18 12,18Z",
        })
    ]))
}
