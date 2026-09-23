export interface Material {
  id: string;
  name: string;
  category: 'Metals' | 'Oils' | 'Polymers' | 'Chemicals';
  basePrice: number;
  currentPrice: number;
  commonUse: string;
  location: string;
  quality: 'High' | 'Medium' | 'Low';
  availability: 'In Stock' | 'Limited' | 'Out of Stock';
  unit: string;
}

export const materialsData: Material[] = [
  // METALS
  { id: 'm1', name: 'Iron (Fe)', category: 'Metals', basePrice: 45, currentPrice: 45, commonUse: 'Construction, manufacturing', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm2', name: 'Steel', category: 'Metals', basePrice: 65, currentPrice: 65, commonUse: 'Infrastructure, automotive', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm3', name: 'Aluminum', category: 'Metals', basePrice: 220, currentPrice: 220, commonUse: 'Aerospace, packaging', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm4', name: 'Copper', category: 'Metals', basePrice: 780, currentPrice: 780, commonUse: 'Electrical wiring, electronics', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm5', name: 'Zinc', category: 'Metals', basePrice: 250, currentPrice: 250, commonUse: 'Galvanizing, batteries', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'm6', name: 'Lead', category: 'Metals', basePrice: 180, currentPrice: 180, commonUse: 'Batteries, radiation shielding', location: 'Kolkata', quality: 'Medium', availability: 'Limited', unit: 'kg' },
  { id: 'm7', name: 'Nickel', category: 'Metals', basePrice: 1800, currentPrice: 1800, commonUse: 'Stainless steel, batteries', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm8', name: 'Chromium', category: 'Metals', basePrice: 950, currentPrice: 950, commonUse: 'Stainless steel, plating', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm9', name: 'Titanium', category: 'Metals', basePrice: 4500, currentPrice: 4500, commonUse: 'Aerospace, medical implants', location: 'Bangalore', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm10', name: 'Magnesium', category: 'Metals', basePrice: 320, currentPrice: 320, commonUse: 'Automotive, aerospace', location: 'Delhi', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'm11', name: 'Tin', category: 'Metals', basePrice: 2100, currentPrice: 2100, commonUse: 'Soldering, coatings', location: 'Chennai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'm12', name: 'Gold', category: 'Metals', basePrice: 6200000, currentPrice: 6200000, commonUse: 'Jewelry, electronics', location: 'Mumbai', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm13', name: 'Silver', category: 'Metals', basePrice: 78000, currentPrice: 78000, commonUse: 'Jewelry, electronics', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm14', name: 'Platinum', category: 'Metals', basePrice: 3200000, currentPrice: 3200000, commonUse: 'Catalytic converters, jewelry', location: 'Bangalore', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm15', name: 'Palladium', category: 'Metals', basePrice: 5500000, currentPrice: 5500000, commonUse: 'Catalytic converters, electronics', location: 'Mumbai', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm16', name: 'Cobalt', category: 'Metals', basePrice: 4200, currentPrice: 4200, commonUse: 'Batteries, superalloys', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm17', name: 'Manganese', category: 'Metals', basePrice: 180, currentPrice: 180, commonUse: 'Steel production, batteries', location: 'Kolkata', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'm18', name: 'Tungsten', category: 'Metals', basePrice: 3800, currentPrice: 3800, commonUse: 'Cutting tools, light bulb filaments', location: 'Hyderabad', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm19', name: 'Molybdenum', category: 'Metals', basePrice: 3500, currentPrice: 3500, commonUse: 'Steel alloys, catalysts', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm20', name: 'Vanadium', category: 'Metals', basePrice: 8500, currentPrice: 8500, commonUse: 'Steel strengthening, batteries', location: 'Bangalore', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm21', name: 'Lithium', category: 'Metals', basePrice: 85000, currentPrice: 85000, commonUse: 'Batteries, ceramics', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'm22', name: 'Bismuth', category: 'Metals', basePrice: 1500, currentPrice: 1500, commonUse: 'Pharmaceuticals, alloys', location: 'Delhi', quality: 'Medium', availability: 'Limited', unit: 'kg' },
  { id: 'm23', name: 'Cadmium', category: 'Metals', basePrice: 480, currentPrice: 480, commonUse: 'Batteries, coatings', location: 'Pune', quality: 'Medium', availability: 'Limited', unit: 'kg' },
  { id: 'm24', name: 'Mercury', category: 'Metals', basePrice: 950, currentPrice: 950, commonUse: 'Thermometers, fluorescent lights', location: 'Chennai', quality: 'Low', availability: 'Limited', unit: 'kg' },
  { id: 'm25', name: 'Antimony', category: 'Metals', basePrice: 1200, currentPrice: 1200, commonUse: 'Flame retardants, alloys', location: 'Kolkata', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'm26', name: 'Tantalum', category: 'Metals', basePrice: 28000, currentPrice: 28000, commonUse: 'Capacitors, superalloys', location: 'Hyderabad', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm27', name: 'Niobium', category: 'Metals', basePrice: 4200, currentPrice: 4200, commonUse: 'Steel alloys, superconductors', location: 'Bangalore', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm28', name: 'Uranium', category: 'Metals', basePrice: 12000, currentPrice: 12000, commonUse: 'Nuclear fuel', location: 'Mumbai', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm29', name: 'Ruthenium', category: 'Metals', basePrice: 950000, currentPrice: 950000, commonUse: 'Electronics, catalysts', location: 'Delhi', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'm30', name: 'Iridium', category: 'Metals', basePrice: 4800000, currentPrice: 4800000, commonUse: 'Electronics, crucibles', location: 'Chennai', quality: 'High', availability: 'Limited', unit: 'kg' },

  // OILS
  { id: 'o1', name: 'Hydraulic Oil', category: 'Oils', basePrice: 250, currentPrice: 250, commonUse: 'Hydraulic systems, machinery', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o2', name: 'Compressor Oil', category: 'Oils', basePrice: 320, currentPrice: 320, commonUse: 'Air compressors', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o3', name: 'Turbine Oil', category: 'Oils', basePrice: 450, currentPrice: 450, commonUse: 'Steam turbines, gas turbines', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o4', name: 'Gear Oil', category: 'Oils', basePrice: 280, currentPrice: 280, commonUse: 'Gearboxes, transmissions', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o5', name: 'Machine Oil', category: 'Oils', basePrice: 180, currentPrice: 180, commonUse: 'General machinery lubrication', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'L' },
  { id: 'o6', name: 'Transformer Oil', category: 'Oils', basePrice: 220, currentPrice: 220, commonUse: 'Electrical transformers', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o7', name: 'Vacuum Pump Oil', category: 'Oils', basePrice: 380, currentPrice: 380, commonUse: 'Vacuum pumps', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o8', name: 'Cutting Oil', category: 'Oils', basePrice: 150, currentPrice: 150, commonUse: 'Metal cutting, machining', location: 'Mumbai', quality: 'Medium', availability: 'In Stock', unit: 'L' },
  { id: 'o9', name: 'Circulating Oil', category: 'Oils', basePrice: 200, currentPrice: 200, commonUse: 'Circulation systems', location: 'Delhi', quality: 'Medium', availability: 'In Stock', unit: 'L' },
  { id: 'o10', name: 'Spindle Oil', category: 'Oils', basePrice: 240, currentPrice: 240, commonUse: 'Spindles, high-speed bearings', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o11', name: 'Lithium Grease', category: 'Oils', basePrice: 180, currentPrice: 180, commonUse: 'Bearings, chassis lubrication', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'o12', name: 'Calcium Grease', category: 'Oils', basePrice: 150, currentPrice: 150, commonUse: 'Water-resistant applications', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'o13', name: 'Sodium Grease', category: 'Oils', basePrice: 140, currentPrice: 140, commonUse: 'High-temperature applications', location: 'Kolkata', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'o14', name: 'Graphite Grease', category: 'Oils', basePrice: 220, currentPrice: 220, commonUse: 'High-pressure applications', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'o15', name: 'Silicone Grease', category: 'Oils', basePrice: 350, currentPrice: 350, commonUse: 'Rubber seals, O-rings', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'o16', name: 'Aluminum Complex Grease', category: 'Oils', basePrice: 280, currentPrice: 280, commonUse: 'Multi-purpose, high-temperature', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'o17', name: 'Engine Oil', category: 'Oils', basePrice: 450, currentPrice: 450, commonUse: 'Internal combustion engines', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o18', name: 'Transmission Fluid', category: 'Oils', basePrice: 380, currentPrice: 380, commonUse: 'Automatic transmissions', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o19', name: 'Brake Fluid', category: 'Oils', basePrice: 280, currentPrice: 280, commonUse: 'Hydraulic brake systems', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o20', name: 'Coolant', category: 'Oils', basePrice: 180, currentPrice: 180, commonUse: 'Engine cooling systems', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o21', name: 'Synthetic Oil', category: 'Oils', basePrice: 650, currentPrice: 650, commonUse: 'High-performance engines', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o22', name: 'Biodegradable Oils', category: 'Oils', basePrice: 420, currentPrice: 420, commonUse: 'Environmentally sensitive areas', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o23', name: 'Food-Grade Lubricants', category: 'Oils', basePrice: 580, currentPrice: 580, commonUse: 'Food processing equipment', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o24', name: 'High-Temperature Chain Oil', category: 'Oils', basePrice: 320, currentPrice: 320, commonUse: 'High-temperature chains', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o25', name: 'Open Gear Lubricants', category: 'Oils', basePrice: 380, currentPrice: 380, commonUse: 'Open gear systems', location: 'Chennai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'o26', name: 'Mineral Oil', category: 'Oils', basePrice: 150, currentPrice: 150, commonUse: 'General lubrication', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'L' },
  { id: 'o27', name: 'Castor Oil', category: 'Oils', basePrice: 280, currentPrice: 280, commonUse: 'Aviation lubricants', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'o28', name: 'Palm Oil', category: 'Oils', basePrice: 120, currentPrice: 120, commonUse: 'Industrial applications', location: 'Hyderabad', quality: 'Medium', availability: 'In Stock', unit: 'L' },
  { id: 'o29', name: 'Neat Cutting Oil', category: 'Oils', basePrice: 220, currentPrice: 220, commonUse: 'Metal cutting operations', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },

  // POLYMERS
  { id: 'p1', name: 'Polyethylene (PE)', category: 'Polymers', basePrice: 95, currentPrice: 95, commonUse: 'Packaging, bottles', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p2', name: 'Polypropylene (PP)', category: 'Polymers', basePrice: 105, currentPrice: 105, commonUse: 'Automotive parts, containers', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p3', name: 'PVC', category: 'Polymers', basePrice: 85, currentPrice: 85, commonUse: 'Pipes, window frames', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p4', name: 'PET', category: 'Polymers', basePrice: 110, currentPrice: 110, commonUse: 'Beverage bottles, textiles', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p5', name: 'PS', category: 'Polymers', basePrice: 120, currentPrice: 120, commonUse: 'Disposable cutlery, packaging', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p6', name: 'PTFE', category: 'Polymers', basePrice: 850, currentPrice: 850, commonUse: 'Non-stick coatings, seals', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p7', name: 'PC', category: 'Polymers', basePrice: 320, currentPrice: 320, commonUse: 'CDs, safety glasses', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p8', name: 'Nylon', category: 'Polymers', basePrice: 280, currentPrice: 280, commonUse: 'Textiles, gears', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p9', name: 'ABS', category: 'Polymers', basePrice: 180, currentPrice: 180, commonUse: 'Automotive parts, electronics', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p10', name: 'PMMA', category: 'Polymers', basePrice: 250, currentPrice: 250, commonUse: 'Acrylic glass, lenses', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p11', name: 'PU', category: 'Polymers', basePrice: 220, currentPrice: 220, commonUse: 'Foam, coatings', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p12', name: 'POM', category: 'Polymers', basePrice: 380, currentPrice: 380, commonUse: 'Gears, bearings', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p13', name: 'Silicone', category: 'Polymers', basePrice: 420, currentPrice: 420, commonUse: 'Sealants, medical devices', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p14', name: 'Epoxy Resin', category: 'Polymers', basePrice: 350, currentPrice: 350, commonUse: 'Adhesives, coatings', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p15', name: 'Phenolic Resin', category: 'Polymers', basePrice: 180, currentPrice: 180, commonUse: 'Laminates, adhesives', location: 'Mumbai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p16', name: 'Polyester', category: 'Polymers', basePrice: 150, currentPrice: 150, commonUse: 'Textiles, composites', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p17', name: 'Neoprene', category: 'Polymers', basePrice: 380, currentPrice: 380, commonUse: 'Wetsuits, gaskets', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p18', name: 'SBR', category: 'Polymers', basePrice: 160, currentPrice: 160, commonUse: 'Tires, footwear', location: 'Chennai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p19', name: 'PVA', category: 'Polymers', basePrice: 220, currentPrice: 220, commonUse: 'Adhesives, coatings', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p20', name: 'PLA', category: 'Polymers', basePrice: 280, currentPrice: 280, commonUse: '3D printing, biodegradable packaging', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p21', name: 'EVA', category: 'Polymers', basePrice: 180, currentPrice: 180, commonUse: 'Foam, adhesives', location: 'Hyderabad', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p22', name: 'PEEK', category: 'Polymers', basePrice: 4500, currentPrice: 4500, commonUse: 'Aerospace, medical implants', location: 'Mumbai', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'p23', name: 'Melamine Formaldehyde', category: 'Polymers', basePrice: 150, currentPrice: 150, commonUse: 'Laminates, tableware', location: 'Delhi', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p24', name: 'Polyisoprene', category: 'Polymers', basePrice: 220, currentPrice: 220, commonUse: 'Tires, adhesives', location: 'Bangalore', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p25', name: 'PVDF', category: 'Polymers', basePrice: 850, currentPrice: 850, commonUse: 'Chemical processing, coatings', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p26', name: 'Kevlar', category: 'Polymers', basePrice: 3200, currentPrice: 3200, commonUse: 'Body armor, composites', location: 'Pune', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'p27', name: 'Cellulose Acetate', category: 'Polymers', basePrice: 280, currentPrice: 280, commonUse: 'Films, coatings', location: 'Kolkata', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p28', name: 'EPDM', category: 'Polymers', basePrice: 320, currentPrice: 320, commonUse: 'Seals, roofing', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'p29', name: 'Urea-Formaldehyde', category: 'Polymers', basePrice: 120, currentPrice: 120, commonUse: 'Adhesives, molding', location: 'Mumbai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'p30', name: 'Rayon', category: 'Polymers', basePrice: 180, currentPrice: 180, commonUse: 'Textiles, medical dressings', location: 'Delhi', quality: 'Medium', availability: 'In Stock', unit: 'kg' },

  // CHEMICALS
  { id: 'c1', name: 'Sulfuric Acid', category: 'Chemicals', basePrice: 45, currentPrice: 45, commonUse: 'Fertilizers, batteries', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c2', name: 'Hydrochloric Acid', category: 'Chemicals', basePrice: 35, currentPrice: 35, commonUse: 'Metal cleaning, pH control', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c3', name: 'Nitric Acid', category: 'Chemicals', basePrice: 55, currentPrice: 55, commonUse: 'Fertilizers, explosives', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c4', name: 'Sodium Hydroxide', category: 'Chemicals', basePrice: 42, currentPrice: 42, commonUse: 'Soap making, paper production', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c5', name: 'Ammonia', category: 'Chemicals', basePrice: 38, currentPrice: 38, commonUse: 'Fertilizers, cleaning products', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c6', name: 'Phosphoric Acid', category: 'Chemicals', basePrice: 48, currentPrice: 48, commonUse: 'Fertilizers, food additives', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c7', name: 'Calcium Carbonate', category: 'Chemicals', basePrice: 18, currentPrice: 18, commonUse: 'Construction, pharmaceuticals', location: 'Hyderabad', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c8', name: 'Sodium Carbonate', category: 'Chemicals', basePrice: 25, currentPrice: 25, commonUse: 'Glass making, detergents', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c9', name: 'Acetic Acid', category: 'Chemicals', basePrice: 52, currentPrice: 52, commonUse: 'Vinegar, solvents', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c10', name: 'Hydrogen Peroxide', category: 'Chemicals', basePrice: 65, currentPrice: 65, commonUse: 'Bleaching, disinfection', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c11', name: 'Ethylene', category: 'Chemicals', basePrice: 85, currentPrice: 85, commonUse: 'Plastics, antifreeze', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c12', name: 'Propylene', category: 'Chemicals', basePrice: 78, currentPrice: 78, commonUse: 'Plastics, resins', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c13', name: 'Benzene', category: 'Chemicals', basePrice: 95, currentPrice: 95, commonUse: 'Plastics, synthetic fibers', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c14', name: 'Toluene', category: 'Chemicals', basePrice: 88, currentPrice: 88, commonUse: 'Solvents, fuel additives', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c15', name: 'Xylene', category: 'Chemicals', basePrice: 92, currentPrice: 92, commonUse: 'Solvents, chemical production', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c16', name: 'Butadiene', category: 'Chemicals', basePrice: 105, currentPrice: 105, commonUse: 'Synthetic rubber, plastics', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c17', name: 'Methanol', category: 'Chemicals', basePrice: 42, currentPrice: 42, commonUse: 'Fuel, solvents', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c18', name: 'Ethanol', category: 'Chemicals', basePrice: 58, currentPrice: 58, commonUse: 'Fuel, beverages', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c19', name: 'Sodium Hypochlorite', category: 'Chemicals', basePrice: 32, currentPrice: 32, commonUse: 'Bleach, disinfection', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c20', name: 'Chlorine', category: 'Chemicals', basePrice: 45, currentPrice: 45, commonUse: 'Water treatment, PVC production', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c21', name: 'Alum', category: 'Chemicals', basePrice: 28, currentPrice: 28, commonUse: 'Water purification, paper sizing', location: 'Hyderabad', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c22', name: 'Activated Carbon', category: 'Chemicals', basePrice: 120, currentPrice: 120, commonUse: 'Water filtration, air purification', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c23', name: 'Sodium Silicate', category: 'Chemicals', basePrice: 38, currentPrice: 38, commonUse: 'Adhesives, detergents', location: 'Delhi', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c24', name: 'Calcium Oxide', category: 'Chemicals', basePrice: 22, currentPrice: 22, commonUse: 'Cement, steel production', location: 'Bangalore', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c25', name: 'Gypsum', category: 'Chemicals', basePrice: 15, currentPrice: 15, commonUse: 'Construction, agriculture', location: 'Chennai', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c26', name: 'Bitumen', category: 'Chemicals', basePrice: 35, currentPrice: 35, commonUse: 'Road construction, roofing', location: 'Pune', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c27', name: 'Silicon Dioxide', category: 'Chemicals', basePrice: 45, currentPrice: 45, commonUse: 'Glass, electronics', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c28', name: 'Sodium Sulfide', category: 'Chemicals', basePrice: 52, currentPrice: 52, commonUse: 'Pulp production, leather tanning', location: 'Hyderabad', quality: 'Medium', availability: 'In Stock', unit: 'kg' },
  { id: 'c29', name: 'Formaldehyde', category: 'Chemicals', basePrice: 48, currentPrice: 48, commonUse: 'Resins, disinfectants', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c30', name: 'Aniline', category: 'Chemicals', basePrice: 180, currentPrice: 180, commonUse: 'Dyes, rubber additives', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c31', name: 'Hydrogen Sulfide', category: 'Chemicals', basePrice: 95, currentPrice: 95, commonUse: 'Chemical synthesis', location: 'Bangalore', quality: 'High', availability: 'Limited', unit: 'kg' },
  { id: 'c32', name: 'Citric Acid', category: 'Chemicals', basePrice: 85, currentPrice: 85, commonUse: 'Food additives, cleaning', location: 'Chennai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c33', name: 'Sodium Benzoate', category: 'Chemicals', basePrice: 120, currentPrice: 120, commonUse: 'Food preservatives', location: 'Pune', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c34', name: 'Urea', category: 'Chemicals', basePrice: 28, currentPrice: 28, commonUse: 'Fertilizers, adhesives', location: 'Kolkata', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c35', name: 'Ammonium Nitrate', category: 'Chemicals', basePrice: 32, currentPrice: 32, commonUse: 'Fertilizers, explosives', location: 'Hyderabad', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c36', name: 'Potassium Chloride', category: 'Chemicals', basePrice: 35, currentPrice: 35, commonUse: 'Fertilizers, medical uses', location: 'Mumbai', quality: 'High', availability: 'In Stock', unit: 'kg' },
  { id: 'c37', name: 'Pesticides', category: 'Chemicals', basePrice: 280, currentPrice: 280, commonUse: 'Crop protection', location: 'Delhi', quality: 'High', availability: 'In Stock', unit: 'L' },
  { id: 'c38', name: 'Herbicides', category: 'Chemicals', basePrice: 320, currentPrice: 320, commonUse: 'Weed control', location: 'Bangalore', quality: 'High', availability: 'In Stock', unit: 'L' },
];

export function updatePrices(materials: Material[]): Material[] {
  return materials.map(material => ({
    ...material,
    currentPrice: material.basePrice + (Math.random() * 20 - 10) // Random fluctuation ±10
  }));
}

export function getCategoryMaterials(category: string): Material[] {
  return materialsData.filter(m => m.category === category);
}