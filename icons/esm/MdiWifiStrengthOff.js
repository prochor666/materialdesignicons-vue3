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
            d: "M3.27,1.44L2,2.72L4.05,4.77C2.75,5.37 1.5,6.11 0.38,7C4.41,12.06 12,21.5 12,21.5L15.91,16.63L19.23,19.95L20.5,18.68M12,3C10.6,3 9.21,3.17 7.86,3.5L18.18,13.81C20,11.5 22.05,9 23.65,7C20.32,4.41 16.22,3 12,3Z",
        })
    ]))
}
