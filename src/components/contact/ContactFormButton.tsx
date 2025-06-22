
import React from 'react';
import { Button } from "@/components/ui/button";

interface ContactFormButtonProps {
  isFormValid: boolean;
  isSubmitting: boolean;
}

const ContactFormButton = ({ isFormValid, isSubmitting }: ContactFormButtonProps) => {
  return (
    <>
      <Button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Se trimite...
          </div>
        ) : (
          'Trimite Mesajul'
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Câmpurile marcate sunt obligatorii. 
        Prin trimiterea acestui formular, sunteți de acord cu procesarea datelor conform 
        <a href="/politica-de-confidentialitate" className="text-blue-600 hover:underline"> Politicii de Confidențialitate</a>.
      </p>
    </>
  );
};

export default ContactFormButton;
