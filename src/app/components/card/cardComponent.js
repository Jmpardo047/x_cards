export class CardComponent extends HTMLElement{
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /* html */`
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./src/App/components/card/cardStyle.css";
            </style>
            <div class="card" style="width: 18rem;">
                <slot name="imagen"></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name="nombre"></slot></h5>
                    <p class="card-text"><slot name ="numero"></slot></p>
                    <a href="#" class="btn btn-primary" id="button">Go somewhere</a>
                </div>
            </div>
        `
        this.shadowRoot.querySelector('#button').addEventListener('click',(e) => {
            alert('click')
        })
    }
}
customElements.define('card-component',CardComponent);