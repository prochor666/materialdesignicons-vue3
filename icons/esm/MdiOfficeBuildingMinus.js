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
            d: "M13.4 21C13.2 20.4 13 19.7 13 19C13 17.5 13.6 16.1 14.5 15H13V13H15V14.5C15.6 14 16.3 13.6 17 13.3V3H3V21H9V17.5H11V21H13.4M13 5H15V7H13V5M13 9H15V11H13V9M7 19H5V17H7V19M7 15H5V13H7V15M7 11H5V9H7V11M7 7H5V5H7V7M9 5H11V7H9V5M9 9H11V11H9V9M9 15V13H11V15H9M23 18V20H15V18H23Z",
        })
    ]))
}
