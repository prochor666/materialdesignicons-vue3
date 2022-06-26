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
            d: "M18 12.22V9L13 6.5V5H15V3H13V1H11V3H9V5H11V6.5L6 9V12.22L2 14V22H11V18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18V22H22V14L18 12.22M20 20H15V17.96C15 16.27 13.65 14.9 12 14.9C10.35 14.9 9 16.27 9 17.96V20H4V15.21L8 13.4V10.05L12 8L16 10.04V13.39L20 15.2V20M12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5Z",
        })
    ]))
}
