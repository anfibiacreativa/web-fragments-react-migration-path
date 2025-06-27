
class CheckoutButton extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .btn-primary {
          background-color: var(--primary-color);
          color: white;
        }

        .btn-primary:hover {
          background-color: #34495e;
        }
      </style>
      <button class="btn btn-primary" id="payment-checkout-button">
        <slot></slot>  <!-- Custom content in slot -->
      </button>
    `;

    this.shadowRoot.querySelector('#payment-checkout-button').addEventListener('click', () => {
      this.checkout();
    });
  }

  checkout() {
    console.log('Checking out and paying!');
    // implement postMessage here
  }
}

// Register the custom element with the browser
customElements.define('payment-checkout-button', CheckoutButton);
