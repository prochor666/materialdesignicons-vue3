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
            d: "M10.5,5A8.5,8.5 0 0,0 2,13.5A8.5,8.5 0 0,0 10.5,22A8.5,8.5 0 0,0 19,13.5A8.5,8.5 0 0,0 10.5,5M13.5,13A2.5,2.5 0 0,1 11,10.5A2.5,2.5 0 0,1 13.5,8A2.5,2.5 0 0,1 16,10.5A2.5,2.5 0 0,1 13.5,13M19.5,2A2.5,2.5 0 0,0 17,4.5A2.5,2.5 0 0,0 19.5,7A2.5,2.5 0 0,0 22,4.5A2.5,2.5 0 0,0 19.5,2",
        })
    ]))
}
