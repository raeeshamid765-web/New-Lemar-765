NEW LEMAR on iPhone (installable offline app)
=============================================

These files are the whole app. They only need to be put on the internet ONCE so that iPhone can install it.
After it is installed, it works with NO internet. Your business data is never uploaded: it stays on the phone.

STEP 1 - Put the files on a free web address (GitHub Pages, from the website, no programming)
1. Create a free account at github.com and sign in.
2. Click "+" (top right) > "New repository". Name it with a hard-to-guess name, e.g.  lemar-7391 . Choose Public. Create.
3. Click "uploading an existing file". Drag ALL the files from this folder (index.html, sw.js, manifest.webmanifest and the 3 png icons). Click "Commit changes".
4. Go to Settings > Pages. Under "Branch" choose "main" and "/ (root)", press Save.
5. After 1-2 minutes the page shows your address:  https://YOURNAME.github.io/lemar-7391/

STEP 2 - Install on the iPhone (must be Safari)
1. Open that address in Safari, connected to the internet. Wait until the app is fully shown (this loads it for offline).
2. Tap the Share button (square with arrow) > "Add to Home Screen" > Add.
3. From now on ONLY open the app from the new NEW LEMAR icon on the home screen.
   (Data typed in a Safari tab is separate from the home-screen app and is not carried over.)
4. Test once: turn on Airplane mode and open the app. It must open.

BACKUP (very important on iPhone)
- Settings > Backup opens the iPhone share sheet. Choose "Save to Files" (iCloud Drive). Do this every week.
- Restore: Settings > Restore backup > choose the file from Files.
- iPhone can erase website data if the phone is very low on storage or the app is not used for a long time. The backup file is your real protection.

MOVING YOUR CURRENT DATA IN
- In the current system (computer): Settings > Backup. Send that file to the iPhone (AirDrop/WhatsApp/email) and save it in Files.
- In the iPhone app: Settings > Restore backup > pick the file.

UPDATING THE APP LATER
- Replace index.html in the GitHub repository with the new one, and change VERSION in sw.js (e.g. nl-2.2.1) in the same commit.
- On the phone, open the app online, close it fully, open it again (the update appears on the second open). Your data stays.
- Never change the web address after you start: data belongs to the address.
