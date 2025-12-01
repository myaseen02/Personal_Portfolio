# EmailJS Setup Instructions

The contact form is configured to use EmailJS, a **free** service that allows you to send emails directly from your frontend without needing a backend server or paid SMTP service.

## Setup Steps:

### 1. Create a Free EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month on free tier)

### 2. Add an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions to connect your email account
- **Copy your Service ID** (you'll need this)

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use this template structure:
  ```
  From: {{from_name}} <{{from_email}}>
  To: Your Name <your-email@example.com>
  Subject: New Contact Form Message from Portfolio
  
  Name: {{from_name}}
  Email: {{from_email}}
  
  Message:
  {{message}}
  ```
- **Copy your Template ID** (you'll need this)

### 4. Get Your Public Key
- Go to **Account** → **General**
- Find your **Public Key** (also called API Key)
- **Copy your Public Key**

### 5. Update the Contact Form
- Open `src/pages/Contact.jsx`
- Find these lines (around line 30-32):
  ```javascript
  const serviceId = 'YOUR_SERVICE_ID'
  const templateId = 'YOUR_TEMPLATE_ID'
  const publicKey = 'YOUR_PUBLIC_KEY'
  ```
- Replace the placeholder values with your actual IDs:
  ```javascript
  const serviceId = 'service_xxxxxxx'
  const templateId = 'template_xxxxxxx'
  const publicKey = 'your_public_key_here'
  ```

### 6. Install Dependencies
Run this command in your terminal:
```bash
npm install
```

## Alternative Options:

If you prefer not to use EmailJS, here are other options:

### Free Alternatives:
- **Formspree** - Free tier: 50 submissions/month
- **Web3Forms** - Free, unlimited submissions
- **Getform** - Free tier: 50 submissions/month

### Paid Options (if you need more):
- **SendGrid** - Paid service with generous free tier
- **Mailgun** - Paid service
- **AWS SES** - Very affordable, pay-as-you-go

## Testing:

After setup, test the form by:
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message
4. You should see a success message on the form

## Troubleshooting:

- **Form not sending?** Check browser console for errors
- **Email not received?** Check spam folder, verify EmailJS service is connected
- **Rate limit exceeded?** Free tier allows 200 emails/month

The form is now ready to send emails directly to your inbox!

