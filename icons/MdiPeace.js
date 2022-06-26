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
            d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.41V19.93C9.58,19.75 8.23,19.19 7.1,18.31L11,14.41M13,14.41L16.9,18.31C15.77,19.19 14.42,19.75 13,19.93V14.41M4,12C4,7.97 7,4.57 11,4.07V11.59L5.69,16.9C4.59,15.5 4,13.78 4,12M18.31,16.9L13,11.59V4.07C17,4.57 20,7.97 20,12C20,13.78 19.41,15.5 18.31,16.9Z",
        })
    ]))
}
