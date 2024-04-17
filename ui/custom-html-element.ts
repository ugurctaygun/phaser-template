import "./style.css";

class CustomElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(): void {
        this.innerHTML = `<div class="custom-element">CUSTOM HTML ELEMENT</div>`;
    }

    static get observedAttributes(): string[] {
        return ["test-attribute"];
    }

    attributeChangedCallback(attr: string, oldVal: string | null, newVal: string | null): void {
        if (oldVal === newVal || !newVal) return;
        const element = this.querySelector(".custom-element") as HTMLElement | null;
        if (!element) return;
        switch (attr) {
            case "test-attribute":
                element.innerText = newVal;
                break;
        }
    }
}

export default CustomElement;