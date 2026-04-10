// Shop tabs (shop.html)
(function initShopTabs() {
  const tablist = document.querySelector('.shop-tabs');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('.shop-tab-panel');

  function playPanelEnter(panel) {
    if (!panel) return;
    panel.classList.remove('shop-tab-panel--enter');
    void panel.offsetWidth;
    panel.classList.add('shop-tab-panel--enter');
  }

  function activateTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    if (!panelId) return;

    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
      t.classList.toggle('is-active', selected);
    });

    panels.forEach((panel) => {
      const show = panel.id === panelId;
      panel.hidden = !show;
      panel.classList.toggle('is-active', show);
      if (!show) panel.classList.remove('shop-tab-panel--enter');
    });

    const active = document.getElementById(panelId);
    if (active) playPanelEnter(active);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
  });

  const initial = document.querySelector('.shop-tab-panel.is-active');
  if (initial) playPanelEnter(initial);
})();

// CARS row — scroll arrows (shop.html)
(function initCarsRowScroll() {
  const wrap = document.querySelector('.store-cars-scroll-wrap');
  const scrollEl = document.getElementById('store-cars-scroll');
  const prev = wrap?.querySelector('.store-cars-scroll-btn--prev');
  const next = wrap?.querySelector('.store-cars-scroll-btn--next');
  const carsPanel = document.getElementById('shop-panel-exclusive');
  if (!wrap || !scrollEl || !prev || !next) return;

  function scrollStep() {
    const card = scrollEl.querySelector('.store-card');
    if (!card) return scrollEl.clientWidth * 0.85;
    const style = getComputedStyle(scrollEl.querySelector('.store-grid') || scrollEl);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    return card.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    requestAnimationFrame(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
      if (scrollWidth <= clientWidth + 2) {
        prev.disabled = true;
        next.disabled = true;
        return;
      }
      const tol = 4;
      const atStart = scrollLeft <= tol;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - tol;
      prev.disabled = atStart;
      next.disabled = atEnd;
    });
  }

  function normalizeWheelDelta(e) {
    let dx = e.deltaX;
    let dy = e.deltaY;
    if (e.deltaMode === 1) {
      const line = 16;
      dx *= line;
      dy *= line;
    } else if (e.deltaMode === 2) {
      const page = scrollEl.clientHeight || 400;
      dx *= page;
      dy *= page;
    }
    return { dx, dy };
  }

  prev.addEventListener('click', () => {
    scrollEl.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    scrollEl.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });

  // Wheel on whole strip (incl. prev/next arrows) so you can scroll the catalog right/left without clicking inside the list first
  wrap.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey) return;
      const { dx, dy } = normalizeWheelDelta(e);
      let delta = 0;
      if (Math.abs(dx) > Math.abs(dy)) {
        delta = dx;
      } else {
        delta = dy;
      }
      if (delta === 0) return;

      const maxLeft = scrollEl.scrollWidth - scrollEl.clientWidth;
      if (maxLeft <= 0) return;

      const tol = 4;
      const atStart = scrollEl.scrollLeft <= tol;
      const atEnd = scrollEl.scrollLeft >= maxLeft - tol;

      if (delta < 0 && atStart) return;
      if (delta > 0 && atEnd) return;

      e.preventDefault();
      const nextLeft = scrollEl.scrollLeft + delta;
      scrollEl.scrollLeft = Math.max(0, Math.min(maxLeft, nextLeft));
    },
    { passive: false }
  );

  scrollEl.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);

  const carsGrid = scrollEl.querySelector('.store-grid--cars-row');
  if (carsGrid && typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => updateButtons());
    ro.observe(carsGrid);
  }
  scrollEl.querySelectorAll('img').forEach((img) => {
    if (!img.complete) img.addEventListener('load', updateButtons, { once: true });
  });

  function carsPanelActive() {
    return carsPanel && !carsPanel.hidden;
  }

  function scrollCarsKeyNav(e) {
    if (!carsPanelActive()) return;
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;

    if (e.key === 'Home') {
      e.preventDefault();
      scrollEl.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (e.key === 'End') {
      e.preventDefault();
      const maxLeft = scrollEl.scrollWidth - scrollEl.clientWidth;
      scrollEl.scrollTo({ left: maxLeft, behavior: 'smooth' });
      return;
    }
    if (e.key === 'ArrowLeft' && !prev.disabled) {
      e.preventDefault();
      prev.click();
    } else if (e.key === 'ArrowRight' && !next.disabled) {
      e.preventDefault();
      next.click();
    }
  }

  document.addEventListener('keydown', scrollCarsKeyNav);

  if (carsPanel) {
    const mo = new MutationObserver(() => {
      if (!carsPanel.hidden) {
        updateButtons();
        requestAnimationFrame(() => {
          scrollEl.focus({ preventScroll: true });
        });
      }
    });
    mo.observe(carsPanel, { attributes: true, attributeFilter: ['hidden'] });
  }

  if (carsPanel && !carsPanel.hidden) {
    requestAnimationFrame(() => scrollEl.focus({ preventScroll: true }));
  }

  window.addEventListener('load', updateButtons);
  updateButtons();
})();

