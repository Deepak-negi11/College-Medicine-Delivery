import React from 'react';
import { Heart } from 'lucide-react';

export default function FreeMedicineSection() {
  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Heart className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-green-600">Free Medicine Program</h2>
      </div>
      
      <p className="text-gray-600 mb-4">
        GEHU Bhimtal provides free essential medicines to students and staff with valid ID cards.
        Visit the pharmacy during working hours to avail this benefit.
      </p>

      <div className="bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Available Free Medicines:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Basic pain relievers (Paracetamol)</li>
          <li>Common cold medicines</li>
          <li>First aid supplies</li>
          <li>ORS packets</li>
          <li>Basic antibiotics (with prescription)</li>
        </ul>
      </div>
    </div>
  );
}