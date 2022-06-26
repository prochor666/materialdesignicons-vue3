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
            d: "M15.5 19V21H13.73C13.39 21.6 12.74 22 12 22C11.26 22 10.61 21.6 10.27 21H8.5V19H10.27C10.44 18.7 10.7 18.44 11 18.27V17H10C9.45 17 9 16.55 9 16V13H6V17C6 17.55 5.55 18 5 18H3C2.45 18 2 17.55 2 17V8C2 7.45 2.45 7 3 7H5C5.55 7 6 7.45 6 8V11H9V8C9 7.45 9.45 7 10 7H11V6H10C9.45 6 9 5.55 9 5V4C9 3.45 9.45 3 10 3H14C14.55 3 15 3.45 15 4V5C15 5.55 14.55 6 14 6H13V7H14C14.55 7 15 7.45 15 8V11H18V8C18 7.45 18.45 7 19 7H21C21.55 7 22 7.45 22 8V17C22 17.55 21.55 18 21 18H19C18.45 18 18 17.55 18 17V13H15V16C15 16.55 14.55 17 14 17H13V18.27C13.3 18.44 13.56 18.7 13.73 19H15.5M3 16V17H5V16H3M3 14V15H5V14H3M3 12V13H5V12H3M3 10V11H5V10H3M3 8V9H5V8H3M19 16V17H21V16H19M19 14V15H21V14H19M19 12V13H21V12H19M19 10V11H21V10H19M19 8V9H21V8H19Z",
        })
    ]))
}
