/// <reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />

class SuperClass {
    public Method1(): string {
        return "TAKE SOME SHIT MOTHERFUCKER";
    }

    public Method2(): void {
        $(".shit").append(this.Method1());
    }
}