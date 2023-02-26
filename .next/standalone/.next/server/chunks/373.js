"use strict";
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TimeSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useRealTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8791);
/* harmony import */ var _links_ButtonLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3465);
/* harmony import */ var _links_CustomLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5939);






function TimeSection({ dateTime , title , description  }) {
    const cleanDate = dateTime && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(dateTime), "kk:mm:ss O");
    const realTime = (0,_hooks_useRealTime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "bg-dark",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center min-h-screen text-center text-white layout",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 text-gray-300",
                        children: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mt-8 text-5xl md:text-6xl text-primary-400",
                        children: cleanDate ? cleanDate : "LOADING..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_ButtonLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "mt-8",
                        href: "/",
                        children: "Back to Home"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        className: "absolute text-gray-500 bottom-2",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " By",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "https://theodorusclarence.com?ref=tsnextstarter",
                                children: "Theodorus Clarence"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white",
                        children: "Real Time:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-primary-400",
                        children: realTime
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnstyledLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4775);



function ButtonLink({ children , className ="" , variants ="primary" , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnstyledLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline", "border border-gray-600", "focus:outline-none focus-visible:text-primary-400", {
            "bg-dark text-white": variants === "primary",
            "bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark": variants === "secondary"
        }, className),
        children: children
    });
}


/***/ }),

/***/ 8791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRealTime)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useRealTime() {
    const [realTime, setRealTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(), "kk:mm:ss O"));
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const intervalId = setInterval(()=>{
            setRealTime((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(), "kk:mm:ss O"));
        }, 1000);
        return ()=>{
            clearInterval(intervalId);
        };
    }, []);
    return realTime;
}


/***/ })

};
;