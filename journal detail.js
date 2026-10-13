
(function () {
  'use strict';

  const JOURNALS_DATA = {
    'aerospace-inconel-718': {
      id: 'aerospace-inconel-718',
      number: '01',
      kicker: 'RESEARCH PAPER 01 / AEROSPACE METALLURGY',
      title: 'DMLS Sintering of Inconel 718: Overcoming Thermal Fatigue in Rocket Combustion Chambers',
      tagline: 'Empirical Laser Parameter Optimization and Post-HIP Metallurgy for Extreme Cryogenic & Plasma Environments',
      heroImage: 'assets/contact_canvas_composition.jpg',
      heroImageAlt: 'DMLS Inconel 718 rocket combustion chamber liner with cooling channels',
      doi: 'DOI: 10.5824/pnx.2026.04-inconel',
      pubDate: 'October 04, 2026',
      readTime: '8 Min Read',
      author: {
        name: 'Dr. Vikram Sethi',
        role: 'Chief Metallurgist & Director of High-Temp Materials',
        avatar: 'assets/avatar_rohit.jpg'
      },
      description: 'This investigation evaluates Direct Metal Laser Sintering (DMLS) of Nickel-Chromium Inconel 718 for liquid rocket engine regenerative jackets. By optimizing laser volumetric energy density and utilizing sub-vacuum Hot Isostatic Pressing (HIP), we achieved >99.85% relative density and eliminated micro-void coalescence under 1,100°C thermal shocks.',
      kpis: [
        { val: '1,350', unit: 'MPa', label: 'Ultimate Tensile' },
        { val: '>99.8%', unit: 'dense', label: 'Microstructure Density' },
        { val: '1,100', unit: '°C', label: 'Thermal Endurance' },
        { val: '3.5x', unit: 'higher', label: 'Fatigue Threshold' }
      ],
      blueprintSpecs: {
        'Alloy Standard': 'AMS 5662 / UNS N07718',
        'Laser Power': '400W Yb-Fiber Laser',
        'Scan Strategy': '67° Stripe Meander Rotation',
        'Chamber Argon': 'O₂ < 50 ppm Purity'
      },
      contextHeading: 'Problem Statement & Experimental Framework',
      contextParagraph1: 'Regeneratively cooled combustion chambers experience catastrophic thermal stress due to radical temperature deltas: liquid methane at -160°C circulating through cooling passages adjacent to a 3,200°C combustion core. Traditional electron-beam welded assemblies suffer fatigue cracking at weld seams.',
      contextParagraph2: 'In this paper, PrintNexa engineers fabricated monolithic combustion chamber liners featuring conformal helical cooling passages impossible to machine via 5-axis CNC. Tensile specimens tested per ASTM E8M revealed exceptional ductility (16.8% elongation) post-precipitation heat treatment.',
      workflow: [
        {
          num: '01',
          title: 'Powder Sieve & Ingestion',
          desc: 'Gas-atomized Inconel 718 powder (15–45 μm PSD) conditioned under desiccated argon at 60°C.'
        },
        {
          num: '02',
          title: 'Laser Sintering at 400W',
          desc: 'Layer deposition at 30 μm with 960 mm/s scan velocity in a heated build chamber at 120°C.'
        },
        {
          num: '03',
          title: 'Hot Isostatic Pressing (HIP)',
          desc: 'Vacuum furnace HIP cycle at 1,160°C under 100 MPa argon pressure to seal sub-surface porosity.'
        },
        {
          num: '04',
          title: 'Tensile & CT Metrology',
          desc: 'Universal tensile testing per ASTM E8M and non-destructive 450kV industrial CT X-Ray scanning.'
        }
      ],
      specsMatrix: [
        { k: 'Material Composition', v: 'Ni (50-55%), Cr (17-21%), Fe (Bal), Nb (4.75-5.5%), Mo (2.8-3.3%), Ti (0.65-1.15%)' },
        { k: 'Yield Strength (0.2% Offset)', v: 'As-Built: 820 MPa · Post-HIP & Aging: 1,120 MPa' },
        { k: 'Ultimate Tensile Strength (UTS)', v: 'As-Built: 1,020 MPa · Post-HIP & Aging: 1,350 MPa' },
        { k: 'Elongation at Fracture', v: '16.8% (Exceeding wrought ASTM specification requirement of 12%)' },
        { k: 'Hardness (Rockwell C)', v: '44 – 48 HRC' },
        { k: 'Conformal Passage Burst Pressure', v: 'Hydrostatically verified to 480 bar without deflection or leakage' }
      ],
      keyFindings: 'Monolithic additive Inconel 718 with conformal cooling channels eliminated 14 individual weld seams, reduced total component mass by 42%, and survived 50 consecutive full-duration hot-fire cycles without micro-fissuring.',
      whyPillars: [
        {
          icon: 'fa-fire',
          title: 'Survives 1,100°C Hot-Fire Cycles',
          desc: 'Maintains over 85% of room-temperature tensile modulus at extreme rocket exhaust temperatures.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Zero Leakage Conformal Passages',
          desc: 'Eliminates leak-prone brazed jacket interfaces, ensuring pure regenerative cooling fluid dynamics.'
        },
        {
          icon: 'fa-microscope',
          title: 'Non-Destructive CT X-Ray Audited',
          desc: 'Every chamber is scanned at 50-micron voxel resolution to verify zero interior un-sintered powder.'
        },
        {
          icon: 'fa-bolt',
          title: '14-Day Delivery from CAD File',
          desc: 'Shortens rocket engine iteration cycles from 9 months (forging/brazing) down to 2 weeks.'
        }
      ],
      pricingTiers: [
        {
          name: 'Metallurgical Coupon Feasibility',
          target: 'Validate material grain structure, tensile strength & density',
          price: '850',
          period: 'per test matrix',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            '5x Tensile test coupons sintered per ASTM E8M',
            'Full chemical assay and powder lot certificate',
            'Cross-sectional SEM optical microscopy micrographs',
            'Density verification per Archimedes method (>99.8%)',
            'Engineering consultation call with Lead Metallurgist'
          ]
        },
        {
          name: 'First Article Prototype Chamber',
          target: 'Sub-scale combustion chamber with conformal jacket channels',
          price: '3,800',
          period: 'per chamber build',
          turnaround: '7-10 Business Days',
          featured: true,
          features: [
            'Full DMLS build in certified Inconel 718 alloy',
            'Vacuum furnace stress relief + Hot Isostatic Pressing (HIP)',
            'Wire EDM parting from build platform',
            'Hydrostatic pressure proof test up to 300 bar',
            'AS9100D Certificate of Conformance + CMM report'
          ]
        },
        {
          name: 'Production Propulsion Fleet',
          target: 'Batch manufacturing runs for commercial launch vehicles',
          price: 'Custom',
          period: 'per production contract',
          turnaround: 'Scheduled Deliveries',
          featured: false,
          features: [
            'Dedicated 400W DMLS build plates in inert argon bay',
            '5-Axis CNC finish machining of flange datums & threads',
            '100% industrial CT X-Ray internal void inspection',
            'Serialized laser engraved identification plates',
            'On-site propulsion engineer sign-off'
          ]
        }
      ],
      faqs: [
        {
          q: 'Why is Inconel 718 preferred over 316L Stainless Steel for rocket engines?',
          a: 'While 316L is cheaper, its tensile strength drops precipitously above 550°C. Inconel 718 utilizes gamma double prime (γ") precipitate strengthening, allowing it to maintain immense structural strength and creep resistance up to 700°C continuous and 1,100°C transient peaks.'
        },
        {
          q: 'How do you remove un-sintered powder from narrow internal cooling channels?',
          a: 'We utilize a multi-axis automated ultrasonic vibration de-powdering station combined with high-pressure heated dry air purging. Each channel is subsequently verified with a flexible video-borescope inspection before post-HIP heat treatment.'
        },
        {
          q: 'Does Hot Isostatic Pressing (HIP) cause dimensional shrinkage?',
          a: 'HIP produces uniform isotropic consolidation of any micro-voids, resulting in a predictable 0.15% to 0.25% volumetric contraction. Our DFAM engineering software pre-compensates CAD dimensions so the final cooled component sits precisely within tolerance.'
        },
        {
          q: 'Can this paper’s research be applied to gas turbines and turbochargers?',
          a: 'Yes. The identical metallurgy parameters and HIP heat treatments are routinely deployed for aerospace turbine blades, turbocharger wastegates, and high-temperature nuclear heat exchangers.'
        }
      ],
      ctaHeadline: 'Ready to Deploy DMLS Inconel 718 in Your Hardware?'
    },

    'generative-automotive-chassis': {
      id: 'generative-automotive-chassis',
      number: '02',
      kicker: 'RESEARCH PAPER 02 / AUTOMOTIVE DFAM',
      title: 'Generative Topology Optimization for Formula SAE Suspension Knuckles: 48% Mass Reduction',
      tagline: 'Algorithmic Density Distribution and Multi-Load FEA Simulation for High-Stiffness Unsprung Mass',
      heroImage: 'assets/precision_architecture.jpg',
      heroImageAlt: 'Generative lightweight lattice suspension knuckle upright',
      doi: 'DOI: 10.5824/pnx.2026.04-knuckle',
      pubDate: 'September 28, 2026',
      readTime: '6 Min Read',
      author: {
        name: 'Elena Rostova',
        role: 'Lead DFAM & Computational Optimization Engineer',
        avatar: 'assets/avatar_sneha.jpg'
      },
      description: 'This case study details the computational redesign of an automotive front upright assembly. Combining SIMP topology algorithms with laser powder bed fusion in AlSi10Mg alloy, we slashed component weight from 3.4kg to 1.76kg while boosting cornering camber stiffness by 22% under 3.5G lateral cornering loads.',
      kpis: [
        { val: '48%', unit: 'less', label: 'Unsprung Mass' },
        { val: '22%', unit: 'higher', label: 'Torsional Stiffness' },
        { val: '3.5G', unit: 'load', label: 'Cornering Acceleration' },
        { val: '2.85', unit: 'SF', label: 'Factor of Safety' }
      ],
      blueprintSpecs: {
        'Optimization Code': 'SIMP Generative Density',
        'FEA Package': 'Altair OptiStruct / ANSYS',
        'Material': 'AlSi10Mg Additive Aluminum',
        'Brake Mount': 'Direct Integrated Caliper Boss'
      },
      contextHeading: 'Unsprung Mass Reduction & FEA Multi-Physics',
      contextParagraph1: 'Unsprung mass is the enemy of racing vehicle grip. Every gram removed from wheels, hubs, and suspension knuckles directly accelerates damper reaction times, keeping tires glued to the tarmac across curbs and undulations.',
      contextParagraph2: 'Traditional CNC machined billet knuckles compromise between machine tool reach and dead weight. By switching to generative additive design, our algorithms hollowed out zero-load interior volumes and created organic bone-like load paths connecting upper ball joints, steering tie-rods, and brake caliper mounts.',
      workflow: [
        {
          num: '01',
          title: 'Boundary & Load Vectoring',
          desc: 'Establish 4 critical load cases: 3.5G lateral cornering, 2.0G bump impact, and 1.8G maximum braking.'
        },
        {
          num: '02',
          title: 'Algorithmic Material Slicing',
          desc: '45 algorithmic iterations in Altair OptiStruct converging on maximum stiffness per volume.'
        },
        {
          num: '03',
          title: 'AlSi10Mg Additive Printing',
          desc: 'Laser powder bed fusion with zero support interference on critical bearing mounting bores.'
        },
        {
          num: '04',
          title: 'T4/T6 Solution Heat Treatment',
          desc: 'Solution treatment at 530°C and artificial aging at 160°C to elevate tensile yield to 280 MPa.'
        }
      ],
      specsMatrix: [
        { k: 'Baseline Weight (CNC Billet 6061-T6)', v: '3,410 grams per corner' },
        { k: 'PrintNexa Generative AlSi10Mg Weight', v: '1,765 grams per corner (48.2% weight reduction)' },
        { k: 'Lateral Camber Deflection', v: 'Reduced from 0.42° to 0.33° under 5,200 N cornering load' },
        { k: 'Yield Strength (T6 Condition)', v: '280 MPa' },
        { k: 'Ultimate Tensile Strength', v: '380 MPa' },
        { k: 'Fatigue Endurance Limit (10⁷ Cycles)', v: '110 MPa per ASTM E466' }
      ],
      keyFindings: 'The 48% reduction in unsprung mass enabled the test vehicle to reduce curb shock rebound time by 34ms, translating to a measurable 0.42-second per lap advantage on standard FIA racing circuits.',
      whyPillars: [
        {
          icon: 'fa-gauge-high',
          title: 'Sharper Steering Response',
          desc: 'Drastically reduced wheel assembly moment of inertia yields immediate steering turn-in authority.'
        },
        {
          icon: 'fa-code-branch',
          title: 'Consolidated Brake Caliper Mounts',
          desc: 'Integrated caliper mounts eliminate separate steel brackets, bolts, and alignment shims.'
        },
        {
          icon: 'fa-cube',
          title: 'Internal Hollow Channels',
          desc: 'Integrated internal cooling air passages directing clean turbulent-free air straight to brake rotors.'
        },
        {
          icon: 'fa-circle-check',
          title: 'ASME Y14.5 GD&T Certified',
          desc: 'Bearing journals and tie-rod tapers are CNC finish-machined to H7 tolerance within ±0.012 mm.'
        }
      ],
      pricingTiers: [
        {
          name: 'DFAM Upright Diagnostic Review',
          target: 'Evaluate weight-saving potential on existing CAD suspension models',
          price: '450',
          period: 'per component audit',
          turnaround: '2-3 Business Days',
          featured: false,
          features: [
            'Multi-load case FEA stiffness benchmark',
            'Generative density distribution simulation map',
            'Target weight saving prediction (% yield)',
            'Additive manufacturing orientation analysis',
            'Comprehensive PDF engineering report'
          ]
        },
        {
          name: 'Prototype Pair (L + R Uprights)',
          target: 'Functional track-ready pair for vehicle dynamometer testing',
          price: '1,950',
          period: 'per axle set',
          turnaround: '5-7 Business Days',
          featured: true,
          features: [
            'Left and Right generative knuckles printed in AlSi10Mg',
            'T6 solution heat treated & artificial aging cycle',
            '5-Axis CNC machined bearing press-fits & caliper threads',
            '3D optical laser scan dimensional verification report',
            'Includes press-fit wheel bearing installation'
          ]
        },
        {
          name: 'Full Vehicle Racing Suite (4 Corners)',
          target: 'Complete front and rear lightweight suspension package',
          price: '3,600',
          period: 'per complete car suite',
          turnaround: '10-12 Business Days',
          featured: false,
          features: [
            'All 4 uprights + lightweight steering rocker arms',
            'Hard anodized corrosion-protective surface finish',
            'Full strain-gauge physical load verification report',
            'Complete native STEP models + 2D GD&T manufacturing prints',
            'Trackside engineering support consultation'
          ]
        }
      ],
      faqs: [
        {
          q: 'How does AlSi10Mg aluminum fatigue life compare to forged 6061-T6?',
          a: 'Post-T6 heat treatment, AlSi10Mg exhibits a high-cycle fatigue strength of ~110 MPa at 10⁷ cycles, which matches cast aluminum and approaches wrought 6061-T6. Because generative algorithms eliminate sharp 90-degree internal fillets, stress concentrations are drastically lower.'
        },
        {
          q: 'Are bearing press-fit journals printed directly or machined afterward?',
          a: 'We add a 1.2 mm post-machining stock allowance to critical bearing bores and ball joint tapers. Following T6 heat treatment, these surfaces are precision-bored on our 5-axis CNC machining center to achieve strict H7 tolerance (±0.012 mm).'
        },
        {
          q: 'What load cases are essential for suspension topology optimization?',
          a: 'We evaluate a minimum of three combined load vectors: 1) 3.5G lateral cornering force, 2) 2.0G vertical bump impact, and 3) 1.8G longitudinal braking deceleration with caliper reaction torque.'
        },
        {
          q: 'Can this methodology be applied to road-legal production sports cars?',
          a: 'Yes. Several European supercar OEMs now utilize this exact generative additive manufacturing process for low-volume production vehicles, eliminating tooling capital for specialized model variants.'
        }
      ],
      ctaHeadline: 'Accelerate Your Vehicle Dynamics with Generative DFAM'
    },

    'medical-titanium-implants': {
      id: 'medical-titanium-implants',
      number: '03',
      kicker: 'RESEARCH PAPER 03 / BIOMEDICAL IMPLANTS',
      title: 'Trabecular Porosity in Titanium Ti-6Al-4V: Enhancing Osseointegration in Patient-Specific Cages',
      tagline: 'Voronoi Scaffold Biomimicry and Elastic Modulus Matching to Prevent Bone Stress Shielding',
      heroImage: 'assets/about_hero_vase.jpg',
      heroImageAlt: 'Porous titanium spinal fusion cage with open Voronoi trabecular lattice',
      doi: 'DOI: 10.5824/pnx.2026.04-bio',
      pubDate: 'September 15, 2026',
      readTime: '7 Min Read',
      author: {
        name: 'Dr. Michael Chang',
        role: 'Biomaterials Specialist & Medical Additive Lead',
        avatar: 'assets/avatar_arjun.jpg'
      },
      description: 'Solid titanium implants possess an elastic modulus (~110 GPa) significantly stiffer than human cortical and cancellous bone (~10-18 GPa), causing adverse stress shielding and bone resorption. This research synthesizes open-cell Voronoi trabecular titanium scaffolds with 65% porosity, mimicking natural bone mechanics and accelerating vascularization.',
      kpis: [
        { val: '65%', unit: 'porous', label: 'Trabecular Volume' },
        { val: '300-500', unit: 'μm', label: 'Optimum Pore Size' },
        { val: '3.2', unit: 'GPa', label: 'Matched Modulus' },
        { val: '100%', unit: 'pure', label: 'Cleanroom Sterile' }
      ],
      blueprintSpecs: {
        'Alloy Grade': 'Ti-6Al-4V ELI (ASTM F136)',
        'Lattice Type': 'Stochastic Voronoi Architecture',
        'Cleanroom Class': 'ISO Class 7 Cleanroom',
        'Biological Std': 'ISO 10993 Biocompatibility'
      },
      contextHeading: 'Biomechanical Modulus Matching & Bone Ingrowth',
      contextParagraph1: 'When a conventional solid titanium cage is implanted between vertebral discs, the rigid metal carries virtually all mechanical loads. Deprived of normal physiological strain, the surrounding natural bone resorbs—a phenomenon known as stress shielding that leads to cage subsidence and fusion failure.',
      contextParagraph2: 'PrintNexa utilizes algorithmically generated stochastic Voronoi cellular structures. By precisely controlling strut diameter (220 μm) and pore size (300 to 500 μm), we tuned the effective compressive modulus to 3.2 GPa—mirroring cancellous bone while promoting rapid capillary blood vessel growth and osseointegration.',
      workflow: [
        {
          num: '01',
          title: 'Patient CT Data Reconstruction',
          desc: 'Segmenting patient DICOM CT scans to model anatomical endplate geometry matching vertebral surfaces.'
        },
        {
          num: '02',
          title: 'Voronoi Scaffold Generation',
          desc: 'Algorithmic population of open interconnected cell architectures with 65% designed porosity.'
        },
        {
          num: '03',
          title: 'DMLS Cleanroom Sintering',
          desc: 'Additive manufacturing in certified medical-grade Ti-6Al-4V ELI under ultra-high purity argon.'
        },
        {
          num: '04',
          title: 'Vacuum Passivation & Sonic Clean',
          desc: 'Multi-stage ultrasonic chemical etching removing loose powder particles per ASTM F2847.'
        }
      ],
      specsMatrix: [
        { k: 'Material Specification', v: 'Ti-6Al-4V ELI (Extra Low Interstitials) per ASTM F136 / ASTM F3001' },
        { k: 'Pore Diameter Range', v: '300 μm – 500 μm (Clinical optimum for osteoblast cell migration)' },
        { k: 'Interconnected Porosity Ratio', v: '65% ± 2% throughout trabecular volume' },
        { k: 'Compressive Elastic Modulus', v: '3.2 GPa (Within healthy human trabecular bone envelope of 1.5 – 5.0 GPa)' },
        { k: 'Compressive Yield Strength', v: '145 MPa (Surpassing peak lumbar physiological loads by 8x)' },
        { k: 'Cleanroom Certification', v: 'Fabricated in ISO Class 7 cleanroom; endotoxin level < 0.25 EU/mL' }
      ],
      keyFindings: 'In-vitro osteoblast proliferation assays demonstrated a 3.8x higher bone ingrowth rate at 6 weeks compared to solid grit-blasted titanium surfaces, with zero evidence of stress shielding-induced osteolysis.',
      whyPillars: [
        {
          icon: 'fa-bone',
          title: 'Eliminates Stress Shielding',
          desc: 'Elastic modulus tuned to 3.2 GPa transfers natural mechanical strain to surrounding bone tissue.'
        },
        {
          icon: 'fa-dna',
          title: 'Open Pore Vascularization',
          desc: '300-500 μm pore channels allow rapid blood vessel formation and deep internal bone graft fusion.'
        },
        {
          icon: 'fa-hand-holding-medical',
          title: 'Patient-Conforming Endplates',
          desc: 'Matches individual patient lordotic angles and endplate topography for maximum contact stability.'
        },
        {
          icon: 'fa-shield-virus',
          title: 'Ultrasonic Particle Removal',
          desc: 'Exhaustive chemical etching and multi-tank ultrasonic cleaning ensures zero free powder migration.'
        }
      ],
      pricingTiers: [
        {
          name: 'In-Vitro Biocompatibility Test Coupon',
          target: 'Cell adhesion & compression mechanical testing batches',
          price: '550',
          period: 'per coupon lot (5 units)',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            '5x Trabecular Voronoi compression test cylinders',
            'Ti-6Al-4V ELI certified powder chemical assay',
            'Full micro-CT porosity distribution analysis',
            'Multi-stage ultrasonic cleaned & passivated',
            'Includes ISO 10993 cytotoxicity compliance documentation'
          ]
        },
        {
          name: 'Patient-Specific Spinal Cage Pilot',
          target: 'Anatomical implants tailored to patient DICOM scan data',
          price: '2,200',
          period: 'per customized implant',
          turnaround: '5-6 Business Days',
          featured: true,
          features: [
            'CAD reconstruction from patient DICOM slice data',
            'Engineered porous trabecular core + solid peripheral ring',
            'Cleanroom production under certified ISO Class 7 conditions',
            'Full CMM metrology inspection report with bubble drawing',
            'Individual sterile blister vacuum packaging'
          ]
        },
        {
          name: 'Medical OEM Production Contract',
          target: 'Scalable batch manufacturing for orthopedics manufacturers',
          price: 'Custom',
          period: 'per supply agreement',
          turnaround: 'Scheduled Deliveries',
          featured: false,
          features: [
            'Batch manufacturing runs from 50 to 5,000 implants',
            'Full ISO 13485 medical device quality management',
            'Lot-specific tensile, chemistry & endotoxin testing',
            'FDA 510(k) regulatory submission documentation support',
            'Dedicated biomedical engineering account liaison'
          ]
        }
      ],
      faqs: [
        {
          q: 'Why is 300 to 500 microns considered the optimal pore size for bone ingrowth?',
          a: 'Extensive orthopedic literature confirms that pores smaller than 200 μm restrict capillary vessel development, while pores larger than 600 μm delay osteoblast bridge formation. The 300–500 μm window provides the ideal surface-area-to-volume ratio for vascularized osseointegration.'
        },
        {
          q: 'How do you guarantee that no loose titanium particles detach inside a patient?',
          a: 'We perform a proprietary 4-stage post-processing protocol: 1) high-energy multi-frequency ultrasonic solvent baths, 2) vacuum acid etching to dissolve partly fused satellite beads, 3) vacuum thermal bake, and 4) particle count verification per ASTM F2847.'
        },
        {
          q: 'Can the porous lattice withstand high spinal compression loads?',
          a: 'Yes. While the effective modulus is lowered to match natural bone (3.2 GPa), the compressive yield strength remains 145 MPa. A typical lumbar cage experiences peak physiological loads of ~2,000 N, which translates to a safety factor greater than 8.'
        },
        {
          q: 'Is Ti-6Al-4V ELI compatible with magnetic resonance imaging (MRI)?',
          a: 'Yes. Titanium has minimal magnetic susceptibility compared to stainless steel. Our porous trabecular structure reduces bulk metal volume by 65%, significantly decreasing MRI artifact distortion around adjacent neural structures.'
        }
      ],
      ctaHeadline: 'Partner with PrintNexa for Biomedical Additive Devices'
    },

    'robotic-continuous-carbon': {
      id: 'robotic-continuous-carbon',
      number: '04',
      kicker: 'RESEARCH PAPER 04 / ROBOTICS & COMPOSITE TOOLING',
      title: 'Continuous Carbon Fiber End-Effectors: Boosting Cobot Payload and Cycle Times',
      tagline: 'Selective Strand Trajectory Routing in Micro-Carbon Onyx for Lightweight High-Torsional Jaws',
      heroImage: 'assets/engineer_lab.jpg',
      heroImageAlt: 'Industrial collaborative robot arm with custom continuous carbon fiber gripper',
      doi: 'DOI: 10.5824/pnx.2026.04-robotics',
      pubDate: 'September 02, 2026',
      readTime: '5 Min Read',
      author: {
        name: 'Marcus Vance',
        role: 'Robotics Tooling Engineer & Automation Director',
        avatar: 'assets/avatar_rohit.jpg'
      },
      description: 'Collaborative robot arms (cobots) operate with strict payload limits (typically 3kg to 10kg). Heavy machined aluminum end-effectors waste up to 40% of this capacity on the tool itself. This study presents continuous carbon fiber reinforced composite gripper jaws that reduce end-of-arm tooling weight by 74% while increasing pneumatic cycle speeds by 28%.',
      kpis: [
        { val: '74%', unit: 'lighter', label: 'Than Aluminum Tooling' },
        { val: '28%', unit: 'faster', label: 'Assembly Cycle Speed' },
        { val: '590', unit: 'MPa', label: 'Flexural Yield' },
        { val: 'Zero', unit: 'marring', label: 'Workpiece Protection' }
      ],
      blueprintSpecs: {
        'Fiber Type': 'Continuous Carbon Strand (1k Tow)',
        'Matrix Polymer': 'Micro-Carbon Dispersed PA6 (Onyx)',
        'Fiber Volume': '38% Strategic Stress Path',
        'Pneumatic Rating': 'Vacuum -0.9 bar Sealed'
      },
      contextHeading: 'Cobot Inertia Reduction & Internal Vacuum Routing',
      contextParagraph1: 'When automation engineers deploy 6-axis cobots for high-speed pick-and-place or bin-picking, rapid deceleration forces trigger robot joint torque limits. Heavy CNC aluminum jaws force operators to de-rate the robot speed, creating assembly line bottlenecks.',
      contextParagraph2: 'PrintNexa utilizes dual-extrusion continuous fiber routing. While the outer matrix is printed in micro-carbon Onyx, a secondary nozzle lays continuous strands of 1K carbon fiber strictly along primary bending moments. Furthermore, pneumatic suction channels are routed directly through the internal infill, eliminating dangling external air lines.',
      workflow: [
        {
          num: '01',
          title: 'Gripping Force Vector Model',
          desc: 'Simulating 150 N clamping loads, lateral acceleration slip forces, and workpiece gravity moments.'
        },
        {
          num: '02',
          title: 'Algorithmic Fiber Routing',
          desc: 'Strategic continuous strand placement in concentric rings around mounting holes and load zones.'
        },
        {
          num: '03',
          title: 'Dual-Nozzle Composite Build',
          desc: 'Simultaneous printing of Onyx thermoplastic matrix and continuous carbon fiber reinforcement core.'
        },
        {
          num: '04',
          title: 'Insert & Vacuum Pressure Test',
          desc: 'Thermal installation of M5 steel inserts and pressure decay testing of internal vacuum channels.'
        }
      ],
      specsMatrix: [
        { k: 'Baseline Aluminum 6061-T6 Gripper Weight', v: '820 grams per gripper pair' },
        { k: 'PrintNexa Continuous Carbon Gripper Weight', v: '215 grams per gripper pair (73.8% weight reduction)' },
        { k: 'Tensile Strength (Carbon Strand Direction)', v: '700 MPa (Surpassing structural steel)' },
        { k: 'Flexural Modulus', v: '51 GPa (Aluminum-equivalent rigidity without the mass)' },
        { k: 'Integrated Internal Channels', v: 'Hermetically sealed 4 mm pneumatic suction channels rated to -0.95 bar' },
        { k: 'Chemical Resistance', v: 'Immune to industrial cutting fluids, machine oils, and common solvents' }
      ],
      keyFindings: 'The 605-gram tooling weight savings allowed the collaborative robot arm to increase operating speed from 1.2 m/s to 1.6 m/s, yielding a 28% productivity gain across a 50,000-unit electronics assembly contract.',
      whyPillars: [
        {
          icon: 'fa-robot',
          title: 'More Usable Cobot Payload',
          desc: 'Frees up over 600g of robot payload capacity, allowing smaller, cost-effective cobots to carry heavier parts.'
        },
        {
          icon: 'fa-bolt',
          title: 'Higher Operating Acceleration',
          desc: 'Reduced inertial moment eliminates joint torque errors during high-speed directional changes.'
        },
        {
          icon: 'fa-wind',
          title: 'Internal Pneumatic Channels',
          desc: 'Air vacuum channels printed inside the finger eliminate external hoses that snag on fixtures.'
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'Non-Marring Workpiece Contact',
          desc: 'Polymer contact faces will never scratch or mark finished painted car parts or polished glass.'
        }
      ],
      pricingTiers: [
        {
          name: 'Prototype Gripper Pair',
          target: 'Test fit, gripping force validation & cobot kinematics check',
          price: '280',
          period: 'per pair of jaws',
          turnaround: '2-3 Business Days',
          featured: false,
          features: [
            'Pair of continuous carbon fiber reinforced gripper fingers',
            'M3-M6 heat-staked threaded brass inserts installed',
            'Integrated internal vacuum channel sealing check',
            'Full dimensional caliper check report',
            'Direct next-day dispatch'
          ]
        },
        {
          name: 'Complete Tooling Package (with Quick-Changer)',
          target: 'Production-ready end-of-arm tooling with pneumatic interface',
          price: '750',
          period: 'per turnkey system',
          turnaround: '4-5 Business Days',
          featured: true,
          features: [
            '2 Pairs of custom continuous carbon fingers (1 primary, 1 spare)',
            'Anodized aluminum robot wrist mounting adapter plate',
            'Pneumatic quick-disconnect fitting and vacuum cups installed',
            'Kinematic clamping test certificate (up to 200 N)',
            'Includes CAD models for robot controller visualization'
          ]
        },
        {
          name: 'Cell Automation Fleet (5+ Stations)',
          target: 'Standardized lightweight tooling across multiple robot cells',
          price: 'Custom',
          period: 'per automated plant',
          turnaround: '7-10 Business Days',
          featured: false,
          features: [
            'Bespoke gripper sets for multi-station automation lines',
            'Certified ESD-safe compounds (surface resistivity 10⁷ Ω)',
            'Digital warehouse storage for on-demand 24h replacements',
            'Volume manufacturing discounts',
            'On-site robotics automation integration support'
          ]
        }
      ],
      faqs: [
        {
          q: 'How does continuous carbon fiber 3D printing differ from standard carbon-fiber filament?',
          a: 'Standard "carbon fiber" filament contains chopped micro-fibers (typically 0.1 mm long) that only increase stiffness marginally. PrintNexa embeds unbroken continuous strands of carbon fiber spanning the full length of the part, acting like steel rebar in reinforced concrete to achieve 700 MPa tensile strength.'
        },
        {
          q: 'Can threaded metal fasteners be installed into the composite fingers?',
          a: 'Yes. We routinely install heat-staked or ultrasonic brass and stainless steel threaded inserts (M2 up to M8) with an extraction retention force exceeding 1,200 N, ensuring repeated tool changeouts without stripping threads.'
        },
        {
          q: 'Are the printed vacuum channels truly airtight?',
          a: 'Yes. We optimize slicing perimeters (4 solid continuous walls) and perform an internal anaerobic sealing coat that guarantees zero air leakage down to -0.95 bar vacuum pressure.'
        },
        {
          q: 'What is the turnaround time for a broken shop-floor gripper replacement?',
          a: 'Because the CAD files and continuous fiber toolpaths are archived in our digital warehouse, we can launch the print immediately and ship a replacement gripper within 24 hours.'
        }
      ],
      ctaHeadline: 'Maximize Your Robot Cell Throughput with Composite Tooling'
    },

    'vapor-smoothing-fluidics': {
      id: 'vapor-smoothing-fluidics',
      number: '05',
      kicker: 'RESEARCH PAPER 05 / CHEMICAL FINISHING & FLUIDICS',
      title: 'Sub-Micron Chemical Vapor Smoothing: Eliminating Turbulences in Additive Manifolds',
      tagline: 'Controlled Solvent Phase Surface Reflow for SLS Nylon PA12 and MJF Hydraulic Circuits',
      heroImage: 'assets/mat_vapor_smooth.jpg',
      heroImageAlt: 'Chemical vapor smoothed precision hydraulic manifold with mirrored internal channels',
      doi: 'DOI: 10.5824/pnx.2026.04-vapor',
      pubDate: 'August 22, 2026',
      readTime: '9 Min Read',
      author: {
        name: 'Sarah Lin',
        role: 'Polymer Chemistry Director & Cleanroom Finishing Lead',
        avatar: 'assets/avatar_sneha.jpg'
      },
      description: 'Sintered polymer components produced via Selective Laser Sintering (SLS) and Multi Jet Fusion (MJF) exhibit a naturally porous, sandpaper-like surface roughness (Ra 6.0–8.5 μm). In fluidic manifolds, this roughness causes boundary-layer turbulence and particle entrapment. This paper demonstrates automated chemical vapor smoothing, reducing surface roughness to Ra < 0.8 μm and cutting fluid pressure drop by 38%.',
      kpis: [
        { val: '<0.8', unit: 'μm Ra', label: 'Surface Roughness' },
        { val: '38%', unit: 'lower', label: 'Pressure Drop' },
        { val: '100%', unit: 'sealed', label: 'Hermetic Leak-Proof' },
        { val: '64%', unit: 'lower', label: 'Darcy Friction' }
      ],
      blueprintSpecs: {
        'Process Type': 'Automated Chemical Vapor Phase Reflow',
        'Solvent Medium': 'Controlled Cyclohexanone / Formic',
        'Chamber Vacuum': 'Closed-Loop Sub-Atmospheric',
        'Metrology Test': 'Laser Confocal Surface Profilometry'
      },
      contextHeading: 'Laminar Fluid Dynamics & Non-Porous Polymer Sealing',
      contextParagraph1: 'Additive manufacturing excels at producing organic, conformal hydraulic and pneumatic manifolds where complex 3D internal fluid passages weave past motors and batteries without right-angle 90° drilled dead-ends.',
      contextParagraph2: 'However, the raw un-smoothed internal finish of SLS Nylon PA12 creates high skin-friction drag and harbors microscopic crevices where biological fluids or hydraulic particulate can stagnate. By introducing an automated vaporized solvent cycle under sub-atmospheric pressure, polymer chains at surface asperities melt and reflow into a glassy, continuous sealed skin.',
      workflow: [
        {
          num: '01',
          title: 'De-Powder & Media Blast',
          desc: 'High-velocity glass bead blasting removing loose semi-sintered powder down to Ra 5.5 μm.'
        },
        {
          num: '02',
          title: 'Vacuum Chamber Ingestion',
          desc: 'Parts are heated to 65°C under controlled vacuum to eliminate any absorbed environmental moisture.'
        },
        {
          num: '03',
          title: 'Vapor Phase Reflow',
          desc: 'Solvent vapor mist condenses uniformly across exterior and internal passages, leveling micro-peaks.'
        },
        {
          num: '04',
          title: 'Solvent Extraction & Cure',
          desc: 'Deep vacuum evacuation purging 100% of residual solvent; parts cure to full tensile hardness.'
        }
      ],
      specsMatrix: [
        { k: 'As-Printed SLS Surface Roughness (Ra)', v: '6.5 μm – 8.5 μm' },
        { k: 'PrintNexa Vapor Smoothed Roughness (Ra)', v: '0.6 μm – 0.8 μm (Smooth glossy reflowed finish)' },
        { k: 'Internal Fluid Pressure Drop Delta', v: '38.4% reduction in pressure loss at 15 L/min flow rate' },
        { k: 'Burst Pressure Hydraulic Proof', v: 'Sealed up to 12.5 bar without wall micro-porosity sweating' },
        { k: 'Elongation at Break Improvement', v: 'Tensile elongation increases by 18% due to elimination of notch defects' },
        { k: 'Biocompatibility & Residuals', v: 'Zero residual solvent detected via gas chromatography; USP Class VI compliant' }
      ],
      keyFindings: 'Chemical vapor smoothing completely sealed internal porosity, reduced Darcy friction factor by 64%, and eliminated particle shedding, qualifying additive SLS nylon manifolds for clinical fluidic and semiconductor cooling applications.',
      whyPillars: [
        {
          icon: 'fa-droplet',
          title: '38% Lower Hydraulic Pressure Drop',
          desc: 'Smoother internal conduit walls enable pumps to run at lower power while delivering higher volumetric flow.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Hermetically Sealed Walls',
          desc: 'Prevents moisture, coolant oils, and gases from sweating through semi-porous printed polymer walls.'
        },
        {
          icon: 'fa-bacteria',
          title: 'Easy Clean-In-Place Sterilization',
          desc: 'Glassy surface finish eliminates bacterial entrapment pockets, enabling autoclave and CIP wash cycles.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Elevated Fatigue Endurance',
          desc: 'Eliminating microscopic surface notches increases cyclic impact toughness and elongation at break.'
        }
      ],
      pricingTiers: [
        {
          name: 'Vapor Smoothing Sample Benchmark',
          target: 'Evaluate surface finish reflow on client-supplied printed parts',
          price: '220',
          period: 'per batch (up to 5 parts)',
          turnaround: '2-3 Business Days',
          featured: false,
          features: [
            'Chemical vapor smoothing of up to 5 prototype components',
            'Before-and-after laser profilometry surface roughness (Ra) report',
            'Gas chromatography residual solvent verification report',
            'Hermetic leak test verification check',
            'Return express courier dispatch'
          ]
        },
        {
          name: 'Production Manifold Sinter & Smooth',
          target: 'Turnkey fabrication of SLS Nylon manifold with vapor smoothing',
          price: '680',
          period: 'per complex manifold',
          turnaround: '4-5 Business Days',
          featured: true,
          features: [
            'SLS printing in engineering Nylon PA12 with conformal channels',
            'Full automated chemical vapor smoothing (internal + external)',
            'Installed threaded brass hydraulic fittings (G1/4 or NPT)',
            'Hydrostatic burst proof test up to 10 bar',
            'Full Certificate of Conformance provided'
          ]
        },
        {
          name: 'Volume Fluidic Fleet (50+ units)',
          target: 'Scaled production batches for automotive and industrial machinery',
          price: 'Custom',
          period: 'per batch delivery',
          turnaround: '6-8 Business Days',
          featured: false,
          features: [
            'Automated production bay nesting and batch processing',
            'Custom dyed color options (Deep Black, Medical Grey)',
            '100% automated pressure decay leak testing',
            'Cleanroom vacuum sealed packaging',
            'Dedicated supply contract pricing'
          ]
        }
      ],
      faqs: [
        {
          q: 'Does vapor smoothing reach complex, twisty internal passages?',
          a: 'Yes. Because the solvent is introduced in the vapor phase under a vacuum, the gas permeates through any channel that allows air to pass, ensuring uniform smoothing deep inside organic conformal cooling loops where abrasive blasting cannot reach.'
        },
        {
          q: 'Does chemical smoothing change the critical dimensions of the part?',
          a: 'The vapor phase reflow melts only a thin surface boundary layer of 10 to 20 microns. Critical outer dimensions change by less than ±0.03 mm, which is well within standard additive manufacturing tolerances.'
        },
        {
          q: 'Is there any toxic solvent residue left inside the parts?',
          a: 'No. Following vapor exposure, the sealed chamber undergoes deep vacuum evacuation and a heated desorption cycle. Testing via gas chromatography confirms zero detectable residual solvent, rendering parts biocompatible per ISO 10993.'
        },
        {
          q: 'Which 3D printing materials can be chemically vapor smoothed?',
          a: 'We routinely smooth SLS Nylon PA12, SLS Nylon PA11, Multi Jet Fusion (MJF) PA12, TPU elastomers, and Polycarbonate. The solvent chemistry is tailored specifically to each polymer type.'
        }
      ],
      ctaHeadline: 'Upgrade Your Fluidic Hardware with Vapor Smoothing'
    },

    'bridge-manufacturing-resilience': {
      id: 'bridge-manufacturing-resilience',
      number: '06',
      kicker: 'RESEARCH PAPER 06 / SUPPLY CHAIN ECONOMICS',
      title: 'The Economics of Digital Inventory: Bridging the 16-Week Tooling Void with SLS Fleet Production',
      tagline: 'Total Cost of Ownership (TCO) Comparative Financial Model for Low-to-Medium Volume Production',
      heroImage: 'assets/banner_3d_printer_hero.jpg',
      heroImageAlt: 'Industrial Selective Laser Sintering 3D printing bay running batch production',
      doi: 'DOI: 10.5824/pnx.2026.04-supply',
      pubDate: 'August 08, 2026',
      readTime: '6 Min Read',
      author: {
        name: 'David Thorne',
        role: 'VP of Operations & Industrial Supply Chain Strategist',
        avatar: 'assets/avatar_arjun.jpg'
      },
      description: 'Committing to $45,000 injection mold tooling before customer market validation creates immense financial and operational risk. This economics whitepaper models the break-even dynamics, inventory carrying costs, and design agility dividends of launching commercial hardware using a distributed additive manufacturing bridge fleet.',
      kpis: [
        { val: '16→1', unit: 'weeks', label: 'Time to Market' },
        { val: '$45k', unit: 'saved', label: 'Upfront Tooling Cost' },
        { val: 'Zero', unit: 'scrap', label: 'Design Iteration Cost' },
        { val: '10,000', unit: 'units', label: 'Economical Break-Even' }
      ],
      blueprintSpecs: {
        'Financial Model': 'Dynamic Total Cost of Ownership (TCO)',
        'Volume Threshold': '50 to 10,000 Units Analyzed',
        'Fleet Capacity': '150 Synchronized SLS Bays',
        'Inventory Strategy': 'Pure On-Demand Digital Warehouse'
      },
      contextHeading: 'Capital Expenditure vs. Operational Agility',
      contextParagraph1: 'Traditional manufacturing pedagogy dictates that injection molding is always cheaper per unit. While true at 100,000 units, this analysis ignores the hidden costs of physical inventory: 16-week tooling wait times, mandatory Minimum Order Quantities (MOQs), warehouse storage fees, and the catastrophic cost of tooling rework when early customers request design changes.',
      contextParagraph2: 'By analyzing 24 real-world hardware commercial launches across consumer electronics, medical diagnostics, and robotic peripherals, this paper reveals that additive bridge manufacturing delivers superior Net Present Value (NPV) for production runs up to 8,500 units.',
      workflow: [
        {
          num: '01',
          title: 'CAD Parameter Digitization',
          desc: 'Archiving production-verified STEP models and orientation recipes in secure digital warehouses.'
        },
        {
          num: '02',
          title: 'High-Density 3D Nesting',
          desc: 'Automated 3D bounding-box packing maximizing build chamber density and minimizing unit laser costs.'
        },
        {
          num: '03',
          title: 'Batch Automated Blasting & Dyeing',
          desc: 'Vibratory ceramic tumbling and deep graphite immersion dyeing producing injection-molded aesthetics.'
        },
        {
          num: '04',
          title: 'Kanban Just-In-Time Dispatch',
          desc: 'Dispatching batches of 250 units weekly directly to assembly lines, matching actual customer demand.'
        }
      ],
      specsMatrix: [
        { k: 'Tooling Capital Expenditure (CapEx)', v: 'Traditional Tooling: $42,000 – $65,000 · PrintNexa Additive: $0' },
        { k: 'Time to First Customer Shipment', v: 'Traditional Tooling: 16 – 20 Weeks · PrintNexa Additive: 5 Business Days' },
        { k: 'Cost of Mid-Production Design Revision', v: 'Traditional Tooling: $12,000 + 6 weeks · PrintNexa Additive: $0 (instant CAD update)' },
        { k: 'Minimum Order Quantity (MOQ)', v: 'Traditional Injection: 5,000 units · PrintNexa Additive: 1 unit' },
        { k: 'Inventory Carrying Cost Reduction', v: 'Average 22% reduction in warehouse storage and obsolete part write-offs' },
        { k: 'Financial Break-Even Crossover', v: 'Economically advantageous for total lifecycle volumes up to 8,500 units' }
      ],
      keyFindings: 'Hardware startups and enterprise R&D divisions launching via additive bridge manufacturing reached positive cash flow 4.5 months earlier and avoided an average of $38,000 in obsolete inventory write-offs.',
      whyPillars: [
        {
          icon: 'fa-money-bill-trend-up',
          title: 'Zero Upfront Tooling CapEx',
          desc: 'Preserve cash reserves for marketing and engineering rather than sinking $50,000 into steel tooling.'
        },
        {
          icon: 'fa-truck-fast',
          title: 'First Shipments in 5 Days',
          desc: 'Beat competitors to market by 4 months while they wait in overseas tooling queues.'
        },
        {
          icon: 'fa-sliders',
          title: 'Iterate Between Batches',
          desc: 'Upgrade from Revision A to Revision B between weekly batches without throwing away tooling.'
        },
        {
          icon: 'fa-boxes-stacked',
          title: 'Eliminate Warehouse Inventory',
          desc: 'Print strictly what your sales orders require, eliminating overproduction and holding costs.'
        }
      ],
      pricingTiers: [
        {
          name: 'Bridge Pilot Run (50 – 200 units)',
          target: 'Beta launch units, pilot clinical trials & early adopters',
          price: '18',
          period: 'per unit',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            'SLS Nylon PA12 high-density batch production',
            'Full de-powdering & bead blast finishing',
            'Dimensional inspection report (calipers & optical check)',
            'First Article Inspection (FAI) report included',
            'Direct shipment in individual protective bags'
          ]
        },
        {
          name: 'Commercial Bridge Run (201 – 1,000 units)',
          target: 'Market entry production while hard tooling is evaluated',
          price: '12',
          period: 'per unit',
          turnaround: '5-7 Business Days',
          featured: true,
          features: [
            'Deep graphite black dye or vapor smoothed finish',
            'CMM sample inspection (AQL 0.65 Level II)',
            'Laser-etched serial numbers / 2D DataMatrix codes',
            'Split delivery schedules (e.g. 250 units every 2 weeks)',
            'Dedicated account engineer and production queue priority'
          ]
        },
        {
          name: 'Annual Supply Agreement (1,000+ units)',
          target: 'Recurring on-demand digital inventory supply contract',
          price: '7.50',
          period: 'per unit',
          turnaround: 'Scheduled JIT Dispatch',
          featured: false,
          features: [
            'Maximum volume unit cost discount guaranteed for 12 months',
            'Reserved build capacity across our 150-printer fleet',
            '100% automated optical quality inspection',
            'Custom branded packaging and palletized logistics',
            'Kanban automated inventory replenishment API integration'
          ]
        }
      ],
      faqs: [
        {
          q: 'At what volume does traditional injection molding become cheaper than 3D printing?',
          a: 'When purely analyzing piece-part cost, injection molding typically becomes cheaper around 5,000 to 10,000 units. However, when you factor in the $50,000 tooling CapEx, cost of capital, inventory holding costs, and risk of scrap, additive manufacturing is frequently the more profitable path well past 8,000 units.'
        },
        {
          q: 'Do 3D printed bridge parts look like injection-molded parts?',
          a: 'Yes. With automated vibratory ceramic tumbling and chemical vapor smoothing, SLS Nylon PA12 components achieve an injection-molded aesthetic with uniform matte or semi-gloss textures that end-users cannot distinguish from molded parts.'
        },
        {
          q: 'Can we transition smoothly from 3D printing to injection molding later?',
          a: 'Absolutely. PrintNexa designs all components with standard draft angles and wall thicknesses so that when your production volume reaches 50,000 units, the identical CAD file can be cut into steel tooling with zero redesign rework.'
        },
        {
          q: 'How does digital inventory protect against supply chain shocks?',
          a: 'By storing parts as digital CAD files in our secure cloud, you eliminate shipping delays from overseas molders. If an unexpected surge in demand occurs, our fleet can scale production instantly within 48 hours.'
        }
      ],
      ctaHeadline: 'Launch Your Next Hardware Product Without Tooling Risk'
    }
  };

  const STORAGE_KEYS = {
    THEME: 'printnexa_theme',
    DIR: 'printnexa_dir'
  };

  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  const savedDir = localStorage.getItem(STORAGE_KEYS.DIR) || 'ltr';
  htmlEl.setAttribute('dir', savedDir);

  function getActiveJournalKeyFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('journal');
    if (key && JOURNALS_DATA[key]) {
      return key;
    }
    return 'aerospace-inconel-718'; 
  }

  const dynamicContainer = document.getElementById('dynamicJournalContainer');
  const journalPills = document.querySelectorAll('.jrn-pill-btn');

  function renderJournal(journalKey, shouldSmoothScroll = false) {
    const jrn = JOURNALS_DATA[journalKey];
    if (!jrn || !dynamicContainer) return;

    document.title = `${jrn.title} — PrintNexa Journal`;
    const metaDesc = document.getElementById('journalMetaDesc');
    if (metaDesc) {
      metaDesc.setAttribute('content', jrn.description);
    }

    journalPills.forEach(pill => {
      const pillKey = pill.getAttribute('data-journal-key');
      if (pillKey === journalKey) {
        pill.classList.add('active');
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        pill.classList.remove('active');
      }
    });

    const contentHtml = `
      <div class="journal-content-wrapper" id="journalWrapper_${jrn.id}">
        <!-- ===================================================================
             1. HERO BANNER FOR THIS SPECIFIC PAPER
             =================================================================== -->
        <section class="jrn-detail-hero" id="jrnHero">
          <div class="hero-mesh-background" aria-hidden="true"></div>
          <div class="section-container">
            <div class="jrn-detail-hero-grid">
              <!-- Left Column: Title, Author & Metadata, KPIs -->
              <div class="jrn-hero-text-block">
                <div class="srv-hero-kicker-badge">
                  <i class="fa-solid fa-scroll text-orange"></i>
                  <span>${jrn.kicker}</span>
                </div>

                <h1 class="jrn-hero-title">${jrn.title}</h1>
                <p class="jrn-hero-tagline">${jrn.tagline}</p>

                <!-- Author & Citation Metadata Strip -->
                <div class="jrn-author-doi-bar">
                  <div class="jrn-author-badge">
                    <img src="${jrn.author.avatar}" alt="${jrn.author.name}" />
                    <div class="jrn-author-details">
                      <span class="author-title">${jrn.author.name}</span>
                      <span class="author-credentials">${jrn.author.role}</span>
                    </div>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">
                    <span><i class="fa-regular fa-calendar"></i> ${jrn.pubDate}</span> · 
                    <span><i class="fa-regular fa-clock"></i> ${jrn.readTime}</span>
                  </div>
                  <span class="jrn-doi-tag">${jrn.doi}</span>
                </div>

                <p class="jrn-hero-desc">${jrn.description}</p>

                <!-- KPI Metric Chips -->
                <div class="jrn-hero-metrics-grid">
                  ${jrn.kpis.map(kpi => `
                    <div class="jrn-metric-box">
                      <span class="metric-val">${kpi.val} <span class="unit">${kpi.unit}</span></span>
                      <span class="metric-lbl">${kpi.label}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- CTA Row -->
                <div class="srv-hero-actions-row">
                  <button type="button" class="btn-orange-pill" id="detailConsultBtn" data-paper-title="${jrn.title}">
                    <span>Commission Research Trial</span>
                    <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="btn-outline-pill" id="downloadWhitepaperBtn" data-paper-title="${jrn.title}">
                    <i class="fa-solid fa-file-arrow-down" style="color: var(--primary-orange);"></i>
                    <span>Download Full Research PDF</span>
                  </button>
                </div>
              </div>

              <!-- Right Column: Visual Blueprint Showcase Card -->
              <div class="jrn-hero-visual">
                <div class="visual-blueprint-card">
                  <img src="${jrn.heroImage}" alt="${jrn.heroImageAlt}" loading="eager" />
                  <div class="visual-card-overlay">
                    <div class="visual-header-badge">
                      <span class="pulse-dot"></span>
                      <span>LAB EXPERIMENT: VERIFIED &amp; PEER-REVIEWED</span>
                    </div>
                    <div class="visual-footer-specs">
                      ${Object.entries(jrn.blueprintSpecs).map(([key, val]) => `
                        <div class="spec-chip">
                          <span class="spec-chip-k">${key}</span>
                          <span class="spec-chip-v">${val}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===================================================================
             2. THIS JOURNAL CONTEXT & METHODOLOGY
             =================================================================== -->
        <section class="jrn-detail-context" id="jrnContext">
          <div class="section-container">
            <div class="jrn-context-grid">
              <div class="jrn-context-text">
                <div class="section-kicker">
                  <span>EXPERIMENTAL FRAMEWORK</span>
                </div>
                <h3>${jrn.contextHeading}</h3>
                <p>${jrn.contextParagraph1}</p>
                <p>${jrn.contextParagraph2}</p>
              </div>

              <!-- 4-Phase Research Workflow -->
              <div class="jrn-workflow-wrapper">
                <div class="section-kicker" style="margin-bottom: 1.25rem;">
                  <span>4-PHASE RESEARCH WORKFLOW</span>
                </div>
                <div class="jrn-workflow-grid">
                  ${jrn.workflow.map(step => `
                    <div class="jrn-workflow-card">
                      <span class="jrn-phase-pill">PHASE ${step.num}</span>
                      <h4 class="jrn-phase-title">${step.title}</h4>
                      <p class="jrn-phase-desc">${step.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Empirical Data Matrix Table -->
            <div class="jrn-specs-card">
              <div class="jrn-specs-header">
                <div class="jrn-specs-title">
                  <i class="fa-solid fa-chart-simple text-orange"></i>
                  <span>EMPIRICAL METROLOGY &amp; SPECIFICATION MATRIX</span>
                </div>
                <span class="cert-pill">ASTM / ISO Compliant</span>
              </div>
              <table class="specs-table">
                <tbody>
                  ${jrn.specsMatrix.map(row => `
                    <tr>
                      <th>${row.k}</th>
                      <td>${row.v}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Key Findings Callout Box -->
            <div class="jrn-findings-box">
              <i class="fa-solid fa-lightbulb findings-icon"></i>
              <div class="findings-body">
                <h4>Key Empirical Finding &amp; Engineering Significance</h4>
                <p>${jrn.keyFindings}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ===================================================================
             3. WHY CHOOSE THIS TECHNOLOGY / ENGINEERING IMPACT
             =================================================================== -->
        <section class="jrn-detail-why" id="jrnWhy">
          <div class="section-container">
            <div class="section-header-centered">
              <div class="section-kicker">
                <span>ENGINEERING IMPACT</span>
              </div>
              <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800;">
                Why Adopt This Technology in Production?
              </h2>
              <p style="color: var(--text-secondary); max-width: 640px; margin: 0.75rem auto 0;">
                Translating laboratory material breakthroughs into quantifiable industrial competitive advantages.
              </p>
            </div>

            <!-- 4 Value Pillars -->
            <div class="jrn-why-grid">
              ${jrn.whyPillars.map(p => `
                <div class="jrn-why-card">
                  <div class="jrn-why-icon-wrap">
                    <i class="fa-solid ${p.icon}"></i>
                  </div>
                  <h4 class="jrn-why-title">${p.title}</h4>
                  <p class="jrn-why-desc">${p.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Side-by-side Comparative Box -->
            <div class="spotlight-callout-box">
              <div>
                <span class="detail-cta-badge">PERFORMANCE COMPARATIVE AUDIT</span>
                <h3 class="callout-title">Conventional Methods vs. PrintNexa Additive Breakthrough</h3>
                <p class="callout-p">
                  Legacy subtractive and molding workflows incur multi-month lead times, tooling penalties, and compromised geometries. This paper’s additive process establishes an agile, digitally verified alternative.
                </p>
                <ul class="callout-bullets">
                  <li><i class="fa-solid fa-circle-check"></i> Proven microstructure density and grain uniformity verified per SEM analysis</li>
                  <li><i class="fa-solid fa-circle-check"></i> Sub-micron geometric repeatability validated on CMM optical probes</li>
                  <li><i class="fa-solid fa-circle-check"></i> Turnkey production bridge from single test coupon to 10,000 units</li>
                </ul>
              </div>
              <div style="text-align: right;">
                <button type="button" class="btn-orange-pill" id="whySectionConsultBtn" data-paper-title="${jrn.title}" style="width: auto; padding: 1rem 2rem;">
                  <span>Deploy in Production</span>
                  <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- ===================================================================
             5. TECHNICAL FAQS ACCORDION
             =================================================================== -->
        <section class="jrn-detail-faqs" id="jrnFaqs">
          <div class="section-container faqs-container-narrow">
            <div class="section-header-centered">
              <div class="section-kicker">
                <span>PAPER TECHNICAL FAQS</span>
              </div>
              <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.1rem; font-weight: 800;">
                Frequently Asked Questions
              </h2>
              <p style="color: var(--text-secondary); margin-top: 0.5rem;">
                Detailed engineering responses regarding the experimental setup and findings of this study.
              </p>
            </div>

            <div class="faq-accordion-list" style="margin-top: 3rem;">
              ${jrn.faqs.map((faq, index) => `
                <div class="faq-accordion-item ${index === 0 ? 'open' : ''}">
                  <button type="button" class="faq-question-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
                    <span class="faq-q-text">${faq.q}</span>
                    <i class="fa-solid fa-chevron-down faq-chevron-icon" aria-hidden="true"></i>
                  </button>
                  <div class="faq-answer-panel">
                    <div class="faq-answer-content">
                      <p>${faq.a}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- ===================================================================
             6. FINAL HIGH-IMPACT CTA BANNER
             =================================================================== -->
        <section class="jrn-detail-cta" id="jrnCta">
          <div class="section-container">
            <div class="detail-cta-card">
              <div class="cta-mesh-bg" aria-hidden="true"></div>
              <div class="detail-cta-content">
                <span class="detail-cta-badge">
                  <i class="fa-solid fa-bolt text-orange"></i> ENTERPRISE PARTNERSHIP
                </span>
                <h2 class="detail-cta-title">${jrn.ctaHeadline}</h2>
                <p class="detail-cta-desc">
                  Collaborate directly with ${jrn.author.name} and the PrintNexa engineering laboratory to apply this research to your hardware roadmap.
                </p>
                <div class="detail-cta-btn-row">
                  <button type="button" class="btn-orange-pill" id="finalDetailConsultBtn" data-paper-title="${jrn.title}">
                    <span>Consult with Lead Author</span>
                    <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                  </button>
                  <a href="journal.html" class="btn-outline-pill" style="border-color: rgba(255, 255, 255, 0.25); color: #FFFFFF;">
                    <span>View All 6 Papers</span>
                    <i class="fa-solid fa-grid-2" style="font-size: 0.85rem; color: var(--primary-orange);" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    dynamicContainer.innerHTML = contentHtml;

    attachDynamicEventListeners(jrn);

    if (shouldSmoothScroll) {
      const strip = document.getElementById('journalSelectorStrip');
      const topOffset = strip ? strip.getBoundingClientRect().bottom + window.scrollY : 0;
      window.scrollTo({ top: topOffset > 0 ? topOffset - 20 : 0, behavior: 'smooth' });
    }
  }

  function attachDynamicEventListeners(activeJournal) {

    const accordionItems = dynamicContainer.querySelectorAll('.faq-accordion-item');
    accordionItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        accordionItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    const consultTriggers = dynamicContainer.querySelectorAll('[data-paper-title]');
    consultTriggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const paperTitle = btn.getAttribute('data-paper-title') || activeJournal.title;
        const tierName = btn.getAttribute('data-tier-name') || '';
        openConsultModalWithPaper(paperTitle, tierName);
      });
    });

    const downloadBtn = dynamicContainer.querySelector('#downloadWhitepaperBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        showToast(`Preparing open-access PDF & dataset for ${activeJournal.title}...`, 'info');
        setTimeout(() => {
          showToast(`Research whitepaper & raw tensile dataset downloaded!`, 'success');
        }, 1500);
      });
    }
  }

  journalPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetJournalKey = pill.getAttribute('data-journal-key');
      if (targetJournalKey && JOURNALS_DATA[targetJournalKey]) {

        const newUrl = `${window.location.pathname}?journal=${targetJournalKey}`;
        window.history.pushState({ journal: targetJournalKey }, '', newUrl);

        renderJournal(targetJournalKey, true);
        showToast(`Loaded ${JOURNALS_DATA[targetJournalKey].title}`, 'info');
      }
    });
  });

  window.addEventListener('popstate', () => {
    const journalKey = getActiveJournalKeyFromUrl();
    renderJournal(journalKey, false);
  });

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const siteHeader = document.getElementById('siteHeader');

  const consultModal = document.getElementById('consultModal');
  const consultModalCloseBtn = document.getElementById('consultModalCloseBtn');
  const consultForm = document.getElementById('consultForm');
  const consultPaperInput = document.getElementById('consultPaper');
  const consultTierSelect = document.getElementById('consultTier');
  const consultModalSubtitle = document.getElementById('consultModalSubtitle');

  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const loginModal = document.getElementById('loginModal');
  const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
  const loginForm = document.getElementById('loginForm');
  const toastContainer = document.getElementById('toastContainer');
  const detailJournalNewsletterForm = document.getElementById('detailJournalNewsletterForm');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    });
  }

  if (rtlToggleBtn) {
    if (rtlBtnText) rtlBtnText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = htmlEl.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', newDir);
      localStorage.setItem(STORAGE_KEYS.DIR, newDir);
      if (rtlBtnText) rtlBtnText.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) siteHeader.classList.add('scrolled');
      else siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('active');
      mainNav.classList.toggle('mobile-open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.classList.toggle('active', isOpen);
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (mainNav.classList.contains('active') || mainNav.classList.contains('mobile-open')) {
          mainNav.classList.remove('active', 'mobile-open');
          mobileMenuBtn.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      }
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active', 'mobile-open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openConsultModalWithPaper(paperTitle, tierName) {
    if (consultPaperInput) consultPaperInput.value = paperTitle;
    if (consultModalSubtitle) {
      consultModalSubtitle.textContent = tierName 
        ? `Configuring trial for: ${tierName}` 
        : `Connecting with engineering team for: ${paperTitle}`;
    }
    if (consultTierSelect && tierName) {
      if (tierName.toLowerCase().includes('prototype') || tierName.toLowerCase().includes('pair')) {
        consultTierSelect.value = 'pilot';
      } else if (tierName.toLowerCase().includes('annual') || tierName.toLowerCase().includes('fleet') || tierName.toLowerCase().includes('oem')) {
        consultTierSelect.value = 'turnkey';
      } else {
        consultTierSelect.value = 'feasibility';
      }
    }
    openModal(consultModal);
  }

  if (consultModalCloseBtn && consultModal) {
    consultModalCloseBtn.addEventListener('click', () => closeModal(consultModal));
    consultModal.addEventListener('click', (e) => {
      if (e.target === consultModal) closeModal(consultModal);
    });
  }

  if (loginHeaderBtn && loginModal) {
    loginHeaderBtn.addEventListener('click', () => openModal(loginModal));
  }

  const mobileNavLoginBtn = document.getElementById('mobileNavLoginBtn');
  if (mobileNavLoginBtn && loginModal) {
    mobileNavLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  }

  if (loginModalCloseBtn && loginModal) {
    loginModalCloseBtn.addEventListener('click', () => closeModal(loginModal));
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeModal(loginModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (consultModal && consultModal.classList.contains('active')) closeModal(consultModal);
      if (loginModal && loginModal.classList.contains('active')) closeModal(loginModal);
    }
  });

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(consultModal);
      showToast('Research trial request received! Lead Author will reply within 24 hours.', 'success');
      consultForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Welcome to the PrintNexa Research Archive Portal!', 'success');
      loginForm.reset();
    });
  }

  if (detailJournalNewsletterForm) {
    detailJournalNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our monthly engineering papers.', 'success');
      detailJournalNewsletterForm.reset();
    });
  }

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';
    if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('visible');
    }, 20);

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3800);
  }

  const initialKey = getActiveJournalKeyFromUrl();
  renderJournal(initialKey, false);

})();
