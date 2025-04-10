
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="120d9a0e-8234-5b98-9e7d-2b589d9c24ec")}catch(e){}}();
function bar() {
    Sentry.captureException(new Error("Sentry Test Error"));
}

function foo() {
    bar();
}

function captureException() {
    foo();
}

//# debugId=120d9a0e-8234-5b98-9e7d-2b589d9c24ec
