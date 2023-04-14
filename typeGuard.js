"use strict";
exports.__esModule = true;
var responseArr = [
    { status: 200, data: "Mission Successfull" },
    { status: 300, to: "Something went wrong" },
    { status: 400, error: "Mission Failed" },
];
var response = responseArr[Math.floor(Math.random() * 3)];
switch (response.status) {
    case 200:
        console.info(response.data);
        break;
    case 300:
        console.warn(response.to);
        break;
    case 400:
        console.error(response.error);
}
