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
            d: "M17,13V11H7V13H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19M12,7A1,1 0 0,0 11,8A1,1 0 0,0 12,9A1,1 0 0,0 13,8A1,1 0 0,0 12,7M12,15A1,1 0 0,0 11,16A1,1 0 0,0 12,17A1,1 0 0,0 13,16A1,1 0 0,0 12,15Z",
        })
    ]))
}
