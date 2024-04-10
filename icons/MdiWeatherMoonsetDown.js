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
            d: "M3 12H7C7 10.67 7.53 9.4 8.46 8.46C9.4 7.53 10.67 7 12 7C13.33 7 14.6 7.53 15.54 8.46C16.47 9.4 17 10.67 17 12H21C21.27 12 21.5 12.11 21.71 12.29C21.9 12.5 22 12.74 22 13C22 13.27 21.9 13.5 21.71 13.71C21.5 13.9 21.27 14 21 14H3C2.74 14 2.5 13.9 2.29 13.71C2.11 13.5 2 13.27 2 13C2 12.74 2.11 12.5 2.29 12.29C2.5 12.11 2.74 12 3 12M12.71 20.71L15.82 17.6C16.21 17.21 16.21 16.57 15.82 16.18C15.43 15.79 14.8 15.79 14.41 16.18L12 18.59L9.59 16.18C9.2 15.79 8.57 15.79 8.18 16.18C7.79 16.57 7.79 17.21 8.18 17.6L11.29 20.71C11.5 20.9 11.74 21 12 21C12.26 21 12.5 20.9 12.71 20.71Z",
        })
    ]))
}
