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
            d: "M20,7H4A2,2 0 0,0 2,9V15A2,2 0 0,0 4,17H5V18C5,18.6 5.4,19 6,19H8C8.6,19 9,18.6 9,18V17H15V18C15,18.6 15.4,19 16,19H18C18.6,19 19,18.6 19,18V17H20A2,2 0 0,0 22,15V9A2,2 0 0,0 20,7M14,12H4V10H14V12M18,13A2,2 0 0,1 16,11A2,2 0 0,1 18,9A2,2 0 0,1 20,11A2,2 0 0,1 18,13M6,15H4V14H6V15M10,15H8V14H10V15M14,15H12V14H14V15Z",
        })
    ]))
}
