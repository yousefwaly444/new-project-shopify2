document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
      button.addEventListener("click", async () => {
        const variantId = button.dataset.variantId;

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
              quantity: 1
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
