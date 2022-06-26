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
            d: "M1,5.27L5,9.27V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H17.73L19.73,24L21,22.72L2.28,4L1,5.27M15,20A1,1 0 0,0 14,19H13V17.27L15.73,20H15M17.69,16.87L5.13,4.31C5.41,3.55 6.14,3 7,3H17A2,2 0 0,1 19,5V15C19,15.86 18.45,16.59 17.69,16.87M22,20V21.18L20.82,20H22Z",
        })
    ]))
}
