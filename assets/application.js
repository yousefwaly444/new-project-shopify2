document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();
        
        const form = button.closest("form.product-add-form");
        const variantId = form ? document.getElementById("product-variant-id")?.value : button.dataset.variantId;
        const quantity = form ? parseInt(document.getElementById("quantity")?.value || 1) : 1;

        button.disabled = true;
        button.textContent = "Adding...";

        try {
          const response = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              id: variantId,
              quantity: quantity
            })
          });

          if (!response.ok) throw new Error("Failed");

          button.textContent = "Added ✓";

          // Update cart count badge in header
          const cartRes = await fetch("/cart.js");
          if (cartRes.ok) {
            const cart = await cartRes.json();
            const badge = document.getElementById("cart-count-badge");
            if (badge) badge.textContent = cart.item_count;
          }
          // Open cart drawer so user can see cart (drawer content may refresh on next page load)
          if (typeof window.openCartDrawer === "function") window.openCartDrawer();
        } catch (error) {
          button.textContent = "Error";
        }

        setTimeout(() => {
          button.disabled = false;
          button.textContent = "Add to cart";
        }, 1500);
      });
    });
});
