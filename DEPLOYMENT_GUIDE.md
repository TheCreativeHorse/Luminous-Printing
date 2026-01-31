# Deploying Luminous Printing to Namecheap

Since you have already bought the hosting and domain on Namecheap, you likely have access to cPanel. Here are the steps to host your React website.

## Phase 1: DNS Check (You are good to go!)
Based on the screenshot you showed me, your domain **luminousprinting.ca** is already set to **Namecheap Web Hosting DNS**.
*   **Status**: ✅ Connected
*   **Action**: No action needed on the Domain tab. You are ready to upload files.

## Phase 2: Preparation (Already Done)
I have already performed these steps for you:
1.  **Built the Project**: I ran the build command. Your production-ready files are in the `luminous-app/dist` folder.
2.  **Routing Configuration**: I created a `.htaccess` file inside the `dist` folder. This ensures that refreshing pages (like `/contact`) works correctly.

## Phase 2: Accessing Namecheap cPanel
1.  Log in to your **Namecheap Dashboard**.
2.  Go to **Hosting List** on the left sidebar.
3.  Find your hosting plan and click the **Go to cPanel** button (it's usually an arrow icon).

## Phase 3: Uploading Files
1.  In cPanel, look for the **Files** section and click on **File Manager**.
2.  Navigate to the `public_html` folder.
    *   *Note: If you are hosting this on a subdomain, navigate to that specific folder instead.*
3.  **Delete** any default files (like `default.html` or `cgi-bin`) if you want a clean slate (be careful not to delete important things if you have other sites).
4.  On your computer, open your project folder:
    `c:\Users\Musta\OneDrive\Desktop\website Projects\Luminous Printing\luminous-app`
5.  Open the **`dist`** folder.
6.  Select **ALL** files inside `dist` (including `index.html`, `assets` folder, and `.htaccess`).
7.  **Right-click** and select **Compress to ZIP file** (on Windows). Name it something like `website.zip`.
8.  Back in **cPanel File Manager**, click the **Upload** button in the top bar.
9.  Drag and drop your `website.zip` file there.
10. Once connected, go back to File Manager.
11. Right-click the uploaded `website.zip` and select **Extract**.
12. Extract it to `/public_html`.
13. You can now delete the `website.zip` file from the server.

## Phase 4: Final Check
1.  Visit your domain (e.g., `www.yourdomain.com`).
2.  Your site should load!
3.  **Test Navigation**: Click on different links (e.g., Contact Us).
4.  **Test Refresh**: Go to a page like `/contact` and refresh the browser. If it reloads the page correctly without a "404 Not Found" error, the `.htaccess` file is working.

## Troubleshooting
-   **If you see a blank page**: Check the "Console" tab in your browser's Developer Tools (F12) for errors.
-   **If you get a 404 on refresh**: Ensure the `.htaccess` file was uploaded and is inside `public_html`. You might need to enable "Show Hidden Files" in cPanel File Manager settings (top right corner) to see it.
