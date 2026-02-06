# Instructions to Push Frontend to GitHub

## Prerequisites

Before following these steps, ensure you have:

1. **Git installed** - Download from https://git-scm.com/download/win
2. **GitHub account** - Already have one set up
3. **GitHub repository created** - https://github.com/23suca46-cmyk/appointment-frontend

## Step-by-Step Instructions

### Option 1: Using the Batch Script (Windows)

1. Open PowerShell or Command Prompt
2. Navigate to the frontend folder:
   ```bash
   cd D:\doctorsappointment\frontend
   ```

3. Run the provided batch script:
   ```bash
   .\push-to-github.bat
   ```

4. Update the Git user name and email when prompted

### Option 2: Manual Git Commands

1. Navigate to frontend directory:
   ```bash
   cd D:\doctorsappointment\frontend
   ```

2. Initialize git repository:
   ```bash
   git init
   ```

3. Add remote repository:
   ```bash
   git remote add origin https://github.com/23suca46-cmyk/appointment-frontend.git
   ```

4. Configure your Git identity (one-time setup):
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

5. Add all files:
   ```bash
   git add .
   ```

6. Commit changes:
   ```bash
   git commit -m "Initial commit: Doctors appointment frontend with React"
   ```

7. Set main branch and push:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Authentication

When you run `git push`, you may be prompted for authentication:

- **If using HTTPS**: Use your GitHub username and a personal access token (PAT) as password
  - Generate PAT at: https://github.com/settings/tokens

- **If using SSH**: Set up SSH keys first
  - Guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Verifying the Upload

1. Visit your GitHub repository: https://github.com/23suca46-cmyk/appointment-frontend
2. Verify all files are visible in the main branch
3. Check the commit history

## What Gets Uploaded

The following will be pushed:
- ✅ `public/` - HTML and public assets
- ✅ `src/` - React components and JavaScript files
- ✅ `package.json` - Dependencies list
- ✅ `package-lock.json` - Locked dependency versions
- ✅ `README.md` - Project documentation
- ✅ `.gitignore` - Git ignore rules

The following will NOT be uploaded (as per .gitignore):
- ❌ `node_modules/` - Dependencies (can be reinstalled with npm install)
- ❌ `build/` - Build outputs
- ❌ Temporary files and logs

## After Installation

Once Git is installed, you can simply run:

```bash
cd D:\doctorsappointment\frontend
.\push-to-github.bat
```

Or use the manual commands above.

---

**Note**: Make sure to replace "Your Name" and "your.email@example.com" with your actual GitHub username and email address.
