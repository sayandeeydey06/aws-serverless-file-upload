# AWS Serverless File Upload System 

## 🔗 Live Demo

http://sayan-upload-frontend.s3-website.ap-south-1.amazonaws.com

---

## 📌 Overview

This project is a secure serverless file upload system built using AWS services.
It allows users to upload files directly to Amazon S3 using pre-signed URLs without exposing backend credentials.

---

## 🧠 Architecture

Frontend → API Gateway → Lambda → S3

---

## ⚙️ Features

* Secure file upload using pre-signed URLs
* Serverless architecture (no backend server required)
* Direct browser-to-S3 upload
* CORS handling for browser compatibility
* IAM-based secure access control

---

## 🛠 Tech Stack

* AWS Lambda
* API Gateway
* Amazon S3
* IAM
* JavaScript (Node.js)
* HTML

---

## 📂 Project Structure

frontend/ → UI code
backend/ → Lambda function

---

## 🔐 Security

* Uses IAM roles for controlled access
* No AWS credentials exposed to frontend
