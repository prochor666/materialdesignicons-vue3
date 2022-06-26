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
            d: "M7.2,18C6.54,18 6,17.46 6,16.8V13.2L6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12V13.2L18,16.8A1.2,1.2 0 0,1 16.8,18H14V14H16V12A4,4 0 0,0 12,8A4,4 0 0,0 8,12V14H10V18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",
        })
    ]))
}