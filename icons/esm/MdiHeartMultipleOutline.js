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
            d: "M12,21.1L10.5,22.4C3.9,16.5 0.5,13.4 0.5,9.6C0.5,8.4 0.9,7.3 1.5,6.4C1.5,6.6 1.5,6.8 1.5,7C1.5,11.7 5.4,15.2 12,21.1M13.6,17C18.3,12.7 21.5,9.9 21.6,7C21.6,5 20.1,3.5 18.1,3.5C16.5,3.5 15,4.5 14.5,5.9H12.6C12,4.5 10.5,3.5 9,3.5C7,3.5 5.5,5 5.5,7C5.5,9.9 8.6,12.7 13.4,17L13.5,17.1M18,1.5C21.1,1.5 23.5,3.9 23.5,7C23.5,10.7 20.1,13.8 13.5,19.8C6.9,13.9 3.5,10.8 3.5,7C3.5,3.9 5.9,1.5 9,1.5C10.7,1.5 12.4,2.3 13.5,3.6C14.6,2.3 16.3,1.5 18,1.5Z",
        })
    ]))
}
