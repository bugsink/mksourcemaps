function bar() {
    Sentry.captureException(new Error("Sentry Test Error"));
}

function foo() {
    bar();
}

function captureException() {
    foo();
}
