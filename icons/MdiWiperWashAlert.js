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
            d: "M11 6C11 5.7 11.1 4.6 11.8 3.8L10 2.4L8.2 3.9C8.9 4.6 9 5.7 9 6C2.7 6.4 0 11 0 11L7 18C7 18 7.7 16.7 9 16.2V18.3C8.4 18.6 8 19.3 8 20C8 21.11 8.9 22 10 22S12 21.11 12 20C12 19.3 11.6 18.6 11 18.3V16.2C12.3 16.7 13 18 13 18L20 11C20 11 17.3 6.5 11 6M9 14.1C8.2 14.3 7.5 14.6 6.9 15.1L2.7 10.9C3.8 9.8 5.8 8.3 9 8.1V14.1M13.1 15.1C12.5 14.7 11.8 14.3 11 14.1V8.1C14.2 8.4 16.2 9.8 17.3 10.9L13.1 15.1M16 1.3L15.3 3.2C14.6 2.9 13.5 2.9 12.7 3.2L12 1.3C13.2 .9 14.8 .9 16 1.3M19 6H17C17 6 17 4.7 16.2 3.9L17.7 2.6C19 4 19 5.9 19 6M2.2 2.6L3.7 3.9C3 4.7 3 6 3 6H1C1 5.9 1 4 2.2 2.6M8 1.3L7.3 3.2C6.6 2.9 5.5 2.9 4.7 3.2L4 1.3C5.2 .9 6.8 .9 8 1.3M22 12V7H24V13H22M22 17H24V15H22",
        })
    ]))
}
