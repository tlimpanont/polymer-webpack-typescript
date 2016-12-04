@component("polymer-webpack-typescript-app")
class App extends polymer.Base {
    @property({ type: String, value: "polymer-webpack-typescript-app" })
    prop1: string;
    constructor() {
        super();
        console.log('polymer-webpack-typescript-app is loaded!');
    }
}

App.register();