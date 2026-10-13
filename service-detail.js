
(function () {
  'use strict';

  const SERVICES_DATA = {
    '3d-printing': {
      id: '3d-printing',
      number: '01',
      kicker: 'SERVICE 01 / INDUSTRIAL ADDITIVE SUITE',
      title: 'High-Precision 3D Printing & Additive Production',
      tagline: 'Multi-Technology Polymer & Resin Additive Manufacturing',
      heroImage: 'assets/service_3d_printing.jpg',
      heroImageAlt: 'Orange high precision 3D printed conical lattice mesh structure',
      description: 'Industrial-grade additive manufacturing utilizing our synchronized fleet of FDM, SLA, and SLS technologies. Engineered for mission-critical parts requiring fine feature resolution, airtight geometries, and complex organic lattice topologies.',
      kpis: [
        { val: '±0.05', unit: 'mm', label: 'Layer Tolerance' },
        { val: '40+', unit: 'types', label: 'Certified Resins & Filaments' },
        { val: '24', unit: 'hrs', label: 'Express Turnaround' },
        { val: '600³', unit: 'mm', label: 'Max Build Envelope' }
      ],
      blueprintSpecs: {
        'Technology': 'FDM / SLA / SLS Industrial',
        'Laser Spot': '70 μm High-Res Galvo',
        'Min Wall': '0.6 mm Structural',
        'ISO Standard': 'ISO 9001:2015 Verified'
      },
      contextHeading: 'Process Overview & Engineering Precision',
      contextParagraph1: 'PrintNexa combines continuous fiber extrusion, stereolithography photo-polymerization, and selective laser sintering within an environmentally controlled additive laboratory. Every print project undergoes automated slicing orientation and thermal chamber stabilization to virtually eliminate warp stresses and delamination.',
      contextParagraph2: 'From lightweight drone chassis to micro-fluidic diagnostic manifolds, our multi-printer infrastructure delivers uniform isotropic tensile strength across all XYZ axes.',
      workflow: [
        {
          num: '01',
          title: 'CAD DFAM Slicing',
          desc: 'Automated mesh repair, overhang reduction, and stress-oriented print trajectory planning in Siemens NX.'
        },
        {
          num: '02',
          title: 'Thermal Bed Prep',
          desc: 'Chamber heating up to 90°C and dual laser galvo calibration ensuring uniform energy density.'
        },
        {
          num: '03',
          title: 'Precision Sinter / Cure',
          desc: 'Layer deposition down to 20 microns with real-time closed-loop optical layer monitoring.'
        },
        {
          num: '04',
          title: 'Solvent Wash & UV Bake',
          desc: 'Automated ultrasonic solvent wash and controlled nitrogen-cure oven for optimal tensile yield.'
        }
      ],
      specsMatrix: [
        { k: 'Supported Technologies', v: 'FDM (Fused Deposition), SLA (Stereolithography), SLS (Selective Laser Sintering)' },
        { k: 'Layer Resolution', v: '20 μm – 250 μm (Customizable based on structural vs cosmetic priority)' },
        { k: 'Dimensional Accuracy', v: '±0.05 mm or ±0.1% (whichever is greater across XYZ axes)' },
        { k: 'Maximum Build Chamber', v: '600 × 600 × 800 mm (Single piece) · Segmented joining for oversized parts' },
        { k: 'Surface Roughness (Ra)', v: 'Standard: 3.2 – 6.3 μm · Vapor Smoothed / Polished: < 0.8 μm' },
        { k: 'Quality Control Standards', v: 'Digital batch traceability, CMM probe inspection, material certs provided' }
      ],
      materials: [
        {
          code: 'PA12-CF',
          name: 'Nylon Carbon Fiber',
          desc: 'High stiffness-to-weight ratio engineered for drone arms, brackets, and motor casings.',
          props: ['Tensile: 78 MPa', 'HDT: 145°C', 'Stiff']
        },
        {
          code: 'RESIN-TOUGH',
          name: 'Engineering Tough Resin',
          desc: 'Impact-resistant photopolymer mimicking ABS durability for snap-fit assemblies.',
          props: ['Elongation: 22%', 'Smooth Finish', 'Clear/Grey']
        },
        {
          code: 'ULTEM 9085',
          name: 'PEI Flame Retardant',
          desc: 'Aerospace certified thermoplastic with FAR 25.853 compliance and chemical resistance.',
          props: ['UL94 V-0', 'HDT: 186°C', 'Aerospace']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-cube',
          title: 'Complex Lattice Geometry',
          desc: 'Manufacture internal honeycomb and Voronoi structures impossible with standard CNC tooling.'
        },
        {
          icon: 'fa-clock-rotate-left',
          title: 'Rapid 24-Hour Dispatch',
          desc: 'Upload your STEP/STL by 10:00 AM CST and receive tracked production parts the next afternoon.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Certified Traceability',
          desc: 'Every spool and resin batch is tracked with lot-specific temperature logs and tensile data.'
        },
        {
          icon: 'fa-microchip',
          title: 'Multi-Material Integration',
          desc: 'Print rigid composite structures with overmolded flexible elastomer gaskets in a single setup.'
        }
      ],
      pricingTiers: [
        {
          name: 'Concept Prototype',
          target: 'Visual validation, ergonomics & early design reviews',
          price: '18',
          period: 'per unit',
          turnaround: '2-3 Business Days',
          featured: false,
          features: [
            'PLA+ or Standard Grey Resin',
            'Layer height: 100 – 150 microns',
            'Standard support removal & bead blast',
            'Basic dimensional check (calipers)',
            'Instant online DFM analysis'
          ]
        },
        {
          name: 'Engineering Grade',
          target: 'Functional stress testing, robotic parts & assemblies',
          price: '45',
          period: 'per unit',
          turnaround: '24-48 Hours Express',
          featured: true,
          features: [
            'Nylon PA12-CF or Tough ABS',
            'Layer height: 50 – 100 microns',
            'Chemical smoothing or fine media polish',
            'Optical 3D scanner dimensional report',
            'Threaded brass inserts installed',
            'Full Certificate of Conformance'
          ]
        },
        {
          name: 'Production Fleet',
          target: 'Bridge production & scaled orders from 50 to 5,000 units',
          price: '12',
          period: 'per unit (100+ units)',
          turnaround: '5-7 Business Days',
          featured: false,
          features: [
            'Choice of 40+ engineering thermoplastics',
            'SLS de-powdered batch tumbling',
            'Batch CMM inspection (AQL 0.65)',
            'Custom dyed color / matte black finish',
            'Dedicated account engineer',
            'Kanban blanket order delivery'
          ]
        }
      ],
      faqs: [
        {
          q: 'What CAD file formats do you accept for 3D printing?',
          a: 'We accept STEP (.stp), IGES (.igs), Parasolid (.x_t), STL, and OBJ. For dimensional accuracy, we strongly recommend native STEP files as they preserve true circular curves rather than polygon approximations.'
        },
        {
          q: 'How does part orientation affect tensile strength?',
          a: 'In FDM printing, parts exhibit anisotropic properties where Z-axis layer bonding is typically 75-85% the tensile strength of the XY build plane. Our engineering team automatically orients your parts along the principal stress vectors or utilizes SLS technology for near-isotropic behavior.'
        },
        {
          q: 'Can you achieve airtight or fluid-tight 3D printed parts?',
          a: 'Yes. With SLA resins or chemical vapor-smoothed SLS Nylon PA12, parts are naturally non-porous and withstand up to 4 bar hydraulic pressure. We also offer resin infiltration sealing for pneumatic manifolds.'
        },
        {
          q: 'What is the minimum wall thickness and feature size?',
          a: 'For SLA, the minimum unsupported wall thickness is 0.5 mm and minimum embossed detail is 0.2 mm. For SLS and FDM, we recommend a minimum wall thickness of 0.8 mm to 1.0 mm for structural integrity.'
        }
      ],
      ctaHeadline: 'Ready to Print High-Definition Industrial Parts?'
    },

    'prototyping': {
      id: 'prototyping',
      number: '02',
      kicker: 'SERVICE 02 / FAST-TRACK VERIFICATION',
      title: 'Rapid Functional Prototyping & Kinematic Verification',
      tagline: 'Fast-Track Hardware Iteration from Concept Validation to Tooling Sign-Off',
      heroImage: 'assets/service_2_bracket.jpg',
      heroImageAlt: 'Black precision mechanical bracket assembly for functional testing',
      description: 'Compress your product development cycle with functional prototypes that replicate production-grade mechanical performance. Test snap fits, kinematic pivot joints, bearing housings, and thermal tolerances before investing in costly injection molds.',
      kpis: [
        { val: '24-48', unit: 'hrs', label: 'Cycle Turnaround' },
        { val: '0.05', unit: 'mm', label: 'Clearance Accuracy' },
        { val: '100%', unit: '', label: 'CAD Interference Check' },
        { val: '5x', unit: 'faster', label: 'Vs Conventional Tooling' }
      ],
      blueprintSpecs: {
        'Assembly Type': 'Multi-Part Kinematics',
        'Hardware': 'Heat-Staked Brass Inserts',
        'Snap-Fit Spec': 'Cantilever Stress Verified',
        'Standard': 'ISO 2768-m Precision'
      },
      contextHeading: 'Functional Kinematics & Fit-Check Engineering',
      contextParagraph1: 'A successful prototype must do more than just look like the CAD model—it must feel, snap, flex, and endure the operational forces of the final product. PrintNexa specializes in functional multi-material prototypes with integrated moving components, elastomeric seals, and threaded inserts.',
      contextParagraph2: 'Our mechanical engineers review every design for interferences, thread pull-out forces, and thermal shrinkage, allowing you to validate multiple hardware revisions within a single work week.',
      workflow: [
        {
          num: '01',
          title: 'Interference Audit',
          desc: 'Comprehensive CAD clash analysis checking 0.35mm clearances for moving parts.'
        },
        {
          num: '02',
          title: 'Multi-Process Build',
          desc: 'Simultaneous printing of rigid housings, transparent lenses, and flexible gaskets.'
        },
        {
          num: '03',
          title: 'Hardware Press-Fitting',
          desc: 'Precision thermal insertion of M2-M8 brass threaded inserts and stainless dowel pins.'
        },
        {
          num: '04',
          title: 'Fit & Ergonomics Review',
          desc: 'Manual articulation, torque testing, and tactile switch verification before dispatch.'
        }
      ],
      specsMatrix: [
        { k: 'Assembly Capabilities', v: 'Snap-fits, living hinges (1,000+ cycles), press-fit bearings, thread inserts' },
        { k: 'Material Durability', v: 'Polycarbonate, High-Impact ABS, POM-like engineering resins, TPU 85A' },
        { k: 'Heat Deflection Temp (HDT)', v: 'Standard: 85°C · High-Temp Formulation: up to 238°C under 0.45 MPa' },
        { k: 'Hardware Integration', v: 'Threaded brass helicoils, neodymium magnets, O-rings, fasteners included' },
        { k: 'Surface Realism', v: 'Primer coat, soft-touch matte finish, high-gloss clear acrylic polish' },
        { k: 'Quality Verification', v: 'Torque resistance testing, cycle life validation, 3D laser scan reports' }
      ],
      materials: [
        {
          code: 'PC-ABS',
          name: 'Polycarbonate-ABS Blend',
          desc: 'Superior impact resistance and thermal stability for functional electronics enclosures.',
          props: ['Izod Impact: 48 kJ/m²', 'HDT: 110°C', 'Rigid']
        },
        {
          code: 'TPU-95A',
          name: 'Thermoplastic Polyurethane',
          desc: 'Flexible elastomer with high tear strength for protective bumpers and grip sleeves.',
          props: ['Elongation: 550%', 'Shore 95A', 'Flexible']
        },
        {
          code: 'HI-TEMP-RESIN',
          name: 'High-Temperature Resin',
          desc: 'Extreme thermal endurance suitable for automotive engine bay prototyping and wind tunnels.',
          props: ['HDT: 238°C', 'Rigid Glassy', 'Amber Clear']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-gauge-high',
          title: 'Test Real Mechanical Loads',
          desc: 'Ensure snap hooks, latching hinges, and gear meshes handle required operational torque.'
        },
        {
          icon: 'fa-bolt',
          title: 'De-Risk Expensive Tooling',
          desc: 'Catch dimensional interference before cutting $40,000 steel molds, saving months of rework.'
        },
        {
          icon: 'fa-arrows-split-up-and-left',
          title: 'Parallel Design Variants',
          desc: 'Print 4 distinct ergonomic handle variations in a single overnight batch to conduct user testing.'
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'Fully Assembled Delivery',
          desc: 'Arrives assembled with all screws, bearings, and threaded inserts installed and verified.'
        }
      ],
      pricingTiers: [
        {
          name: 'Form & Fit Mockup',
          target: 'Visual styling, physical size review & packaging fit',
          price: '35',
          period: 'per component',
          turnaround: '24-48 Hours',
          featured: false,
          features: [
            'High-resolution cosmetic print',
            'Full external geometry verification',
            'Single material (ABS or Tough White)',
            'Basic manual deburring',
            'Next-day courier dispatch'
          ]
        },
        {
          name: 'Kinematic Functional',
          target: 'Working mechanisms, snap fits & operational hardware testing',
          price: '85',
          period: 'per assembly',
          turnaround: '2-3 Business Days',
          featured: true,
          features: [
            'Multi-part moving assembly',
            'Brass threaded inserts installed (up to 8)',
            'Functional snap-fit & living hinge check',
            'Color matched or dual-tone finish',
            'Full mechanical fit test report',
            'Includes 2 spare wear parts'
          ]
        },
        {
          name: 'Complete Sub-System Kit',
          target: 'Complete pre-production hardware verification assemblies',
          price: '320',
          period: 'per test system',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            'Complete multi-part enclosure + internal chassis',
            'Integrated elastomer gaskets & clear windows',
            'Full optical 3D scan vs original CAD model',
            'Cycle durability test verification',
            'Engineer consultation debrief call'
          ]
        }
      ],
      faqs: [
        {
          q: 'How do you design snap fits to prevent snapping during prototype testing?',
          a: 'We use high-elongation resins (over 20% elongation at break) or SLS Nylon PA12 and recommend a maximum strain calculation of under 4%. We also radius all sharp root corners with a 0.5 mm fillet to eliminate stress concentrations.'
        },
        {
          q: 'Can you install metal hardware like threaded inserts directly?',
          a: 'Yes, we routinely install heat-staked brass inserts (M2 up to M10), press-fit ball bearings, neodymium magnets, and stainless steel dowel pins into pre-sized core holes during post-processing.'
        },
        {
          q: 'What is the difference between visual and functional prototypes?',
          a: 'Visual prototypes prioritize immaculate surface finish, custom color matching, and paint polish for marketing photos. Functional prototypes prioritize tensile toughness, wall thickness, and dimensional interference checks under mechanical strain.'
        },
        {
          q: 'Can you prototype clear optical lenses and light guides?',
          a: 'Yes. We utilize ultra-clear photopolymers polished through wet-sanding up to 4000 grit and finished with a clear UV-resistant polyurethane clearcoat to achieve 92% optical clarity.'
        }
      ],
      ctaHeadline: 'Validate Your Hardware Assembly in 48 Hours'
    },

    'product-development': {
      id: 'product-development',
      number: '03',
      kicker: 'SERVICE 03 / COMPUTATIONAL DFAM & SIMULATION',
      title: 'Product Development & Design for Additive Manufacturing',
      tagline: 'Topology Optimization, FEA Stress Simulation & Structural Hardware Engineering',
      heroImage: 'assets/service_3_gear.jpg',
      heroImageAlt: 'Orange precision engineering planetary gear assembly',
      description: 'Unlock geometric freedom with advanced Design for Additive Manufacturing (DFAM). Our engineering team applies generative topology optimization, computational fluid dynamics (CFD), and finite element stress analysis (FEA) to reduce part weight by up to 55% while elevating structural rigidity.',
      kpis: [
        { val: '55%', unit: 'less', label: 'Mass Weight' },
        { val: '3x', unit: 'higher', label: 'Specific Stiffness' },
        { val: '12→1', unit: '', label: 'Part Consolidation' },
        { val: 'FEA', unit: 'ready', label: 'Certified Stress Reports' }
      ],
      blueprintSpecs: {
        'Engineering Code': 'ASME Y14.5-2018',
        'FEA Solver': 'ANSYS Mechanical / Nastran',
        'Topology Method': 'SIMP Generative Density',
        'Optimization Goal': 'Max Rigidity / Min Mass'
      },
      contextHeading: 'Computational Optimization & Assembly Consolidation',
      contextParagraph1: 'Traditional manufacturing forces parts to conform to flat mills and draft angles. Additive manufacturing reverses this paradigm: complexity is virtually free. We leverage algorithm-driven design to position material precisely where stress lines demand it, removing parasitic dead weight.',
      contextParagraph2: 'Furthermore, by consolidating multi-component welded brackets into single consolidated additive bodies, we eliminate failure-prone fasteners, reduce assembly labor, and guarantee absolute structural consistency.',
      workflow: [
        {
          num: '01',
          title: 'Load Vector Definition',
          desc: 'Establish structural boundary conditions, mounting points, and Von Mises stress envelopes.'
        },
        {
          num: '02',
          title: 'Generative Topology Iteration',
          desc: 'Algorithmic mass reduction distributing load paths along organic load vectors.'
        },
        {
          num: '03',
          title: 'FEA Simulation Audit',
          desc: 'Multi-physics simulation validating deflection, fatigue safety factor, and resonant vibration.'
        },
        {
          num: '04',
          title: 'First Article Pilot Build',
          desc: 'Additive production of optimized geometry and strain-gauge physical load verification.'
        }
      ],
      specsMatrix: [
        { k: 'DFAM Methodologies', v: 'Topology Optimization, Conformal Lattice Infill, Assembly Consolidation' },
        { k: 'Simulation Packages', v: 'ANSYS Mechanical, Siemens NX Nastran, Altair OptiStruct, Autodesk Netfabb' },
        { k: 'Part Consolidation Ratio', v: 'Average 8:1 reduction in fastener counts and discrete sub-components' },
        { k: 'Weight Reduction Average', v: '35% – 55% reduction without compromising designed safety factor (SF ≥ 2.5)' },
        { k: 'Engineering Deliverables', v: 'Native STEP/CAD files, 2D GD&T manufacturing prints, complete FEA PDF audit' },
        { k: 'Compliance Standard', v: 'ASME Y14.5 GD&T compliance, ISO 17296 additive manufacturing principles' }
      ],
      materials: [
        {
          code: 'ALSi10Mg',
          name: 'Additive Aluminum Alloy',
          desc: 'Cast-equivalent lightweight alloy with high thermal conductivity for heat sinks and aerospace brackets.',
          props: ['Density: 2.67 g/cm³', 'Tensile: 410 MPa', 'Thermal']
        },
        {
          code: 'PA12-SLS',
          name: 'Nylon Sintered Powder',
          desc: 'Isotropic thermoplastic ideal for complex internal lattice cushioning and ductwork.',
          props: ['Elongation: 18%', 'Tensile: 48 MPa', 'Isotropic']
        },
        {
          code: 'PEEK-GF30',
          name: 'Glass-Filled Polyketone',
          desc: 'Ultra-performance polymer resisting aggressive solvents and continuous 250°C service temperatures.',
          props: ['Tensile: 170 MPa', 'HDT: 315°C', 'Extreme']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-feather-pointed',
          title: 'Massive Weight Savings',
          desc: 'Strip 40-55% of inert dead weight from aerospace, drone, and racing vehicle components.'
        },
        {
          icon: 'fa-cubes',
          title: 'Consolidate 12 Parts Into 1',
          desc: 'Eliminate welds, bolts, rivets, and gasket interfaces to create seamless monocoque structures.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Certified FEA Stress Audits',
          desc: 'Every redesigned part includes verified factor of safety and fatigue cycle simulation charts.'
        },
        {
          icon: 'fa-wind',
          title: 'Conformal Fluid Channels',
          desc: 'Route fluid cooling channels smoothly around motor shafts and electrical coils.'
        }
      ],
      pricingTiers: [
        {
          name: 'DFAM Diagnostic Audit',
          target: 'Identify weight saving opportunities on existing CAD parts',
          price: '250',
          period: 'per component',
          turnaround: '2 Business Days',
          featured: false,
          features: [
            'Comprehensive DFM report',
            'Topology potential analysis',
            'Mass reduction estimation (% yield)',
            'Manufacturing orientation recommendation',
            '30-minute engineer strategy debrief'
          ]
        },
        {
          name: 'Full Topology Redesign',
          target: 'End-to-end structural redesign, FEA verification & test sample',
          price: '850',
          period: 'per part assembly',
          turnaround: '4-5 Business Days',
          featured: true,
          features: [
            'Complete generative topology CAD modeling',
            'FEA stress & displacement report (PDF)',
            'Assembly consolidation into single body',
            'Native STEP file + 2D GD&T drawings',
            '1x High-strength 3D printed pilot sample included'
          ]
        },
        {
          name: 'Enterprise Co-Dev Sprint',
          target: 'Complex subsystem redesign for automotive, robotics & aerospace',
          price: '2,400',
          period: 'per milestone sprint',
          turnaround: '10-14 Business Days',
          featured: false,
          features: [
            'Multi-part mechanical subsystem redesign',
            'Dynamic vibration & thermal CFD simulation',
            'Physical strain-gauge bench testing validation',
            'Supplier qualification & tooling bridge plan',
            'Dedicated Lead Mechanical PE assigned'
          ]
        }
      ],
      faqs: [
        {
          q: 'What information do you need to begin a topology optimization redesign?',
          a: 'We need the current 3D CAD model (STEP preferred), non-design preserve areas (bolt holes, mating faces), keep-out clearance zones, material specifications, and known load forces (magnitudes, directions, safety factor target).'
        },
        {
          q: 'How accurate is FEA simulation on additive manufactured parts?',
          a: 'When simulating SLS or DMLS metal parts, our models use experimentally calibrated anisotropic material cards that account for laser sintering orientation. Correlated tensile bench testing shows over 95% alignment with simulation predictions.'
        },
        {
          q: 'Can you merge multiple welded sheet-metal components into one?',
          a: 'Yes! That is one of our flagship capabilities. By merging 5-15 individual sheet metal parts into a single additive component, we eliminate welding distortion, reduce tolerance stack-up, and cut overall assembly time to zero.'
        },
        {
          q: 'Do you provide certified manufacturing drawings with GD&T?',
          a: 'Yes. Every complete redesign is accompanied by standard 2D ASME Y14.5 engineering drawings specifying critical datum planes, true position tolerances, and surface roughness requirements.'
        }
      ],
      ctaHeadline: 'Engineer Lighter, Stronger Hardware with DFAM'
    },

    'custom-parts': {
      id: 'custom-parts',
      number: '04',
      kicker: 'SERVICE 04 / ON-DEMAND SHOP-FLOOR TOOLING',
      title: 'Custom Parts, Jigs, Fixtures & Low-Volume Tooling',
      tagline: 'Bespoke Production-Line Fixtures, Robot End-Effectors & On-Demand Spares',
      heroImage: 'assets/service_4_hub.jpg',
      heroImageAlt: 'Metallic 3-port structural hub connector with precision flanges',
      description: 'Eliminate production line downtime with custom-tailored assembly nests, inspection fixtures, robotic gripper fingers, and legacy replacement components. Delivered in continuous fiber-reinforced composites that match the structural rigidity of 6061-T6 aluminum at a fraction of the weight.',
      kpis: [
        { val: '80%', unit: 'lighter', label: 'Than Aluminum Tooling' },
        { val: '24', unit: 'hrs', label: 'Downtime Replacement' },
        { val: 'Zero', unit: 'MOQ', label: 'Order What You Need' },
        { val: 'ESD', unit: 'safe', label: 'Electronics Certified' }
      ],
      blueprintSpecs: {
        'Reinforcement': 'Continuous Carbon Fiber Core',
        'Surface Safety': 'Non-Marring Composite',
        'ESD Rating': '10⁶ to 10⁹ Ohms/sq',
        'Insert Retention': '> 1,200 N Pullout Force'
      },
      contextHeading: 'Rapid Industrial Tooling & Bespoke Component Fabrication',
      contextParagraph1: 'When a critical fixture breaks on a factory assembly line, traditional CNC tooling lead times of 3 to 6 weeks can cost tens of thousands of dollars in lost productivity. PrintNexa produces rugged, continuous carbon-fiber-reinforced jigs overnight.',
      contextParagraph2: 'Our custom fixtures protect delicate cosmetic surfaces from gouging, integrate vacuum channels directly into robotic gripper fingers, and include hardened drill bushings and toggle clamps ready for immediate deployment.',
      workflow: [
        {
          num: '01',
          title: 'Mating Surface Extraction',
          desc: 'Extract negative contact geometries directly from your component CAD to create 100% conforming nests.'
        },
        {
          num: '02',
          title: 'Continuous Fiber Routing',
          desc: 'Automated continuous carbon fiber strand routing along bending moments and clamping paths.'
        },
        {
          num: '03',
          title: 'Bushing & Magnet Press',
          desc: 'Installation of hardened tool-steel drill bushings, neodymium magnets, and grounding leads.'
        },
        {
          num: '04',
          title: 'CMM Datum Verification',
          desc: 'Precision inspection of locator pin locations and critical datum planes within ±0.03 mm.'
        }
      ],
      specsMatrix: [
        { k: 'Tooling Types Fabricated', v: 'Assembly nests, CMM check fixtures, robotic gripper jaws, welding guides, drill templates' },
        { k: 'Fiber Reinforcement Options', v: 'Continuous Carbon Fiber, Kevlar (impact damping), High-Strength High-Temp Fiberglass' },
        { k: 'Tensile Strength Comparison', v: 'Onyx + Carbon Fiber achieves 590 MPa tensile yield—surpassing 6061-T6 aluminum' },
        { k: 'Surface Contact Properties', v: 'Non-marring polymers prevent scratching of polished automotive and aerospace surfaces' },
        { k: 'Integrated Tooling Hardware', v: 'Drill bushings, Destaco toggle clamp mounts, pneumatic quick-disconnect ports' },
        { k: 'Electrostatic Discharge (ESD)', v: 'ESD-safe certified compounds (surface resistivity 10⁶ to 10⁹ Ω) for electronics lines' }
      ],
      materials: [
        {
          code: 'ONYX-CF',
          name: 'Micro-Carbon Nylon Base',
          desc: 'Extremely tough composite with smooth matte black finish and exceptional chemical resistance.',
          props: ['Tensile: 36 MPa', 'HDT: 145°C', 'Stiff']
        },
        {
          code: 'CONTINUOUS-CF',
          name: 'Continuous Carbon Fiber Strand',
          desc: 'Continuous fiber routing providing aluminum-grade flexural stiffness inside the polymer shell.',
          props: ['Tensile: 700 MPa', 'Flexural: 51 GPa', 'Ultra-Rigid']
        },
        {
          code: 'ESD-PA',
          name: 'Electrostatic-Safe Nylon',
          desc: 'Prevents static discharge damage when handling sensitive printed circuit boards and sensors.',
          props: ['10⁷ Ω/sq', 'Cleanroom Safe', 'Black']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-robot',
          title: '80% Lighter Robot End-Effectors',
          desc: 'Lightweight gripper fingers reduce cobot inertial strain, allowing higher payload capacity.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Non-Marring Workpiece Contact',
          desc: 'Composite nests will never scratch, ding, or mar Class-A painted automotive body panels.'
        },
        {
          icon: 'fa-bolt-lightning',
          title: 'Emergency 24-Hour Spares',
          desc: 'Replace damaged shop-floor tooling the very next morning from stored digital CAD inventory.'
        },
        {
          icon: 'fa-cubes-stacked',
          title: 'Conforming Organic Nests',
          desc: '3D print complex organic support nests that would be virtually impossible to CNC mill.'
        }
      ],
      pricingTiers: [
        {
          name: 'Basic Assembly Nest',
          target: 'Standard holding nests, alignment stops & hand templates',
          price: '65',
          period: 'per fixture',
          turnaround: '24-48 Hours',
          featured: false,
          features: [
            'High-impact composite construction',
            'Non-marring surface finish',
            'Integrated mounting bolt holes',
            'Dimensional inspection check',
            'Fast-track shop dispatch'
          ]
        },
        {
          name: 'Reinforced Gripper Jaws',
          target: 'Robotic end-of-arm tooling with continuous fiber reinforcement',
          price: '140',
          period: 'per pair',
          turnaround: '2 Business Days',
          featured: true,
          features: [
            'Continuous Carbon Fiber reinforcement core',
            'Custom gripping teeth or soft TPU friction pads',
            'Lightweight topology to increase robot payload',
            'Integrated pneumatic vacuum suction channels',
            'Precision ground pin locator bushings'
          ]
        },
        {
          name: 'CMM Inspection Fixture',
          target: 'Precision check gauges with steel bushings & toggle clamps',
          price: '480',
          period: 'per complete fixture',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            'Full assembly with Destaco toggle clamps',
            'Hardened steel drill / probe bushings installed',
            'CMM probe verification certificate (±0.03 mm)',
            'Anodized aluminum base plate mounting',
            'Serialized laser engraved identification plate'
          ]
        }
      ],
      faqs: [
        {
          q: 'How does composite 3D printed tooling compare to machined 6061 aluminum?',
          a: 'Tooling reinforced with continuous carbon fiber matches the flexural rigidity of 6061-T6 aluminum while weighing 40-70% less. It is virtually non-marring, impervious to machine cutting fluids, and can be produced in hours without CNC programming backlogs.'
        },
        {
          q: 'Can you incorporate metal drill bushings into the printed fixtures?',
          a: 'Yes. We routinely design slip-fit or press-fit holes for standard hardened tool-steel drill bushings, allowing operators to perform thousands of drilling operations without bore wear.'
        },
        {
          q: 'Are your materials safe for semiconductor and electronics manufacturing?',
          a: 'Yes, we stock certified ESD-safe materials (surface resistivity 10⁶ to 10⁹ Ω) that safely dissipate static electricity, making them ideal for PCB assembly fixtures and automated test equipment.'
        },
        {
          q: 'Can you reverse engineer a broken discontinued tool without CAD?',
          a: 'Yes! Send us the broken physical component and our laser metrology team will 3D scan it, repair the fracture geometry in CAD, and print a reinforced replacement within 48 hours.'
        }
      ],
      ctaHeadline: 'Upgrade Your Factory Floor Tooling Overnight'
    },

    'industrial-solutions': {
      id: 'industrial-solutions',
      number: '05',
      kicker: 'SERVICE 05 / BRIDGE & BATCH MANUFACTURING',
      title: 'Industrial Solutions & Scaled Bridge Manufacturing',
      tagline: 'Certified End-Use Batch Production from 50 to 10,000+ Units with Full Quality Traceability',
      heroImage: 'assets/service_5_helmet.jpg',
      heroImageAlt: 'Aerodynamic industrial helmet prototype with ventilated lattice shell',
      description: 'Bridge the multi-month gap to hard tooling with scalable on-demand additive production. PrintNexa operates automated industrial printing farms running 24/7, providing batch production runs up to 10,000 units with CMM quality audits, serialized barcoding, and ISO 9001:2015 certification.',
      kpis: [
        { val: '10K+', unit: 'units/mo', label: 'Production Capacity' },
        { val: 'AS9100D', unit: '', label: 'Aerospace Certified' },
        { val: '100%', unit: '', label: 'CMM Serialized Audit' },
        { val: '4-7', unit: 'days', label: 'Batch Lead Time' }
      ],
      blueprintSpecs: {
        'Quality Standard': 'ISO 9001:2015 / AS9100D',
        'Inspection Plan': 'AQL 0.65 Level II Standard',
        'Serialization': 'Laser Etched 2D DataMatrix',
        'Packaging': 'ESD & Cleanroom Vacuum Sealed'
      },
      contextHeading: 'High-Volume Additive Farms & Supply Chain Resilience',
      contextParagraph1: 'Traditional manufacturing requires months of tooling development and high minimum order quantities. PrintNexa enables agile supply chains through dedicated additive manufacturing bays. Launch your product into the market immediately, test consumer adoption, and iterate between batches with zero tooling scrap.',
      contextParagraph2: 'Our production line is backed by an automated powder recovery system, continuous automated de-powdering tumblers, and high-precision Hexagon coordinate measuring machines to ensure unit-to-unit consistency across thousands of parts.',
      workflow: [
        {
          num: '01',
          title: 'PPAP & First Article Inspection',
          desc: 'Comprehensive AS9102 First Article Inspection (FAI) report with full dimensional bubble drawing.'
        },
        {
          num: '02',
          title: 'High-Density 3D Nesting',
          desc: 'Automated 3D nesting packing hundreds of components into synchronized SLS build volumes.'
        },
        {
          num: '03',
          title: 'Continuous Automated Post-Processing',
          desc: 'High-speed automated blasting, vibratory ceramic tumbling, and deep black graphite dyeing.'
        },
        {
          num: '04',
          title: 'Barcode Serialization & Dispatch',
          desc: 'Laser-etched individual serial QR codes and scheduled batch shipments direct to your assembly line.'
        }
      ],
      specsMatrix: [
        { k: 'Batch Volume Range', v: 'Low-to-medium volume runs: 50 to 10,000+ serialized finished components' },
        { k: 'Hardware Fleet Capacity', v: 'Over 150 industrial printing bays with 24/7 automated monitoring' },
        { k: 'Quality Management System', v: 'Certified ISO 9001:2015, AS9100D Rev D, ITAR registered facility' },
        { k: 'Metrology & Inspection', v: 'Hexagon CMM probe inspection, optical 3D scanning, gauge repeatability (Gage R&R)' },
        { k: 'Finishing & Coloring', v: 'Chemical vapor smoothing, custom RAL dyed colors, Cerakote ceramic coating' },
        { k: 'Supply Chain Integration', v: 'Kanban blanket orders, JIT scheduled delivery, vendor-managed inventory' }
      ],
      materials: [
        {
          code: 'PA11-BIO',
          name: 'Polyamide 11 Bio-Based',
          desc: 'Durable castor-oil derived polymer offering superior elongation and impact resistance for automotive clips.',
          props: ['Elongation: 45%', 'Bio-Derived', 'Tough']
        },
        {
          code: 'PA12-SLS',
          name: 'Industrial Nylon PA12',
          desc: 'The gold standard for production bridge manufacturing with balanced isotropic strength.',
          props: ['Tensile: 50 MPa', 'HDT: 163°C', 'Food Safe']
        },
        {
          code: 'TPU-SHORE85',
          name: 'Production Elastomer',
          desc: 'Durable rubber-like material for production gaskets, bellows, and damping mounts.',
          props: ['Tear: 85 N/mm', 'Oil Resistant', 'Black']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-truck-fast',
          title: 'Zero Tooling Delay to Market',
          desc: 'Fulfill customer orders within 5 days instead of waiting 16 weeks for steel injection molds.'
        },
        {
          icon: 'fa-sliders',
          title: 'Iterate Designs Mid-Production',
          desc: 'Incorporate customer feedback between batches without spending a penny on mold modifications.'
        },
        {
          icon: 'fa-award',
          title: 'Aerospace AS9100D Certified',
          desc: 'Full material traceability, melt records, and tensile coupon testing for every single build lot.'
        },
        {
          icon: 'fa-warehouse',
          title: 'Virtual Digital Warehouse',
          desc: 'Store parts as digital CAD files and print strictly on-demand, eliminating costly warehouse inventory.'
        }
      ],
      pricingTiers: [
        {
          name: 'Pilot Batch (50 – 200 units)',
          target: 'Beta customer rollouts, clinical trials & field testing',
          price: '18',
          period: 'per unit',
          turnaround: '3-4 Business Days',
          featured: false,
          features: [
            'SLS or MJF Nylon PA12 production',
            'Full de-powdering & glass bead blast',
            'Batch Certificate of Conformance',
            'First Article Inspection (FAI) report',
            'Individually bagged with part numbers'
          ]
        },
        {
          name: 'Medium Run (201 – 1,000 units)',
          target: 'Bridge-to-tooling production & market launch inventory',
          price: '12',
          period: 'per unit',
          turnaround: '5-7 Business Days',
          featured: true,
          features: [
            'Deep black graphite dye or vapor smooth',
            'CMM sample inspection (AQL 0.65 Level II)',
            'Laser-etched serial numbers / QR codes',
            'Dedicated production capacity reservation',
            'Split delivery schedules supported'
          ]
        },
        {
          name: 'Scaled Fleet (1,000 – 10,000+ units)',
          target: 'High-volume recurring production contracts & supply chains',
          price: '7.50',
          period: 'per unit',
          turnaround: 'Scheduled JIT Dispatch',
          featured: false,
          features: [
            'Maximum volume unit cost discount',
            'Dedicated printing bays reserved for your account',
            '100% automated optical inspection available',
            'Custom packaging and palletized dispatch',
            'Annual supply agreement price lock guarantee'
          ]
        }
      ],
      faqs: [
        {
          q: 'How does unit cost scale with volume in additive manufacturing?',
          a: 'Unlike CNC or injection molding where the first part costs $10,000 and subsequent parts cost $2, additive manufacturing features a much flatter cost curve. By utilizing high-density 3D nesting, our unit costs drop dramatically from 50 units down to sub-$10 levels for 1,000+ unit batches.'
        },
        {
          q: 'What quality documents are supplied with production batches?',
          a: 'Every batch shipment includes a Certificate of Conformance (CoC), material raw resin lot certs, a dimensional inspection report (CMM or optical scanner), and upon request, full AS9102 First Article Inspection reports.'
        },
        {
          q: 'Can you add serialized laser marking and barcodes to every part?',
          a: 'Yes. We utilize precision fiber laser engravers to etch 2D DataMatrix codes, QR codes, alphanumeric serials, and logos directly onto your parts for complete lifecycle traceability.'
        },
        {
          q: 'Can you guarantee color consistency across different production lots?',
          a: 'Yes. Our automated tumbling and heated immersion dyeing processes use closed-loop colorimeters to verify color delta (ΔE < 1.0) across distinct production months, guaranteeing uniform appearance.'
        }
      ],
      ctaHeadline: 'Scale Your Production with Zero Tooling Capital'
    },

    'metal-printing': {
      id: 'metal-printing',
      number: '06',
      kicker: 'SERVICE 06 / METALLURGY & CHEMICAL FINISHING',
      title: 'DMLS Metal 3D Printing & Surface Finishing',
      tagline: 'Aerospace-Grade Titanium, Inconel & Chemical Vapor Smoothing for High-Stress Applications',
      heroImage: 'assets/mat_vapor_smooth.jpg',
      heroImageAlt: 'Chemical vapor smoothed precision mechanical component with mirrored sheen',
      description: 'Manufacture extreme-performance metal components in aerospace superalloys impossible to fabricate with conventional CNC mills. Utilizing Direct Metal Laser Sintering (DMLS) combined with cleanroom chemical vapor smoothing, vacuum heat treatment, and 5-axis CNC datum finishing.',
      kpis: [
        { val: '>99.8%', unit: 'density', label: 'Material Density' },
        { val: '<0.8', unit: 'μm Ra', label: 'Vapor Smooth Finish' },
        { val: '1,100', unit: '°C', label: 'Inconel Temp Limit' },
        { val: 'AS9100D', unit: '', label: 'Certified Metallurgy' }
      ],
      blueprintSpecs: {
        'Laser Power': '400W Yb-Fiber Laser',
        'Atmosphere': 'High-Purity Argon (<100 ppm O₂)',
        'Post-Treatment': 'Vacuum Stress Relief + HIP',
        'Metrology': 'CT X-Ray Non-Destructive'
      },
      contextHeading: 'Direct Metal Metallurgy & Chemical Vapor Smoothing',
      contextParagraph1: 'Direct Metal Laser Sintering (DMLS) fuses gas-atomized metal alloy powder layer-by-layer with a focused high-power fiber laser inside a sealed inert argon environment. The result is a fully dense (>99.8%) homogenous metal part with mechanical properties matching or exceeding wrought and forged metals.',
      contextParagraph2: 'To solve the traditional roughness of sintered metal, PrintNexa integrates chemical vapor smoothing and automated bead blasting, reducing surface roughness to Ra < 0.8 μm. This seals micro-valleys, dramatically boosts fatigue life, and makes parts suitable for cleanroom medical fluidics and rocket engine combustion jackets.',
      workflow: [
        {
          num: '01',
          title: 'Laser Powder Fusion',
          desc: 'High-power 400W fiber laser melts micron-fine metal powder inside an argon-purged build chamber.'
        },
        {
          num: '02',
          title: 'Vacuum Stress Relief & HIP',
          desc: 'Controlled vacuum thermal cycle and Hot Isostatic Pressing (HIP) to eliminate residual lattice stress.'
        },
        {
          num: '03',
          title: 'Wire EDM Plate Cut-Off',
          desc: 'Sub-micron wire electrical discharge machining separating parts cleanly from the build plate.'
        },
        {
          num: '04',
          title: 'Chemical Vapor Smoothing',
          desc: 'Automated chemical vapor smoothing chamber leveling surface asperities to mirror-smooth Ra < 0.8 μm.'
        }
      ],
      specsMatrix: [
        { k: 'Supported Metal Superalloys', v: 'Titanium Ti-6Al-4V (Grade 5 & Grade 23 Eli), Inconel 718 & 625, 316L Stainless Steel, AlSi10Mg Aluminum, Cobalt-Chrome' },
        { k: 'Microstructure Density', v: 'Greater than 99.8% relative density (exceeding investment casting standards)' },
        { k: 'Layer Thickness Options', v: '30 μm to 60 μm depending on fine feature resolution vs throughput requirement' },
        { k: 'Post-Process Heat Treatments', v: 'Vacuum stress relief, Solution annealing, Aging, Hot Isostatic Pressing (HIP)' },
        { k: 'Surface Finishing Capabilities', v: 'Chemical Vapor Smoothing (Ra < 0.8 μm), bead blasting, anodizing, passivating' },
        { k: 'CNC Secondary Machining', v: '5-axis CNC machining of precision bearing bores, O-ring grooves, and threaded taps' }
      ],
      materials: [
        {
          code: 'TI-6AL-4V',
          name: 'Titanium Grade 5',
          desc: 'Supreme strength-to-weight ratio and biocompatibility for aerospace brackets and orthopedic implants.',
          props: ['Tensile: 1,150 MPa', 'Density: 4.43 g/cm³', 'Biocompatible']
        },
        {
          code: 'INCONEL-718',
          name: 'Nickel-Chromium Superalloy',
          desc: 'Resists extreme heat up to 700°C without losing tensile strength; used in rocket engines and gas turbines.',
          props: ['Tensile: 1,350 MPa', 'Max Temp: 700°C', 'Corrosion']
        },
        {
          code: 'SS-316L',
          name: 'Austenitic Stainless Steel',
          desc: 'Corrosion-resistant steel ideal for marine environments, medical devices, and chemical processing.',
          props: ['Tensile: 650 MPa', 'Corrosion Proof', 'Weldable']
        }
      ],
      whyPillars: [
        {
          icon: 'fa-fire-flame-curved',
          title: 'Extreme Heat & Stress Resistance',
          desc: 'Withstand rocket combustion temperatures and aggressive acids with Inconel 718 and Titanium.'
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'Vapor Smoothed Mirror Finish',
          desc: 'Chemical vapor smoothing brings surface roughness down to Ra < 0.8 μm for laminar fluid flow.'
        },
        {
          icon: 'fa-network-wired',
          title: 'Internal Conformal Cooling',
          desc: 'Integrate organic cooling channels curved smoothly inside turbine blades and injection mold inserts.'
        },
        {
          icon: 'fa-certificate',
          title: 'Non-Destructive CT X-Ray',
          desc: 'Optional industrial computed tomography (CT) X-ray scans verifying zero internal voids or porosity.'
        }
      ],
      pricingTiers: [
        {
          name: '316L Stainless Steel Pilot',
          target: 'Functional metal prototypes, chemical fittings & marine hardware',
          price: '185',
          period: 'per component',
          turnaround: '4-5 Business Days',
          featured: false,
          features: [
            'Sintered in 316L Stainless Steel',
            'Full stress relief heat treatment',
            'Wire EDM parting from build plate',
            'Micro-bead blasted uniform matte finish',
            'Dimensional inspection report (calipers)'
          ]
        },
        {
          name: 'Titanium / Inconel Flight Grade',
          target: 'Aerospace structural brackets, turbine components & motorsports',
          price: '340',
          period: 'per component',
          turnaround: '5-7 Business Days',
          featured: true,
          features: [
            'Choice of Ti-6Al-4V Grade 5 or Inconel 718',
            'Vacuum furnace cycle + Hot Isostatic Pressing (HIP)',
            'Chemical vapor smoothed finish (Ra < 0.8 μm)',
            'Full metallurgical raw powder test certificate',
            'CMM optical probe dimensional verification',
            'AS9100D Certificate of Conformance'
          ]
        },
        {
          name: 'Production Superalloy Fleet',
          target: 'High-volume bridge production of mission-critical metal hardware',
          price: 'Custom',
          period: 'contract pricing',
          turnaround: 'Scheduled Batch Delivery',
          featured: false,
          features: [
            'Dedicated 400W DMLS build plates',
            'Integrated 5-axis CNC machining of tight datums',
            'Non-destructive CT X-Ray porosity audit',
            'Laser etched serial numbers & traceability',
            'On-site metallurgist sign-off'
          ]
        }
      ],
      faqs: [
        {
          q: 'How does DMLS 3D printed metal compare to CNC machined metal?',
          a: 'DMLS metal components exhibit mechanical properties comparable to wrought alloys (>99.8% dense). Tensile and yield strengths typically exceed cast metal and match forged counterparts after Hot Isostatic Pressing (HIP). DMLS enables complex internal channels and generative structures that CNC milling cannot produce.'
        },
        {
          q: 'What is chemical vapor smoothing and why is it important?',
          a: 'Chemical vapor smoothing exposes the metal part to a vaporized solvent under precise pressure and temperature. The vapor levels microscopic peaks across the surface, reducing roughness from Ra 6.0 μm down to under Ra 0.8 μm. This eliminates surface crack propagation and increases fatigue life significantly.'
        },
        {
          q: 'Do you perform post-weld or post-sinter heat treatment?',
          a: 'Yes. Every DMLS metal build undergoes a vacuum stress-relief cycle before removal from the build plate with wire EDM. For aerospace components, we perform Hot Isostatic Pressing (HIP) and precipitation aging.'
        },
        {
          q: 'Can tight tolerance bearing journals and threads be CNC machined after sintering?',
          a: 'Absolutely. We add 0.8 mm to 1.5 mm machining stock allowance to critical datum faces, bearing bores, and threaded holes, then finish them on our 5-axis CNC machining centers to achieve tolerances of ±0.01 mm.'
        }
      ],
      ctaHeadline: 'Fabricate Mission-Critical Metal Hardware Today'
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

  function getActiveServiceKeyFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('service');
    if (key && SERVICES_DATA[key]) {
      return key;
    }
    return '3d-printing'; 
  }

  const dynamicContainer = document.getElementById('dynamicServiceContainer');
  const servicePills = document.querySelectorAll('.srv-pill-btn');

  function renderService(serviceKey, shouldSmoothScroll = false) {
    const srv = SERVICES_DATA[serviceKey];
    if (!srv || !dynamicContainer) return;

    document.title = `${srv.title} — PrintNexa Services`;
    const metaDesc = document.getElementById('pageMetaDesc');
    if (metaDesc) {
      metaDesc.setAttribute('content', srv.description);
    }

    servicePills.forEach(pill => {
      const pillKey = pill.getAttribute('data-service-key');
      if (pillKey === serviceKey) {
        pill.classList.add('active');
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        pill.classList.remove('active');
      }
    });

    const contentHtml = `
      <div class="service-content-wrapper" id="serviceWrapper_${srv.id}">
        <!-- ===================================================================
             1. HERO BANNER FOR THIS SPECIFIC SERVICE
             =================================================================== -->
        <section class="srv-detail-hero" id="srvHero">
          <div class="hero-mesh-background" aria-hidden="true"></div>
          <div class="section-container">
            <div class="srv-detail-hero-grid">
              <!-- Left Column: Headings, KPIs, CTA -->
              <div class="srv-hero-text-block">
                <div class="srv-hero-kicker-badge">
                  <i class="fa-solid fa-cube text-orange"></i>
                  <span>${srv.kicker}</span>
                </div>

                <h1 class="srv-hero-title">${srv.title}</h1>
                <p class="srv-hero-tagline">${srv.tagline}</p>
                <p class="srv-hero-desc">${srv.description}</p>

                <!-- KPI Metric Chips -->
                <div class="srv-hero-metrics-grid">
                  ${srv.kpis.map(kpi => `
                    <div class="srv-metric-box">
                      <span class="metric-val">${kpi.val}<span class="unit">${kpi.unit}</span></span>
                      <span class="metric-lbl">${kpi.label}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- CTA Row -->
                <div class="srv-hero-actions-row">
                  <button type="button" class="btn-orange-pill" id="detailHeroQuoteBtn" data-service-select="${srv.id}">
                    <span>Request Instant Quote</span>
                    <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="btn-outline-pill" id="downloadSpecSheetBtn" data-service-title="${srv.title}">
                    <i class="fa-solid fa-file-arrow-down" style="color: var(--primary-orange);"></i>
                    <span>Download Spec Sheet</span>
                  </button>
                </div>
              </div>

              <!-- Right Column: Visual Blueprint Showcase Card -->
              <div class="srv-hero-visual">
                <div class="visual-blueprint-card">
                  <img src="${srv.heroImage}" alt="${srv.heroImageAlt}" loading="eager" />
                  <div class="visual-card-overlay">
                    <div class="visual-header-badge">
                      <span class="pulse-dot"></span>
                      <span>LAB STATUS: ONLINE · ISO VERIFIED</span>
                    </div>
                    <div class="visual-footer-specs">
                      ${Object.entries(srv.blueprintSpecs).map(([key, val]) => `
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
             2. SERVICE CONTEXT & TECHNICAL CAPABILITIES
             =================================================================== -->
        <section class="srv-detail-context" id="srvContext">
          <div class="section-container">
            <div class="context-grid-row">
              <div class="context-text-block">
                <div class="section-kicker">
                  <span>CAPABILITIES OVERVIEW</span>
                </div>
                <h3>${srv.contextHeading}</h3>
                <p>${srv.contextParagraph1}</p>
                <p>${srv.contextParagraph2}</p>
              </div>

              <!-- 4-Step Technical Workflow -->
              <div class="context-workflow-wrapper">
                <div class="section-kicker" style="margin-bottom: 1.5rem;">
                  <span>PRECISION EXECUTION WORKFLOW</span>
                </div>
                <div class="process-flow-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 0;">
                  ${srv.workflow.map(step => `
                    <div class="process-step-card">
                      <span class="process-step-num">PHASE ${step.num}</span>
                      <h4 class="process-step-title">${step.title}</h4>
                      <p class="process-step-desc">${step.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Technical Specifications Matrix -->
            <div class="specs-matrix-card">
              <div class="specs-matrix-header">
                <div class="specs-matrix-title">
                  <i class="fa-solid fa-microchip text-orange"></i>
                  <span>TECHNICAL SPECIFICATION MATRIX &amp; TOLERANCES</span>
                </div>
                <span class="cert-pill">ISO 9001:2015 Compliant</span>
              </div>
              <table class="specs-table">
                <tbody>
                  ${srv.specsMatrix.map(row => `
                    <tr>
                      <th>${row.k}</th>
                      <td>${row.v}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Material Compatibility Spotlight -->
            <div class="materials-section-block">
              <div class="section-header-centered" style="margin-bottom: 2.5rem;">
                <div class="section-kicker">
                  <span>MATERIAL COMPATIBILITY</span>
                </div>
                <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.85rem; font-weight: 700;">
                  Engineered Materials for <span class="text-orange">${srv.title}</span>
                </h3>
              </div>
              <div class="materials-spotlight-grid">
                ${srv.materials.map(mat => `
                  <div class="material-card">
                    <div class="mat-card-header">
                      <span class="mat-code">${mat.code}</span>
                      <i class="fa-solid fa-atom text-orange"></i>
                    </div>
                    <h4 class="mat-name">${mat.name}</h4>
                    <p class="mat-desc">${mat.desc}</p>
                    <div class="mat-properties">
                      ${mat.props.map(prop => `
                        <span class="mat-prop-tag">${prop}</span>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- ===================================================================
             3. WHY CHOOSE THIS SERVICE
             =================================================================== -->
        <section class="srv-detail-why" id="srvWhy">
          <div class="section-container">
            <div class="section-header-centered">
              <div class="section-kicker">
                <span>ENGINEERING ADVANTAGE</span>
              </div>
              <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800;">
                Why Choose PrintNexa for <span class="text-orange">${srv.title}</span>?
              </h2>
              <p style="color: var(--text-secondary); max-width: 640px; margin: 0.75rem auto 0;">
                Delivering repeatable, dimensionally certified parts that bypass tooling bottlenecks.
              </p>
            </div>

            <!-- 4 Value Pillars -->
            <div class="why-pillars-grid">
              ${srv.whyPillars.map(p => `
                <div class="why-pillar-card">
                  <div class="pillar-icon-wrap">
                    <i class="fa-solid ${p.icon}"></i>
                  </div>
                  <h4 class="pillar-title">${p.title}</h4>
                  <p class="pillar-desc">${p.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Spotlight Callout Box -->
            <div class="spotlight-callout-box">
              <div>
                <span class="detail-cta-badge">ZERO TOOLING OVERHEAD</span>
                <h3 class="callout-title">Accelerate Your Hardware Delivery Timelines</h3>
                <p class="callout-p">
                  Skip the 12-to-16-week lead times of traditional steel injection tooling. Our digitally driven manufacturing pipeline allows you to upload revision files on Monday and receive production-verified physical hardware on Wednesday.
                </p>
                <ul class="callout-bullets">
                  <li><i class="fa-solid fa-circle-check"></i> 100% digital trace of laser and temperature logs</li>
                  <li><i class="fa-solid fa-circle-check"></i> CMM metrology inspection report with bubble drawings</li>
                  <li><i class="fa-solid fa-circle-check"></i> Non-destructive quality audit and Certificate of Conformance</li>
                </ul>
              </div>
              <div style="text-align: right;">
                <button type="button" class="btn-orange-pill" id="calloutQuoteBtn" data-service-select="${srv.id}" style="width: auto; padding: 1rem 2rem;">
                  <span>Start Your Project</span>
                  <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- ===================================================================
             5. SERVICE-SPECIFIC FAQS ACCORDION
             =================================================================== -->
        <section class="srv-detail-faqs" id="srvFaqs">
          <div class="section-container faqs-container-narrow">
            <div class="section-header-centered">
              <div class="section-kicker">
                <span>TECHNICAL FAQS</span>
              </div>
              <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.1rem; font-weight: 800;">
                Frequently Asked Questions
              </h2>
              <p style="color: var(--text-secondary); margin-top: 0.5rem;">
                Direct answers to specific engineering inquiries about our ${srv.title} service.
              </p>
            </div>

            <div class="faq-accordion-list" style="margin-top: 3rem;">
              ${srv.faqs.map((faq, index) => `
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
        <section class="srv-detail-cta" id="srvCta">
          <div class="section-container">
            <div class="detail-cta-card">
              <div class="cta-mesh-bg" aria-hidden="true"></div>
              <div class="detail-cta-content">
                <span class="detail-cta-badge">
                  <i class="fa-solid fa-bolt text-orange"></i> READY TO MANUFACTURE?
                </span>
                <h2 class="detail-cta-title">${srv.ctaHeadline}</h2>
                <p class="detail-cta-desc">
                  Upload your CAD model for an instant automated DFM geometry check, material selection consultation, and rapid price quote within 2 hours.
                </p>
                <div class="detail-cta-btn-row">
                  <button type="button" class="btn-orange-pill" id="finalCtaQuoteBtn" data-service-select="${srv.id}">
                    <span>Request Custom Quote</span>
                    <i class="fa-solid fa-arrow-right cta-arrow" aria-hidden="true"></i>
                  </button>
                  <a href="service.html" class="btn-outline-pill" style="border-color: rgba(255, 255, 255, 0.25); color: #FFFFFF;">
                    <span>View All 6 Services</span>
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

    attachDynamicEventListeners(srv);

    if (shouldSmoothScroll) {
      const strip = document.getElementById('serviceSelectorStrip');
      const topOffset = strip ? strip.getBoundingClientRect().bottom + window.scrollY : 0;
      window.scrollTo({ top: topOffset > 0 ? topOffset - 20 : 0, behavior: 'smooth' });
    }
  }

  function attachDynamicEventListeners(activeService) {

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

    const quoteTriggers = dynamicContainer.querySelectorAll('[data-service-select]');
    quoteTriggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const serviceKey = btn.getAttribute('data-service-select') || activeService.id;
        openQuoteModalWithService(serviceKey);
      });
    });

    const downloadBtn = dynamicContainer.getElementById ? dynamicContainer.getElementById('downloadSpecSheetBtn') : dynamicContainer.querySelector('#downloadSpecSheetBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        showToast(`Preparing technical PDF specification sheet for ${activeService.title}...`, 'info');
        setTimeout(() => {
          showToast(`Spec sheet downloaded! Checked against ISO 9001:2015 criteria.`, 'success');
        }, 1500);
      });
    }
  }

  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetServiceKey = pill.getAttribute('data-service-key');
      if (targetServiceKey && SERVICES_DATA[targetServiceKey]) {

        const newUrl = `${window.location.pathname}?service=${targetServiceKey}`;
        window.history.pushState({ service: targetServiceKey }, '', newUrl);

        renderService(targetServiceKey, true);
        showToast(`Loaded ${SERVICES_DATA[targetServiceKey].title}`, 'info');
      }
    });
  });

  window.addEventListener('popstate', (e) => {
    const serviceKey = getActiveServiceKeyFromUrl();
    renderService(serviceKey, false);
  });

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const siteHeader = document.getElementById('siteHeader');

  const quoteModal = document.getElementById('quoteModal');
  const quoteModalCloseBtn = document.getElementById('quoteModalCloseBtn');
  const quoteForm = document.getElementById('quoteCalculatorForm');
  const quoteTechSelect = document.getElementById('quoteTech');
  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const loginModal = document.getElementById('loginModal');
  const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
  const loginForm = document.getElementById('loginForm');
  const toastContainer = document.getElementById('toastContainer');
  const detailNewsletterForm = document.getElementById('detailNewsletterForm');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    });
  }

  if (rtlToggleBtn) {
    if (rtlBtnText) {
      rtlBtnText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    }
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

  function openQuoteModalWithService(serviceKey) {
    if (quoteTechSelect && serviceKey) {
      quoteTechSelect.value = serviceKey;
    }
    const modalSubtitle = document.getElementById('quoteModalSubtitle');
    if (modalSubtitle && SERVICES_DATA[serviceKey]) {
      modalSubtitle.textContent = `Configuring engineering quote for ${SERVICES_DATA[serviceKey].title}`;
    }
    openModal(quoteModal);
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

  if (quoteModalCloseBtn && quoteModal) {
    quoteModalCloseBtn.addEventListener('click', () => closeModal(quoteModal));
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeModal(quoteModal);
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
      if (quoteModal && quoteModal.classList.contains('active')) closeModal(quoteModal);
      if (loginModal && loginModal.classList.contains('active')) closeModal(loginModal);
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(quoteModal);
      showToast('Quote request submitted! Engineering team will respond within 2 hours.', 'success');
      quoteForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Authenticated! Welcome to the PrintNexa Engineering Portal.', 'success');
      loginForm.reset();
    });
  }

  if (detailNewsletterForm) {
    detailNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! You are now subscribed to the Engineering Dispatch.', 'success');
      detailNewsletterForm.reset();
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

  const initialKey = getActiveServiceKeyFromUrl();
  renderService(initialKey, false);

})();
