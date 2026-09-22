# Hostinger Shared Hosting Deployment Guide
### Pizza X20 – Shahdadpur Ali Chowk Branch

This build is 100% production-ready, contains no build errors, requires no Node.js or server-side build steps, and has strictly relative asset paths.

---

## ⚡ Method 1: The Fastest Way (Via Zip in File Manager - Recommended)

1. Log into your **Hostinger Control Panel (hPanel)**.
2. Under **Websites**, click **Manage** on your domain.
3. Open **File Manager** (Files -> File Manager -> Access files of your website).
4. Double-click to enter the **`public_html`** folder.
5. If there is a default `default.php` or parking page from Hostinger, delete it.
6. Click the **Upload** icon (top right) -> select **File** -> choose **`hostinger_build.zip`**.
7. Once uploaded, right-click `hostinger_build.zip` and select **Extract**.
8. Choose destination as `.` (the current directory: `public_html`).
9. Click **Extract**.
10. Done! Visit your domain in any browser.

---

## 📂 Method 2: Manual Drag-and-Drop (Files & Folders)

If you prefer uploading unzipped files:
Upload the contents inside `hostinger_build/` directly into `public_html/`:

```text
public_html/
├── .htaccess        # LiteSpeed/Apache caching, compression, security headers
├── 404.html         # Branded Pizza X20 404 error page
├── index.html       # Main website entry point
├── robots.txt       # Search engine crawler permissions
├── sitemap.xml      # SEO sitemap
├── assets/
│   ├── favicon.svg  # Browser tab icon
│   ├── logo.svg     # Stylized vector brandmark
│   └── og-image.svg # Social share / WhatsApp preview image
├── css/
│   └── styles.css   # Dark/gold styling & responsive layout
└── js/
    ├── app.js       # Dynamic menu, cart & WhatsApp checkout logic
    └── config.js    # Master editable placeholders for prices & phone
```

---

## 🔒 Enabling Free SSL / HTTPS on Hostinger

1. In hPanel, go to **Security** -> **SSL**.
2. If your SSL is active, open `.htaccess` in File Manager.
3. Uncomment lines 69-73 to enforce automatic HTTPS redirect if desired:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## ✏️ How to Update Menu Items or Phone Later
To change prices, telephone numbers, or add new pizzas later, simply edit `js/config.js` directly in Hostinger File Manager's built-in text editor and save!
