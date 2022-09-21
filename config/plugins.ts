module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        secure: true
      },
      settings: {
        defaultFrom: 'strapisendmailprovider@gmail.com',
        defaultReplyTo: 'strapisendmailprovider@gmail.com',
      },
    },
  },
});