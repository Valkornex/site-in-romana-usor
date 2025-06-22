
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ContactFormHeader from "./contact/ContactFormHeader";
import ContactFormFields from "./contact/ContactFormFields";
import ContactFormButton from "./contact/ContactFormButton";
import { sendEmail } from "../utils/emailService";

interface ContactFormProps {
  title?: string;
  description?: string;
  showTitle?: boolean;
}

const ContactForm = ({ 
  title = "Trimite-ne un mesaj", 
  description = "Completează formularul de mai jos și îți vom răspunde în cel mai scurt timp.",
  showTitle = true 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with SMTP config:', {
        host: 'advicelink.ro',
        port: 587,
        user: 'office@advicelink.ro'
      });
      
      const success = await sendEmail(formData);
      
      if (success) {
        toast({
          title: "Mesajul a fost trimis cu succes!",
          description: "Îți vom răspunde în cel mai scurt timp la adresa de email furnizată.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Eroare la trimiterea mesajului",
        description: "Te rugăm să încerci din nou sau să ne contactezi direct la office@advicelink.ro",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <ContactFormHeader 
        title={title}
        description={description}
        showTitle={showTitle}
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <ContactFormFields 
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <ContactFormButton 
            isFormValid={isFormValid}
            isSubmitting={isSubmitting}
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
