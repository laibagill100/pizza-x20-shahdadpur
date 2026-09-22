/**
 * =========================================================================
 * PIZZA X20 – SHAHDADPUR ALI CHOWK BRANCH
 * Interactive Application Engine
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PIZZA_X20_CONFIG || {};
  const branch = config.branch || {};

  // Application State
  const state = {
    activeCategory: "all",
    searchQuery: "",
    cart: [],
    selectedSizes: {} // item_id -> chosen size key
  };

  // DOM Elements
  const featuredContainer = document.getElementById("featuredPizzasContainer");
  const menuContainer = document.getElementById("menuItemsContainer");
  const categoryTabsContainer = document.getElementById("categoryTabsContainer");
  const menuSearchInput = document.getElementById("menuSearchInput");
  const whyUsContainer = document.getElementById("whyUsContainer");
  const reviewsContainer = document.getElementById("reviewsContainer");
  const faqContainer = document.getElementById("faqContainer");
  const branchHoursStatus = document.getElementById("branchHoursStatus");
  
  // Cart Drawer Elements
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartDrawerOverlay");
  const cartTriggerBtns = document.querySelectorAll(".cart-trigger-btn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartBadgeCount = document.querySelectorAll(".cart-counter");
  const cartTotalDisplay = document.getElementById("cartTotalDisplay");
  const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
  
  // Mobile Nav Elements
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // ========================================================================
  // INITIALIZATION
  // ========================================================================
  function init() {
    updateBranchMetadata();
    renderCategories();
    renderFeaturedItems();
    renderMenuItems();
    renderWhyChooseUs();
    renderReviews();
    renderFAQs();
    initDealCountdown();
    setupEventListeners();
    updateCartUI();
  }

  // Populate Branch Placeholders & Meta
  function updateBranchMetadata() {
    // Phone numbers & addresses across the page
    document.querySelectorAll(".placeholder-phone").forEach(el => {
      el.textContent = branch.phone || "[+92 3XX XXXXXXX]";
    });

    document.querySelectorAll(".placeholder-phone-link").forEach(el => {
      el.setAttribute("href", `tel:${branch.phoneClean || "+923000000000"}`);
    });

    document.querySelectorAll(".placeholder-whatsapp-link").forEach(el => {
      el.setAttribute("href", `https://wa.me/${branch.whatsapp || "923000000000"}?text=${encodeURIComponent("Hello Pizza X20 Shahdadpur! I would like to inquire about your menu and place an order.")}`);
    });

    document.querySelectorAll(".placeholder-address").forEach(el => {
      el.textContent = branch.address || "[Shop / Plot No.], Main Ali Chowk, Shahdadpur, Sindh";
    });

    document.querySelectorAll(".placeholder-hours").forEach(el => {
      el.textContent = branch.hoursText || "[Daily: 1:00 PM – 2:00 AM]";
    });

    // Check Open / Closed Status
    checkStoreStatus();
  }

  function checkStoreStatus() {
    const now = new Date();
    const currentHour = now.getHours(); // 0 - 23
    // Opening 13 (1 PM) to 2 (2 AM next morning)
    const isOpen = (currentHour >= (branch.openingHour || 13) || currentHour < (branch.closingHour || 2));

    if (branchHoursStatus) {
      if (isOpen) {
        branchHoursStatus.innerHTML = `<span class="pulse-dot"></span> <strong>Open Now</strong> • Ali Chowk, Shahdadpur`;
      } else {
        branchHoursStatus.innerHTML = `<span class="pulse-dot" style="background-color: #F59E0B;"></span> Opens at 1:00 PM • Ali Chowk, Shahdadpur`;
      }
    }
  }

  // ========================================================================
  // PROMO COUNTDOWN TIMER
  // ========================================================================
  function initDealCountdown() {
    const countdownEl = document.getElementById("dealCountdown");
    if (!countdownEl) return;

    // Fixed realistic rotating 4-hour countdown
    let totalSeconds = 4 * 3600 + 42 * 60 + 15;
    setInterval(() => {
      if (totalSeconds > 0) totalSeconds--;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      countdownEl.textContent = `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
    }, 1000);

    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
  }

  // ========================================================================
  // RENDER SECTIONS
  // ========================================================================

  // 1. Featured Pizzas
  function renderFeaturedItems() {
    if (!featuredContainer) return;
    const featured = (config.menuItems || []).filter(item => item.isFeatured);

    featuredContainer.innerHTML = featured.map(item => createFoodCardHTML(item, true)).join("");
    attachCardEventListeners(featuredContainer);
  }

  // 2. Menu Categories Filter Tabs
  function renderCategories() {
    if (!categoryTabsContainer) return;
    const categories = config.categories || [];

    categoryTabsContainer.innerHTML = categories.map(cat => `
      <button class="cat-tab-btn ${cat.id === state.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `).join("");

    categoryTabsContainer.querySelectorAll(".cat-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        categoryTabsContainer.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeCategory = btn.dataset.category;
        renderMenuItems();
      });
    });
  }

  // 3. Categorized Menu Items
  function renderMenuItems() {
    if (!menuContainer) return;
    let items = config.menuItems || [];

    // Filter by Category
    if (state.activeCategory !== "all") {
      if (state.activeCategory === "featured") {
        items = items.filter(item => item.isFeatured);
      } else {
        items = items.filter(item => item.category === state.activeCategory);
      }
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    if (items.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍕</div>
          <h3 style="color: var(--text-white); margin-bottom: 0.5rem;">No items found</h3>
          <p>Try searching for another keyword or browse all categories.</p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = items.map(item => createFoodCardHTML(item, false)).join("");
    attachCardEventListeners(menuContainer);
  }

  // Food Card HTML Generator
  function createFoodCardHTML(item, isFeaturedSection) {
    const sizeKeys = item.sizes ? Object.keys(item.sizes) : [];
    const chosenSizeKey = state.selectedSizes[item.id] || (sizeKeys.length > 0 ? sizeKeys[0] : null);
    const chosenPricePlaceholder = chosenSizeKey ? item.sizes[chosenSizeKey] : item.defaultPriceText;

    const sizePillsHTML = sizeKeys.length > 1 ? `
      <div class="food-card-sizes" data-item-id="${item.id}">
        ${sizeKeys.map(key => {
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          const isActive = key === chosenSizeKey;
          return `<button type="button" class="size-pill ${isActive ? 'active' : ''}" data-size-key="${key}">${label}</button>`;
        }).join("")}
      </div>
    ` : '';

    const spiceTagHTML = item.spicyLevel && item.spicyLevel > 0 ? `
      <span class="spice-tag">🌶️ ${'🔥'.repeat(item.spicyLevel)}</span>
    ` : '';

    return `
      <div class="food-card" data-id="${item.id}">
        <div class="food-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" />
          ${item.badge ? `<span class="badge-tag badge-gold food-card-badge">${item.badge}</span>` : ''}
          ${spiceTagHTML}
        </div>
        <div class="food-card-body">
          <div>
            <h3 class="food-card-title">${item.name}</h3>
            <p class="food-card-desc">${item.description}</p>
          </div>
          <div>
            ${sizePillsHTML}
            <div class="food-card-footer">
              <div class="food-price-wrap">
                <span class="food-price-label">Price</span>
                <span class="food-price-val" id="price-val-${item.id}">${chosenPricePlaceholder}</span>
              </div>
              <button type="button" class="btn btn-primary btn-sm add-to-cart-btn" data-id="${item.id}">
                <span>+ Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Attach dynamic event listeners for cards (size changes and add-to-cart)
  function attachCardEventListeners(container) {
    // Size Pills toggle
    container.querySelectorAll(".size-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        const parentSizes = pill.closest(".food-card-sizes");
        const itemId = parentSizes.dataset.itemId;
        const sizeKey = pill.dataset.sizeKey;
        
        parentSizes.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        
        state.selectedSizes[itemId] = sizeKey;

        // Update displayed price placeholder
        const item = config.menuItems.find(i => i.id === itemId);
        if (item && item.sizes && item.sizes[sizeKey]) {
          const priceEl = document.getElementById(`price-val-${itemId}`);
          if (priceEl) {
            priceEl.textContent = item.sizes[sizeKey];
          }
        }
      });
    });

    // Add to Cart Buttons
    container.querySelectorAll(".add-to-cart-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.dataset.id;
        addItemToCart(itemId);
      });
    });
  }

  // 4. Why Choose Us
  function renderWhyChooseUs() {
    if (!whyUsContainer) return;
    const pillars = config.whyChooseUs || [];

    whyUsContainer.innerHTML = pillars.map(p => `
      <div class="why-card">
        <div class="why-icon-box">${p.icon}</div>
        <h3 class="why-title">${p.title}</h3>
        <p class="why-desc">${p.description}</p>
      </div>
    `).join("");
  }

  // 5. Customer Reviews
  function renderReviews() {
    if (!reviewsContainer) return;
    const reviews = config.reviews || [];

    reviewsContainer.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div>
          <div class="stars-row">
            ${'★'.repeat(r.rating || 5)}
          </div>
          <p class="review-quote">${r.comment}</p>
        </div>
        <div class="reviewer-meta">
          <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" />
          <div class="reviewer-details">
            <h4>${r.name}</h4>
            <p>${r.location} • ${r.date}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // 6. Frequently Asked Questions
  function renderFAQs() {
    if (!faqContainer) return;
    const faqs = config.faqs || [];

    faqContainer.innerHTML = faqs.map((f, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button type="button" class="faq-question">
          <span>${f.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          ${f.a}
        </div>
      </div>
    `).join("");

    faqContainer.querySelectorAll(".faq-question").forEach(qBtn => {
      qBtn.addEventListener("click", () => {
        const item = qBtn.closest(".faq-item");
        item.classList.toggle("active");
      });
    });
  }

  // ========================================================================
  // CART & ORDER MANAGEMENT
  // ========================================================================

  function addItemToCart(itemId) {
    const item = config.menuItems.find(i => i.id === itemId);
    if (!item) return;

    const sizeKeys = item.sizes ? Object.keys(item.sizes) : [];
    const sizeKey = state.selectedSizes[itemId] || (sizeKeys.length > 0 ? sizeKeys[0] : "regular");
    const sizePricePlaceholder = item.sizes && item.sizes[sizeKey] ? item.sizes[sizeKey] : item.defaultPriceText;

    const cartKey = `${itemId}-${sizeKey}`;
    const existingIndex = state.cart.findIndex(c => c.cartKey === cartKey);

    if (existingIndex > 0 || existingIndex === 0) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        cartKey: cartKey,
        itemId: itemId,
        name: item.name,
        sizeKey: sizeKey,
        pricePlaceholder: sizePricePlaceholder,
        image: item.image,
        qty: 1
      });
    }

    updateCartUI();
    showToast(`Added "${item.name}" to your order tray! 🍕`);
  }

  function updateCartQty(cartKey, delta) {
    const index = state.cart.findIndex(c => c.cartKey === cartKey);
    if (index === -1) return;

    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartUI();
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);

    // Update Counter Badges
    cartBadgeCount.forEach(el => {
      el.textContent = totalItems;
      el.style.display = totalItems > 0 ? "flex" : "none";
    });

    if (!cartItemsList) return;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛒</div>
          <h4 style="color: var(--text-white); margin-bottom: 0.3rem;">Your tray is empty</h4>
          <p style="font-size: 0.85rem;">Add delicious pizzas and sides from the menu above to start your order.</p>
        </div>
      `;
      if (cartTotalDisplay) cartTotalDisplay.textContent = "[0 Items Selected]";
      return;
    }

    cartItemsList.innerHTML = state.cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.sizeKey.toUpperCase()} • ${item.pricePlaceholder}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="window.updateCartQty('${item.cartKey}', -1)">-</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="window.updateCartQty('${item.cartKey}', 1)">+</button>
          </div>
        </div>
      </div>
    `).join("");

    if (cartTotalDisplay) {
      cartTotalDisplay.textContent = `[${totalItems} Item(s) Selected]`;
    }
  }

  // Expose qty updater to window for inline onclick handlers
  window.updateCartQty = (cartKey, delta) => {
    updateCartQty(cartKey, delta);
  };

  // ========================================================================
  // WHATSAPP INSTANT ORDER BUILDER
  // ========================================================================
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Please add at least one pizza or deal to your order first! 🍕");
        return;
      }

      const nameInput = document.getElementById("orderCustomerName");
      const phoneInput = document.getElementById("orderCustomerPhone");
      const addressInput = document.getElementById("orderCustomerAddress");
      const notesInput = document.getElementById("orderCustomerNotes");

      const custName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "[Customer Name Placeholder]";
      const custPhone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : "[+92 3XX XXXXXXX]";
      const custAddress = addressInput && addressInput.value.trim() ? addressInput.value.trim() : "[Delivery Address in Shahdadpur]";
      const custNotes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : "None";

      // Build WhatsApp message format
      let msg = `*🍕 NEW ONLINE ORDER - PIZZA X20 SHAHDADPUR*\n`;
      msg += `📍 *Branch:* Ali Chowk, Shahdadpur\n`;
      msg += `------------------------------------\n`;
      msg += `👤 *Customer:* ${custName}\n`;
      msg += `📞 *Contact:* ${custPhone}\n`;
      msg += `🏠 *Delivery Address:* ${custAddress}\n`;
      msg += `------------------------------------\n`;
      msg += `📋 *ORDER BREAKDOWN:*\n`;

      state.cart.forEach((c, idx) => {
        msg += `${idx + 1}. ${c.qty}x ${c.name} (${c.sizeKey.toUpperCase()}) - ${c.pricePlaceholder}\n`;
      });

      msg += `------------------------------------\n`;
      msg += `📝 *Special Instructions:* ${custNotes}\n`;
      msg += `------------------------------------\n`;
      msg += `*Please confirm order availability and estimated delivery time!*`;

      const whatsappTarget = branch.whatsapp || "923000000000";
      const targetUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(msg)}`;

      window.open(targetUrl, "_blank");
      showToast("Forwarding your order to Pizza X20 Shahdadpur WhatsApp! 💬");
    });
  }

  // ========================================================================
  // TOAST NOTIFICATIONS
  // ========================================================================
  function showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
  window.showToast = showToast;

  // ========================================================================
  // EVENT LISTENERS & DRAWER CONTROLS
  // ========================================================================
  function setupEventListeners() {
    // Menu Search input
    if (menuSearchInput) {
      menuSearchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderMenuItems();
      });
    }

    // Cart Drawer Toggle
    cartTriggerBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (cartDrawer && cartOverlay) {
          cartDrawer.classList.add("open");
          cartOverlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    if (closeCartBtn && cartDrawer && cartOverlay) {
      closeCartBtn.addEventListener("click", closeCart);
      cartOverlay.addEventListener("click", closeCart);
    }

    function closeCart() {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    // Mobile Navigation Drawer Toggle
    if (mobileMenuBtn && mobileNavDrawer && drawerOverlay) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileNavDrawer.classList.add("open");
        drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      });

      closeMobileNavBtn.addEventListener("click", closeMobileNav);
      drawerOverlay.addEventListener("click", closeMobileNav);

      mobileNavLinks.forEach(link => {
        link.addEventListener("click", closeMobileNav);
      });
    }

    function closeMobileNav() {
      if (mobileNavDrawer && drawerOverlay) {
        mobileNavDrawer.classList.remove("open");
        drawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }

    // Sticky Navbar Scroll Listener
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Contact Form submission placeholder
    const contactForm = document.getElementById("cateringInquiryForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Inquiry received! Branch manager will contact you shortly.");
        contactForm.reset();
      });
    }

    // Copy Address Button
    const copyAddressBtn = document.getElementById("copyAddressBtn");
    if (copyAddressBtn) {
      copyAddressBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(branch.address || "Ali Chowk, Shahdadpur");
        showToast("Address copied to clipboard! 📋");
      });
    }
  }

  // Run initial setup
  init();
});
