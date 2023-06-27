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
            d: "M14.43 16.11L15.28 14H16V13H20V11H16V10H15.28L14.43 7.89C14 6.75 12.87 6 11.65 6H9.35C8.13 6 7 6.75 6.57 7.89L5.37 10.89C5.08 11.6 5.08 12.4 5.37 13.11L6.57 16.11C7 17.25 8.13 18 9.35 18H11.65C12.87 18 14 17.25 14.43 16.11M9.35 8H11.65C12.06 8 12.42 8.25 12.57 8.63L13.12 10H7.88L8.43 8.63C8.58 8.25 8.95 8 9.35 8M8.43 15.37L7.88 14H13.12L12.57 15.37C12.42 15.75 12.05 16 11.65 16H9.35C8.95 16 8.58 15.75 8.43 15.37Z",
        })
    ]))
}
