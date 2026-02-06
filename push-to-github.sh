#!/bin/bash
# Script to push frontend files to GitHub
# Make sure Git is installed before running this script

cd "D:\doctorsappointment\frontend"

echo "Initializing Git repository..."
git init

echo "Adding remote origin..."
git remote add origin https://github.com/23suca46-cmyk/appointment-frontend.git

echo "Configuring Git user (update with your details)..."
git config user.name "Your Name"
git config user.email "your.email@example.com"

echo "Adding all files..."
git add .

echo "Committing files..."
git commit -m "Initial commit: Doctors appointment frontend with React"

echo "Pushing to GitHub (main branch)..."
git branch -M main
git push -u origin main

echo "Done! Frontend files pushed to GitHub."
