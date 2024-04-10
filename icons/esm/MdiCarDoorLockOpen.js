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
            d: "M22 21H11V16C11 15.26 10.6 14.61 10 14.26C10 14.18 10 14.09 10 14C10 12.87 9.63 11.84 9 11H20V5H11.83L7.28 9.55C6.6 9.2 5.82 9 5 9L11 3H21C21.27 3 21.5 3.11 21.71 3.29C21.9 3.5 22 3.74 22 4V21M19 14H16V16H19V14M7.8 16H3.5V13.5C3.5 12.7 4.2 12.2 5 12.2C5.8 12.2 6.5 12.7 6.5 13.5V14H7.8V13.5C7.8 12.1 6.4 11 5 11C3.6 11 2.2 12.1 2.2 13.5V16C1.6 16 1 16.6 1 17.2V20.7C1 21.4 1.6 22 2.2 22H7.7C8.4 22 9 21.4 9 20.8V17.3C9 16.6 8.4 16 7.8 16Z",
        })
    ]))
}
