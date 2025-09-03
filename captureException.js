
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="10025be0-a8d4-56ed-b282-13ecdc8eaffc")}catch(e){}}();
function bar() {
    Sentry.captureException(new Error("Sentry Test Error"));
}

function foo() {
    bar();
}

function captureException() {
    foo();
}

//# debugId=10025be0-a8d4-56ed-b282-13ecdc8eaffc
