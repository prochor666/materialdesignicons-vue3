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
            d: "M5,3H7L10,5L7,7V8.33C8.47,8.12 10.18,8 12,8C13.82,8 15.53,8.12 17,8.33V3H19L22,5L19,7V8.71C20.85,9.17 22,9.8 22,10.5C22,11.88 17.5,13 12,13C6.5,13 2,11.88 2,10.5C2,9.8 3.15,9.17 5,8.71V3M12,9.5C8.69,9.5 7,9.67 7,10.5C7,11.33 8.69,11.5 12,11.5C15.31,11.5 17,11.33 17,10.5C17,9.67 15.31,9.5 12,9.5M12,14.75C15.81,14.75 19.2,14.08 21.4,13.05L20,21H15V19A2,2 0 0,0 13,17H11A2,2 0 0,0 9,19V21H4L2.6,13.05C4.8,14.08 8.19,14.75 12,14.75Z",
        })
    ]))
}
