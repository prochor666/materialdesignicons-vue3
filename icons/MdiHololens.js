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
            d: "M12,8C12,8 22,8 22,11C22,11 22.09,14.36 21.75,14.25C21,11 12,11 12,11C12,11 3,11 2.25,14.25C1.91,14.36 2,11 2,11C2,8 12,8 12,8M12,12C20,12 20.75,14.25 20.75,14.25C19.75,17.25 19,18 15,18C12,18 13,16.5 12,16.5C11,16.5 12,18 9,18C5,18 4.25,17.25 3.25,14.25C3.25,14.25 4,12 12,12Z",
        })
    ]))
}
