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
            d: "M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",
        })
    ]))
}
