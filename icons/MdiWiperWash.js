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
            d: "M13,6C13,5.7 13.1,4.6 13.8,3.8L12,2.4L10.2,3.9C10.9,4.6 11,5.7 11,6C4.7,6.4 2,11 2,11L9,18C9,18 9.7,16.7 11,16.2V18.3C10.4,18.6 10,19.3 10,20A2,2 0 0,0 12,22A2,2 0 0,0 14,20C14,19.3 13.6,18.6 13,18.3V16.2C14.3,16.7 15,18 15,18L22,11C22,11 19.3,6.5 13,6M11,14.1C10.2,14.3 9.5,14.6 8.9,15.1L4.7,10.9C5.8,9.8 7.8,8.3 11,8.1V14.1M15.1,15.1C14.5,14.7 13.8,14.3 13,14.1V8.1C16.2,8.4 18.2,9.8 19.3,10.9L15.1,15.1M18,1.3L17.3,3.2C16.6,2.9 15.5,2.9 14.7,3.2L14,1.3C15.2,0.9 16.8,0.9 18,1.3M21,6H19C19,6 19,4.7 18.2,3.9L19.7,2.6C21,4 21,5.9 21,6M4.2,2.6L5.7,3.9C5,4.7 5,6 5,6H3C3,5.9 3,4 4.2,2.6M10,1.3L9.3,3.2C8.6,2.9 7.5,2.9 6.7,3.2L6,1.3C7.2,0.9 8.8,0.9 10,1.3Z",
        })
    ]))
}
