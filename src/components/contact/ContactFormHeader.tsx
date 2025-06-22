
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ContactFormHeaderProps {
  title: string;
  description: string;
  showTitle: boolean;
}

const ContactFormHeader = ({ title, description, showTitle }: ContactFormHeaderProps) => {
  if (!showTitle) return null;

  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardHeader>
  );
};

export default ContactFormHeader;
