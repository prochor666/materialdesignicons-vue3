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
            d: "M9 13V11H11V13M11 15V13H13V15M11 11V9H13V11M9 9V7H11V9M9 17V15H11V17M3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5M18 15V17H16V15M18 11V13H16V11M18 7V9H16V7M11 5V7H13V5H15V7H13V9H15V11H13V13H15V15H13V17H15V19H13V17H11V19H5V5Z",
        })
    ]))
}
