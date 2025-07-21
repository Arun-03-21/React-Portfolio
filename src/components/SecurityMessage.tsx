import React from 'react';
import { Shield, ArrowLeft, Home } from 'lucide-react';

interface SecurityMessageProps {
  contentType: 'details' | 'source';
  projectTitle: string;
  onGoBack: () => void;
  onGoHome: () => void;
}

const SecurityMessage: React.FC<SecurityMessageProps> = ({ 
  contentType, 
  projectTitle, 
  onGoBack, 
  onGoHome 
}) => {
  const contentTypeText = contentType === 'details' ? 'project details' : 'source code';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Security Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
            <Shield className="text-white" size={48} />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Access Restricted
          </h1>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              For security reasons, we can't show <strong className="text-orange-700">{contentTypeText}</strong> for the project:
            </p>
            <p className="text-xl font-semibold text-blue-700 mt-2">
              "{projectTitle}"
            </p>
          </div>

          {/* Additional Information */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Why is this restricted?</h3>
            <ul className="text-slate-600 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Proprietary code and business logic protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Client confidentiality and data privacy requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Enterprise security policies and compliance standards</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGoBack}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <ArrowLeft size={20} />
              <span>Go Back to Projects</span>
            </button>
            
            <button
              onClick={onGoHome}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              <Home size={20} />
              <span>Return to Home</span>
            </button>
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-slate-600 text-sm">
              For more information about these projects or to discuss collaboration opportunities, 
              please <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">contact me directly</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMessage;