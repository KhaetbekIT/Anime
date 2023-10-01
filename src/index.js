const { BackgroundFunc } = require("./module/bg-elements");
const { LoginOut, LoginInit } = require("./module/login");
const { default: MainDataFunc } = require("./module/main-data");
const { default: ModalFunc } = require("./module/modal");
const { default: ScrollerFunc } = require("./module/scroller");
const { SliderFunc } = require("./module/slider");

BackgroundFunc()

ModalFunc()

ScrollerFunc()

SliderFunc()

MainDataFunc()

LoginInit()
LoginOut()