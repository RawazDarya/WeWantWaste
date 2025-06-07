import React, { useState } from 'react';
import { processedSkipData, getSkipRecommendation, getSkipCapacity } from '../data/skipData';
import { SkipWithCalculatedPrice } from '../types';
import { ArrowRight, Check, Truck, Copyright as Weight } from 'lucide-react';

const SkipSelector: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipWithCalculatedPrice | null>(null);
  const [filter, setFilter] = useState<'all' | 'road' | 'heavy'>('all');

  const filteredSkips = processedSkipData.filter(skip => {
    if (filter === 'road') return skip.allowed_on_road;
    if (filter === 'heavy') return skip.allows_heavy_waste;
    return true;
  });

  const getSkipImage = (size: number): string => {
    // Using construction/waste management related images from Pexels
    const images = {
      4: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      6: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      8: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      10: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      12: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      14: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      16: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      20: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
      40: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
    };
    return images[size as keyof typeof images] || images[8];
  };

  return (
    <section id="skips" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the skip size that best suits your needs. All prices include VAT and 14-day hire period.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              All Skips
            </button>
            <button
              onClick={() => setFilter('road')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'road' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Road Legal
            </button>
            <button
              onClick={() => setFilter('heavy')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'heavy' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Heavy Waste
            </button>
          </div>
        </div>

        {/* Skip Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSkips.map((skip) => (
            <div
              key={skip.id}
              className={`skip-card cursor-pointer ${
                selectedSkip?.id === skip.id ? 'ring-2 ring-primary-500 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedSkip(skip)}
            >
              {/* Skip Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getSkipImage(skip.size)}
                  alt={`${skip.size} yard skip`}
                  className="skip-image w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                  {skip.size} Yards
                </div>
                {selectedSkip?.id === skip.id && (
                  <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                    <div className="bg-white rounded-full p-2">
                      <Check className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Skip Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {skip.size} Yard Skip
                    </h3>
                    <p className="text-sm text-gray-600">
                      {skip.hire_period_days} day hire period
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      £{skip.total_price.toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-500">
                      inc. VAT
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {getSkipRecommendation(skip.size)}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    {getSkipCapacity(skip.size)}
                  </div>
                  {skip.allowed_on_road && (
                    <div className="flex items-center text-sm text-accent-600">
                      <Truck className="w-4 h-4 mr-2" />
                      Road placement allowed
                    </div>
                  )}
                  {skip.allows_heavy_waste && (
                    <div className="flex items-center text-sm text-secondary-600">
                      <Weight className="w-4 h-4 mr-2" />
                      Heavy waste accepted
                    </div>
                  )}
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2 group">
                  <span>Select This Skip</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skip Summary */}
        {selectedSkip && (
          <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Selected: {selectedSkip.size} Yard Skip
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-semibold">£{selectedSkip.price_before_vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">VAT ({selectedSkip.vat}%):</span>
                    <span className="font-semibold">£{selectedSkip.vat_amount.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total Price:</span>
                      <span className="font-bold text-primary-600">£{selectedSkip.total_price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <button className="btn-primary text-lg px-8 py-4">
                  Book This Skip Now
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Free delivery & collection included
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkipSelector;