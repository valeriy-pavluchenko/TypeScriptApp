/// <reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />

class SuperClass {
    public Method1(): string {
        return "Hello World from TypeScriptApp";
    }

    public Method2(): void {
        $(".shit").append(this.Method1());
    }
}