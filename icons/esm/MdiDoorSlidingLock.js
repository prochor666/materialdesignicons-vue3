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
            d: "M21.8 17V15.5C21.8 14.1 20.4 13 19 13S16.2 14.1 16.2 15.5V17C15.6 17 15 17.6 15 18.2V21.7C15 22.4 15.6 23 16.2 23H21.7C22.4 23 23 22.4 23 21.8V18.3C23 17.6 22.4 17 21.8 17M20.5 17H17.5V15.5C17.5 14.7 18.2 14.2 19 14.2S20.5 14.7 20.5 15.5V17M13 11H15V13H13V11M9 13H7V11H9V13M13 19H12V5H17V11.44C17.61 11.17 18.29 11 19 11V5C19 3.9 18.1 3 17 3H5C3.9 3 3 3.9 3 5V19H2V21H13V19M10 19H5V5H10V19Z",
        })
    ]))
}
