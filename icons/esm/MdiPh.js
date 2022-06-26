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
            d: "M13 7V17H15V13H17V17H19V7H17V11H15V7H13M11 15V13C11 11.9 10.11 11 9 11H5V21H7V17H9C10.11 17 11 16.11 11 15M9 15H7V13H9V15Z",
        })
    ]))
}
