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
            d: "M8.11,1.75C9.3,1.25 10.62,1 12,1C18.08,1 23,5.92 23,12C23,18.08 18.08,23 12,23C5.92,23 1,18.08 1,12C1,10.62 1.25,9.3 1.72,8.08C2.24,8.61 2.83,8.96 3.45,9.18C3.16,10.07 3,11 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3C11,3 10.07,3.16 9.18,3.45C8.96,2.83 8.61,2.24 8.11,1.75M4.93,2.93C6.03,2.93 6.93,3.82 6.93,4.93A2,2 0 0,1 4.93,6.93C3.82,6.93 2.93,6.03 2.93,4.93C2.93,3.82 3.82,2.93 4.93,2.93M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7Z",
        })
    ]))
}
