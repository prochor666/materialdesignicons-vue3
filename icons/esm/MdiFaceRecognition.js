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
            d: "M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12C3.97,11.71 3.97,11.43 4,11.14C6.38,10.1 8.27,8.17 9.26,5.77C11.13,8.42 14.17,10 17.42,10C18.18,10 18.93,9.91 19.67,9.74C20.92,14 18.5,18.43 14.26,19.67C13.5,19.89 12.76,20 12,20M0,2A2,2 0 0,1 2,0H6V2H2V6H0V2M24,22A2,2 0 0,1 22,24H18V22H22V18H24V22M2,24A2,2 0 0,1 0,22V18H2V22H6V24H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22Z",
        })
    ]))
}
