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
            d: "M23 6V17H22C22 18.11 21.11 19 20 19S18 18.11 18 17H6C6 18.11 5.11 19 4 19S2 18.11 2 17H1V6H3V15H21V6H23M8 12H4V14H8V12M15 12H9V14H15V12M20 12H16V14H20V12M8 9H4V11H8V9M15 9H9V11H15V9M20 9H16V11H20V9M8 6H4V8H8V6M15 6H9V8H15V6M20 6H16V8H20V6Z",
        })
    ]))
}
