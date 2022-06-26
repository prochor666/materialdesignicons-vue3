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
            d: "M7 3A5 5 0 0 0 9 7A5 5 0 0 0 7 11A5 5 0 0 0 11 15.9V18H9V20H11V22H13V20H15V18H13V15.9A5 5 0 0 0 17 11A5 5 0 0 0 15 7A5 5 0 0 0 17 3H15A3 3 0 0 1 12 6A3 3 0 0 1 9 3M12 8A3 3 0 0 1 15 11A3 3 0 0 1 12 14A3 3 0 0 1 9 11A3 3 0 0 1 12 8Z",
        })
    ]))
}