// CARS — Buy Now → Stripe when product has checkoutUrl in shop-config.js
(function initCarsBuyCheckout() {
  const panel = document.getElementById('shop-panel-exclusive');
  if (!panel) return;
  panel.addEventListener('click', (e) => {
    const btn = e.target.closest('.store-btn');
    if (!btn || !btn.closest('.store-card')) return;
    const card = btn.closest('.store-card');
    const id = card?.getAttribute('data-product-id');
    const cfg = typeof window.SHOP_CONFIG === 'object' && window.SHOP_CONFIG?.products?.[id];
    const url = cfg?.checkoutUrl;
    if (!url) return;
    e.preventDefault();
    e.stopPropagation();
    window.location.assign(url);
  });
})();

// Product detail modal (shop.html)
(function initProductModal() {
  const modal = document.getElementById('product-modal');
  const root = document.querySelector('.store-section--page');
  if (!modal || !root) return;

  const titleEl = modal.querySelector('.product-modal-title');
  const leadEl = modal.querySelector('.product-modal-lead');
  const perksUl = modal.querySelector('.product-modal-perks');
  const priceEl = modal.querySelector('.product-modal-price');
  const closeBtn = modal.querySelector('.product-modal-close');
  const buyBtn = document.getElementById('product-modal-buy');
  const buyExtra = document.getElementById('product-modal-buy-extra');

  function getShopConfig() {
    return typeof window.SHOP_CONFIG === 'object' && window.SHOP_CONFIG !== null ? window.SHOP_CONFIG : null;
  }

  function getProductModalFields(card) {
    const cfgRoot = getShopConfig();
    const id = card.getAttribute('data-product-id');
    const product = id && cfgRoot?.products ? cfgRoot.products[id] : null;

    let desc = product?.description ?? card.getAttribute('data-modal-desc') ?? '';
    let perks = Array.isArray(product?.perks) ? [...product.perks] : [];
    if (!perks.length) {
      perks = parsePerks(card.getAttribute('data-modal-perks') || '');
    }
    const checkoutUrl = product?.checkoutUrl ?? card.getAttribute('data-checkout-url') ?? '';
    const kitContents = Array.isArray(product?.kitContents) ? product.kitContents : [];

    return { desc, perks, checkoutUrl, kitContents };
  }

  function parsePerks(str) {
    if (!str) return [];
    return str
      .split('||')
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function openFromCard(card) {
    const title = card.querySelector('.store-card-title')?.textContent.trim() || 'Product';
    const priceText = card.querySelector('.store-card-price')?.textContent.replace(/\s+/g, ' ').trim() || '';
    const { desc, perks, checkoutUrl, kitContents } = getProductModalFields(card);

    titleEl.textContent = title;
    leadEl.textContent = desc;
    leadEl.hidden = !String(desc).trim();
    perksUl.innerHTML = '';
    perks.forEach((line) => {
      const li = document.createElement('li');
      const isKitRow =
        kitContents.length > 0 &&
        typeof line === 'string' &&
        line.includes('Access to Kit') &&
        line.includes('every day');

      if (isKitRow) {
        li.className = 'product-modal-perk product-modal-perk--kit';
        const block = document.createElement('div');
        block.className = 'product-modal-kit-block';
        const header = document.createElement('div');
        header.className = 'product-modal-kit-header';
        header.textContent = line;
        const subUl = document.createElement('ul');
        subUl.className = 'product-modal-kit-items';
        kitContents.forEach((item) => {
          const subLi = document.createElement('li');
          const line =
            typeof item === 'string' ? item : item && typeof item === 'object' && item.text != null ? String(item.text) : '';
          const iconSrc =
            item && typeof item === 'object' && typeof item.icon === 'string' && item.icon ? item.icon : null;
          if (iconSrc) {
            subLi.classList.add('product-modal-kit-item', 'product-modal-kit-item--icon');
            const img = document.createElement('img');
            img.src = iconSrc;
            img.alt = '';
            img.className = 'product-modal-kit-icon';
            img.width = 28;
            img.height = 28;
            img.loading = 'lazy';
            const span = document.createElement('span');
            span.className = 'product-modal-kit-label';
            span.textContent = line;
            subLi.appendChild(img);
            subLi.appendChild(span);
          } else {
            subLi.textContent = line;
          }
          subUl.appendChild(subLi);
        });
        block.appendChild(header);
        block.appendChild(subUl);
        li.appendChild(block);
      } else {
        li.textContent = line;
      }
      perksUl.appendChild(li);
    });
    if (!perks.length) {
      const li = document.createElement('li');
      li.textContent = 'More details at checkout.';
      perksUl.appendChild(li);
    }
    priceEl.textContent = priceText;
    modal.dataset.checkoutUrl = checkoutUrl;
    if (buyExtra) {
      buyExtra.hidden = true;
      buyBtn?.setAttribute('aria-expanded', 'false');
    }

    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('product-modal-open');
    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('product-modal-open');
  }

  const NO_MODAL_PANEL_IDS = new Set([
    'shop-panel-coins',
    'shop-panel-exclusive',
    'shop-panel-unbans',
    'shop-panel-crews',
  ]);

  root.addEventListener('click', (e) => {
    const card = e.target.closest('.store-card');
    if (!card) return;
    const panel = card.closest('.shop-tab-panel');
    if (panel?.id && NO_MODAL_PANEL_IDS.has(panel.id)) return;
    openFromCard(card);
  });

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  if (buyBtn && buyExtra) {
    buyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = buyExtra.hidden;
      buyExtra.hidden = !open;
      buyBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    const confirmBtn = buyExtra.querySelector('.product-modal-buy-confirm');
    if (confirmBtn && !confirmBtn.dataset.bound) {
      confirmBtn.dataset.bound = '1';
      confirmBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = modal.dataset.checkoutUrl;
        if (url) {
          window.location.assign(url);
        }
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
})();

// Scroll reveal for sections
const revealSections = document.querySelectorAll('.stats-section, .connect-section');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);
revealSections.forEach((section) => revealObserver.observe(section));

// Copy connect code to clipboard
const connectCode = document.getElementById('connect-code');
const copyBtn = document.getElementById('copy-btn');

if (copyBtn && connectCode) {
  const originalSvg = copyBtn.innerHTML;
  const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(connectCode.textContent);
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = checkSvg;
      copyBtn.setAttribute('aria-label', 'Copied!');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalSvg;
        copyBtn.setAttribute('aria-label', 'Copy');
      }, 2000);
    } catch (err) {
      console.error('Could not copy:', err);
    }
  });
}
