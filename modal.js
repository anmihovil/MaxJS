class Modal extends HTMLElement {
    constructor(){
        super();
        this.myText = 'Hello Web Components!';
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: 10;
                    background: rgba(0,0,0, 0.7);
                }
                
            </style>

            <div id="backdrop"></div>
            <div id="modal"></div>
        `;
    }

    connectedCallback() {
        
    }
}

customElements.define('uc-modal', Modal);