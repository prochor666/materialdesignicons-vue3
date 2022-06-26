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
            d: "M10,3L8,16H16L14,3H10M11.5,5.75A0.75,0.75 0 0,1 12.25,6.5A0.75,0.75 0 0,1 11.5,7.25A0.75,0.75 0 0,1 10.75,6.5A0.75,0.75 0 0,1 11.5,5.75M12.5,8.5A1,1 0 0,1 13.5,9.5A1,1 0 0,1 12.5,10.5A1,1 0 0,1 11.5,9.5A1,1 0 0,1 12.5,8.5M11.5,12A1.5,1.5 0 0,1 13,13.5A1.5,1.5 0 0,1 11.5,15A1.5,1.5 0 0,1 10,13.5A1.5,1.5 0 0,1 11.5,12M8,17L10,19L8,21H16L14,19L16,17H8Z",
        })
    ]))
}
