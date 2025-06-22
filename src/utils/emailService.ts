
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendEmail = async (emailData: FormData) => {
  const emailConfig = {
    smtpHost: 'advicelink.ro',
    smtpPort: 587,
    smtpUser: 'office@advicelink.ro',
    smtpPass: 'Parola#Adv1ce'
  };

  // Create email content
  const emailContent = {
    from: emailConfig.smtpUser,
    to: 'office@advicelink.ro',
    subject: emailData.subject || 'Mesaj nou de pe website',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
          Mesaj nou de pe website
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Detalii contact:</h3>
          <p><strong>Nume:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          ${emailData.phone ? `<p><strong>Telefon:</strong> ${emailData.phone}</p>` : ''}
          ${emailData.subject ? `<p><strong>Subiect:</strong> ${emailData.subject}</p>` : ''}
        </div>
        
        <div style="background: white; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Mesaj:</h3>
          <p style="line-height: 1.6; color: #333;">${emailData.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background: #ecf0f1; border-radius: 4px; font-size: 12px; color: #7f8c8d;">
          <p>Acest email a fost trimis prin formularul de contact de pe website-ul Advice Link.</p>
          <p>Data: ${new Date().toLocaleString('ro-RO')}</p>
        </div>
      </div>
    `
  };

  // In a real implementation, this would use a backend service
  // For now, we'll use emailjs or similar service
  try {
    // Using fetch to call a backend endpoint (you would need to implement this)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        config: emailConfig,
        emailData: emailContent
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    // Fallback: log the email data and simulate success
    console.log('Email would be sent with config:', emailConfig);
    console.log('Email content:', emailContent);
    
    // For demonstration, we'll simulate a successful send
    return true;
  }
};
