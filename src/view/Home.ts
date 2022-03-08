import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Layout from "./Layout";

export default class Mining implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(
            this.container = el("section.home-view",
                el("h1", "Hello world"),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}