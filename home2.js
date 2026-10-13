
document.addEventListener('DOMContentLoaded', () => {

  const toastHub = document.getElementById('toastHub');

  function showToast(message, type = 'info') {
    if (!toastHub) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';

    let iconClass = 'fa-solid fa-circle-info text-orange';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check' ;
    if (type === 'warn') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
    toastHub.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('printnexa_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('printnexa_theme', newTheme);
    });
  }

  const savedRTL = localStorage.getItem('printnexa_rtl') === 'true';
  function setRTL(isRTL) {
    if (isRTL) {
      htmlRoot.setAttribute('dir', 'rtl');
      if (rtlBtnText) rtlBtnText.textContent = 'LTR';
      localStorage.setItem('printnexa_rtl', 'true');
    } else {
      htmlRoot.setAttribute('dir', 'ltr');
      if (rtlBtnText) rtlBtnText.textContent = 'RTL';
      localStorage.setItem('printnexa_rtl', 'false');
    }
  }
  setRTL(savedRTL);

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const isCurrentlyRtl = htmlRoot.getAttribute('dir') === 'rtl';
      setRTL(!isCurrentlyRtl);
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

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

  const quickDropzone = document.getElementById('quickDropzone');
  const heroCadFileInput = document.getElementById('heroCadFileInput');
  const cadUploadModal = document.getElementById('cadUploadModal');

  if (quickDropzone) {
    quickDropzone.addEventListener('click', () => {
      openModal(cadUploadModal);
    });

    quickDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      quickDropzone.classList.add('dragover');
    });

    quickDropzone.addEventListener('dragleave', () => {
      quickDropzone.classList.remove('dragover');
    });

    quickDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      quickDropzone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        openModal(cadUploadModal);
        handleSimulatedScan(files[0].name);
      }
    });
  }

  const techButtons = document.querySelectorAll('.h2-tech-btn');
  const techBadge = document.getElementById('techBadge');
  const techMachine = document.getElementById('techMachine');
  const techTitle = document.getElementById('techTitle');
  const techDescription = document.getElementById('techDescription');
  const meterTensile = document.getElementById('meterTensile');
  const valTensile = document.getElementById('valTensile');
  const meterTemp = document.getElementById('meterTemp');
  const valTemp = document.getElementById('valTemp');
  const meterTolerance = document.getElementById('meterTolerance');
  const valTolerance = document.getElementById('valTolerance');
  const meterWall = document.getElementById('meterWall');
  const valWall = document.getElementById('valWall');
  const techMaterialChips = document.getElementById('techMaterialChips');
  const techImage = document.getElementById('techImage');
  const techSurfaceRa = document.getElementById('techSurfaceRa');
  const techConfigureBtn = document.getElementById('techConfigureBtn');

  const techDatabase = {
    dmls: {
      badge: 'AEROSPACE METALLURGY',
      machine: 'EOS M400-4 Quad Fiber Laser',
      title: 'Direct Metal Laser Sintering (DMLS / SLM)',
      desc: 'High-density laser powder bed fusion fusing micro-granulated metal alloys layer-by-layer. Ideal for lightweight flight hardware, rocket engine manifolds, high-pressure hydraulics, and patient-matched surgical implants.',
      tensile: '1,150 MPa (Ti-6Al-4V)', tensilePct: '95%',
      temp: 'Up to 650°C (Inconel)', tempPct: '90%',
      tol: '±0.03 mm', tolPct: '88%',
      wall: '0.35 mm', wallPct: '75%',
      materials: ['Titanium Ti-6Al-4V Grade 23', 'Inconel 718', 'Stainless Steel 316L', 'Aluminum AlSi10Mg', 'Cobalt-Chrome'],
      image: 'assets/service_2_bracket.jpg',
      surface: 'Ra 3.2 µm (As-Printed)',
      calcMat: 'ti64'
    },
    sls: {
      badge: 'RAPID SERIES PRODUCTION',
      machine: 'EOS P 396 High-Temp Polymer',
      title: 'Selective Laser Sintering (SLS Production)',
      desc: 'Industrial powder bed fusion sintering fine polyamide micro-particles without internal supports. Unmatched geometrical freedom for complex ducting, snap-fit casings, and batch runs up to 10,000 units.',
      tensile: '48 MPa (PA12 Nylon)', tensilePct: '45%',
      temp: '163°C Deflection Temp', tempPct: '42%',
      tol: '±0.05 mm', tolPct: '80%',
      wall: '0.70 mm', wallPct: '60%',
      materials: ['PA12 Nylon (White/Black)', 'PA11 Bio-Nylon', 'Glass-Bead PA12', 'Carbon-Reinforced PA12', 'TPU Flexible'],
      image: 'assets/service_3_gear.jpg',
      surface: 'Ra 4.5 µm (Vapor Smoothable to 0.8 µm)',
      calcMat: 'pa12'
    },
    sla: {
      badge: 'OPTICAL & SUB-MICRON PRECISION',
      machine: '3D Systems ProX 800 Laser',
      title: 'Industrial Stereolithography (SLA / DLP)',
      desc: 'Ultraviolet laser vat photopolymerization producing glassy-smooth surfaces and microscopic features. Used for microfluidic chips, silicone tooling masters, wind tunnel aerodynamic models, and medical guides.',
      tensile: '80 MPa (Rigid Photopolymer)', tensilePct: '65%',
      temp: '238°C (High-Temp Resin)', tempPct: '60%',
      tol: '±0.02 mm', tolPct: '94%',
      wall: '0.20 mm', wallPct: '90%',
      materials: ['Accura ClearVue (Optical)', 'Rigid 10K Ceramic Resin', 'High-Temp 200°C Resin', 'Tough 2000 ABS-Like', 'Biocompatible Dental Class IIa'],
      image: 'assets/about_hero_vase.jpg',
      surface: 'Ra 0.8 µm (Optically Smooth)',
      calcMat: 'slaclear'
    },
    fdm: {
      badge: 'EXTREME TEMPERATURE & CHEMICAL RESISTANCE',
      machine: 'Stratasys F900 Fortus Industrial',
      title: 'High-Performance Industrial FDM (PEEK / ULTEM)',
      desc: 'High-temperature filament extrusion engineered for extreme aerospace and downhole oil/gas applications. Replaces machined aluminum brackets with FAA flame-retardant thermoplastics.',
      tensile: '72 MPa (ULTEM 9085)', tensilePct: '60%',
      temp: '250°C (PEEK Continuous)', tempPct: '72%',
      tol: '±0.06 mm', tolPct: '75%',
      wall: '0.80 mm', wallPct: '55%',
      materials: ['ULTEM™ 9085 (FAR 25.853)', 'PEEK (Unfilled / Carbon)', 'Antero 800NA PEKK', 'Nylon 12 Carbon Fiber', 'ESD-Safe ABS'],
      image: 'assets/service_4_hub.jpg',
      surface: 'Ra 6.0 µm (Heavy-Duty Layered)',
      calcMat: 'ultem9085'
    },
    polyjet: {
      badge: 'ELASTOMERIC OVERMOLDING & DIGITAL SHORE',
      machine: 'Stratasys J850 Multi-Jet Prime',
      title: 'Multi-Material PolyJet Additive',
      desc: 'Jetting microscopic photopolymer droplets simultaneously with instant UV curing. Combines rigid skeletons with variable Shore A elastomers (30A to 95A) and full-spectrum color in a single build.',
      tensile: '50 MPa (Rigid Shore D)', tensilePct: '48%',
      temp: '65°C HDT', tempPct: '30%',
      tol: '±0.04 mm', tolPct: '86%',
      wall: '0.30 mm', wallPct: '80%',
      materials: ['Agilus30 Flexible Rubber', 'VeroUltra Full Color', 'Digital ABS Plus', 'Biocompatible MED610', 'Translucent Elastomers'],
      image: 'assets/mat_tpu_wheel.jpg',
      surface: 'Ra 1.2 µm (Overmolded Texture)',
      calcMat: 'slaclear'
    }
  };

  techButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const techKey = btn.getAttribute('data-tech');
      const data = techDatabase[techKey];
      if (!data) return;

      techButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (techBadge) techBadge.textContent = data.badge;
      if (techMachine) techMachine.textContent = data.machine;
      if (techTitle) techTitle.textContent = data.title;
      if (techDescription) techDescription.textContent = data.desc;

      if (meterTensile) meterTensile.style.width = data.tensilePct;
      if (valTensile) valTensile.textContent = data.tensile;
      if (meterTemp) meterTemp.style.width = data.tempPct;
      if (valTemp) valTemp.textContent = data.temp;
      if (meterTolerance) meterTolerance.style.width = data.tolPct;
      if (valTolerance) valTolerance.textContent = data.tol;
      if (meterWall) meterWall.style.width = data.wallPct;
      if (valWall) valWall.textContent = data.wall;

      if (techMaterialChips) {
        techMaterialChips.innerHTML = data.materials.map(m => `<span class="mat-chip">${m}</span>`).join('');
      }

      if (techImage) techImage.src = data.image;
      if (techSurfaceRa) techSurfaceRa.textContent = data.surface;

      if (techConfigureBtn) {
        techConfigureBtn.onclick = () => {
          const calcSelect = document.getElementById('calcMaterialSelect');
          if (calcSelect) {
            calcSelect.value = data.calcMat;
            calcSelect.dispatchEvent(new Event('change'));
          }
          document.getElementById('production-quoter')?.scrollIntoView({ behavior: 'smooth' });
          showToast(`Configurator updated for ${data.title}`, 'info');
        };
      }
    });
  });

  const stepNodes = document.querySelectorAll('.h2-step-node');
  const stagePill = document.getElementById('stagePill');
  const stageTitle = document.getElementById('stageTitle');
  const stageDesc = document.getElementById('stageDesc');
  const stageBullets = document.getElementById('stageBullets');
  const stageDeliverable = document.getElementById('stageDeliverable');
  const stageImage = document.getElementById('stageImage');

  const pipelineStages = {
    1: {
      pill: 'PRE-MANUFACTURING VALIDATION',
      title: 'Algorithmic DFM Analysis & In-Silico Thermal FEA',
      desc: 'Every CAD file uploaded undergoes automated geometric slicing analysis. We simulate thermal shrinkage vectors, residual stress accumulation, and overhang self-support limits to optimize build orientation and prevent in-chamber recoater interference.',
      bullets: [
        'Automated wall thickness checking down to 0.25 mm',
        'Volumetric lattice density and powder drainage orifice optimization',
        'Orientation optimization for critical datum plane tolerances'
      ],
      deliv: 'Automated CAD DFM Verification Report (PDF)',
      image: 'assets/mat_vapor_smooth.jpg'
    },
    2: {
      pill: 'IN-CHAMBER METALLURGY & SENSING',
      title: 'In-Situ Melt-Pool Telemetry & Gas Chromatography',
      desc: 'During the additive cycle, high-speed coaxial cameras sample the laser melt pool at 10 kHz. Continuous inert argon recirculators maintain oxygen levels below 8 ppm to guarantee zero hydrogen embrittlement or oxide porosity.',
      bullets: [
        'Continuous melt-pool pyrometry thermal mapping',
        'High-resolution layer-by-layer optical topography scanning',
        'Hermetic chamber inert gas monitoring (O2 < 8 ppm, Dewpoint -55°C)'
      ],
      deliv: 'Chamber Atmosphere & Melt-Pool Telemetry Log',
      image: 'assets/banner_3d_printer_hero.jpg'
    },
    3: {
      pill: 'POST-PROCESSING & THERMAL ANNEALING',
      title: 'Hot Isostatic Pressing (HIP) & Metrology Finishing',
      desc: 'To achieve 99.8%+ metallurgical density and exceed wrought titanium fatigue life, builds undergo vacuum stress relief and Hot Isostatic Pressing at 1,020°C and 100 MPa, followed by automated chemical vapor smoothing.',
      bullets: [
        'Hot Isostatic Pressing (HIP) for 100% micro-pore elimination',
        'Cryogenic stress-relief thermal annealing cycles',
        'Automated vapor smoothing sealing surface micro-porosities (Ra < 0.9µm)'
      ],
      deliv: 'Certified Heat-Treatment & Hardness Test Certificate',
      image: 'assets/mat_vapor_smooth.jpg'
    },
    4: {
      pill: 'AEROSPACE METROLOGY & FIRST ARTICLE',
      title: 'Zeiss CMM Metrology & AS9102 First Article Inspection',
      desc: 'Finished components are checked against original 3D CAD nominals inside our climate-controlled metrology lab using Zeiss Contura CMM contact probes (±1.5µm accuracy) and 3D blue-light optical scanning.',
      bullets: [
        'Coordinate Measuring Machine (CMM) contact probing (±1.5 µm)',
        'Full GD&T characteristic mapping and blue-light surface deviation heatmaps',
        'AS9102 Rev B Form 1, Form 2, and Form 3 First Article sign-offs'
      ],
      deliv: 'AS9102 First Article Inspection (FAI) & Mill Test Report',
      image: 'assets/cta_helmet_dark.jpg'
    }
  };

  stepNodes.forEach(node => {
    node.addEventListener('click', () => {
      const stepNum = node.getAttribute('data-step');
      const data = pipelineStages[stepNum];
      if (!data) return;

      stepNodes.forEach(n => {
        n.classList.remove('active');
        n.setAttribute('aria-selected', 'false');
      });
      node.classList.add('active');
      node.setAttribute('aria-selected', 'true');

      if (stagePill) stagePill.textContent = data.pill;
      if (stageTitle) stageTitle.textContent = data.title;
      if (stageDesc) stageDesc.textContent = data.desc;
      if (stageDeliverable) stageDeliverable.textContent = data.deliv;
      if (stageImage) stageImage.src = data.image;

      if (stageBullets) {
        stageBullets.innerHTML = data.bullets.map(b => `
          <div class="stage-bullet">
            <i class="fa-solid fa-circle-check text-orange"></i>
            <span>${b}</span>
          </div>
        `).join('');
      }
    });
  });

  const viewSampleCertBtn = document.getElementById('viewSampleCertBtn');
  const sampleCertModal = document.getElementById('sampleCertModal');
  if (viewSampleCertBtn && sampleCertModal) {
    viewSampleCertBtn.addEventListener('click', () => {
      openModal(sampleCertModal);
    });
  }

  const matFilterBtns = document.querySelectorAll('.h2-mat-filter-btn');
  const matCards = document.querySelectorAll('.h2-mat-card');

  matFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      matFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-mat-category');
      matCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const matSelectBtns = document.querySelectorAll('.h2-mat-select-btn');
  matSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const materialCode = btn.getAttribute('data-material');
      const calcSelect = document.getElementById('calcMaterialSelect');
      if (calcSelect) {
        calcSelect.value = materialCode;
        calcSelect.dispatchEvent(new Event('change'));
      }
      document.getElementById('production-quoter')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected material configured in quoter.`, 'success');
    });
  });

  const calcPhaseGroup = document.getElementById('calcPhaseGroup');
  const calcMaterialSelect = document.getElementById('calcMaterialSelect');
  const calcQuantityRange = document.getElementById('calcQuantityRange');
  const calcQuantityDisplay = document.getElementById('calcQuantityDisplay');
  const calcInspectGroup = document.getElementById('calcInspectGroup');
  const calcFinishRadios = document.querySelectorAll('input[name="calcFinish"]');

  const calcLeadTimeVal = document.getElementById('calcLeadTimeVal');
  const calcToleranceVal = document.getElementById('calcToleranceVal');
  const calcDiscountVal = document.getElementById('calcDiscountVal');
  const calcMachineVal = document.getElementById('calcMachineVal');
  const calcDensityVal = document.getElementById('calcDensityVal');
  const calcCostRating = document.getElementById('calcCostRating');
  const calcTierBar = document.getElementById('calcTierBar');

  let currentPhase = 'prototype';
  let currentQty = 5;
  let currentInspect = 'standard';

  if (calcPhaseGroup) {
    const phaseBtns = calcPhaseGroup.querySelectorAll('.calc-pill-opt');
    phaseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        phaseBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPhase = btn.getAttribute('data-phase');
        recalculateEstimates();
      });
    });
  }

  if (calcInspectGroup) {
    const inspectBtns = calcInspectGroup.querySelectorAll('.calc-pill-opt');
    inspectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        inspectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentInspect = btn.getAttribute('data-inspect');
        recalculateEstimates();
      });
    });
  }

  if (calcQuantityRange && calcQuantityDisplay) {
    calcQuantityRange.addEventListener('input', (e) => {
      currentQty = parseInt(e.target.value, 10);
      calcQuantityDisplay.textContent = `${currentQty} ${currentQty === 1 ? 'Unit' : 'Units'}`;
      recalculateEstimates();
    });
  }

  if (calcMaterialSelect) calcMaterialSelect.addEventListener('change', recalculateEstimates);
  calcFinishRadios.forEach(radio => radio.addEventListener('change', recalculateEstimates));

  function recalculateEstimates() {
    const matOption = calcMaterialSelect ? calcMaterialSelect.options[calcMaterialSelect.selectedIndex] : null;
    const matCost = matOption ? matOption.getAttribute('data-cost') : 'med';
    const matLead = matOption ? matOption.getAttribute('data-lead') : '36h';
    const baseTol = matOption ? parseFloat(matOption.getAttribute('data-tol')) : 0.04;
    const selectedFinish = document.querySelector('input[name="calcFinish"]:checked')?.value || 'raw';

    let leadText = '24 – 48 Hours';
    if (currentQty > 500) {
      leadText = '6 – 8 Business Days';
    } else if (currentQty > 50) {
      leadText = '3 – 5 Business Days';
    } else if (selectedFinish === 'machined' || currentInspect === 'as9100') {
      leadText = '48 – 72 Hours';
    } else if (matLead === '24h' && currentQty <= 10) {
      leadText = '24 Hours Express';
    }
    if (calcLeadTimeVal) calcLeadTimeVal.textContent = leadText;

    let tolMultiplier = 1.0;
    if (currentInspect === 'iso') tolMultiplier = 0.8;
    if (currentInspect === 'as9100') tolMultiplier = 0.6;
    if (selectedFinish === 'machined') tolMultiplier = 0.4;

    const finalTol = (baseTol * tolMultiplier).toFixed(3);
    if (calcToleranceVal) calcToleranceVal.textContent = `± ${finalTol} mm`;

    let discountPct = 0;
    if (currentQty >= 500) discountPct = 48;
    else if (currentQty >= 100) discountPct = 35;
    else if (currentQty >= 25) discountPct = 20;
    else if (currentQty >= 10) discountPct = 10;
    if (calcDiscountVal) calcDiscountVal.textContent = `-${discountPct}% (Volume Tier)`;

    let machineText = 'EOS M400-4 Quad Laser';
    let densityText = '> 99.7% Rel. Density';
    const matVal = calcMaterialSelect ? calcMaterialSelect.value : 'ti64';

    if (matVal === 'pa12' || matVal === 'pa11') {
      machineText = 'EOS P 396 High-Temp SLS';
      densityText = 'Isotropic Homogeneous SLS';
    } else if (matVal.startsWith('sla')) {
      machineText = '3D Systems ProX 800 SLA';
      densityText = 'Non-Porous Optical Matrix';
    } else if (matVal === 'ultem9085' || matVal === 'peek') {
      machineText = 'Stratasys F900 Fortus';
      densityText = 'FAR 25.853 Flame Certified';
    }
    if (calcMachineVal) calcMachineVal.textContent = machineText;
    if (calcDensityVal) calcDensityVal.textContent = densityText;

    let score = 40;
    if (matCost === 'high') score += 30;
    if (matCost === 'med') score += 15;
    if (currentInspect === 'as9100') score += 20;
    if (selectedFinish === 'vapor' || selectedFinish === 'machined') score += 15;
    score = Math.min(score, 100);

    let tierLabel = 'Tier 1 // Rapid Functional';
    if (score > 75) tierLabel = 'Tier 3 // Aerospace Certified';
    else if (score > 50) tierLabel = 'Tier 2 // Production Series';

    if (calcCostRating) calcCostRating.textContent = tierLabel;
    if (calcTierBar) calcTierBar.style.width = `${score}%`;
  }

  recalculateEstimates();

  const calcExportSpecBtn = document.getElementById('calcExportSpecBtn');
  if (calcExportSpecBtn) {
    calcExportSpecBtn.addEventListener('click', () => {
      const specData = {
        platform: 'PrintNexa Industrial Additive Foundry',
        timestamp: new Date().toISOString(),
        configuration: {
          productionPhase: currentPhase,
          quantity: currentQty,
          material: calcMaterialSelect ? calcMaterialSelect.value : 'ti64',
          surfaceTreatment: document.querySelector('input[name="calcFinish"]:checked')?.value || 'raw',
          qualityStandard: currentInspect
        },
        calculatedTelemetry: {
          dispatchSLA: calcLeadTimeVal?.textContent || '48h',
          toleranceGuarantee: calcToleranceVal?.textContent || '±0.03mm',
          recommendedMachine: calcMachineVal?.textContent || 'EOS M400-4',
          densityClass: calcDensityVal?.textContent || '>99.7%'
        }
      };

      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(specData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `PrintNexa_Spec_Run_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      showToast('Engineering Spec Sheet exported (.JSON)', 'success');
    });
  }

  const calcSubmitQuoteBtn = document.getElementById('calcSubmitQuoteBtn');
  if (calcSubmitQuoteBtn) {
    calcSubmitQuoteBtn.addEventListener('click', () => {
      openModal(cadUploadModal);
    });
  }

  const consultModal = document.getElementById('consultModal');
  const loginModal = document.getElementById('loginModal');

  const heroDfmUploadBtn = document.getElementById('heroDfmUploadBtn');
  const headerCadQuoteBtn = document.getElementById('headerCadQuoteBtn');
  const ctaUploadMasterBtn = document.getElementById('ctaUploadMasterBtn');
  const ctaConsultMasterBtn = document.getElementById('ctaConsultMasterBtn');
  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const footerContactBtn = document.getElementById('footerContactBtn');

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

  if (heroDfmUploadBtn) heroDfmUploadBtn.addEventListener('click', () => openModal(cadUploadModal));
  if (headerCadQuoteBtn) headerCadQuoteBtn.addEventListener('click', () => openModal(cadUploadModal));
  if (ctaUploadMasterBtn) ctaUploadMasterBtn.addEventListener('click', () => openModal(cadUploadModal));
  if (loginHeaderBtn) loginHeaderBtn.addEventListener('click', () => { window.location.href = 'login.html'; });
  if (footerContactBtn) footerContactBtn.addEventListener('click', () => openModal(consultModal));

  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close-btn')) {
        const modal = elem.closest('.modal-backdrop') || elem;
        closeModal(modal);
      }
    });
  });

  document.getElementById('cancelCadModalBtn')?.addEventListener('click', () => closeModal(cadUploadModal));
  document.getElementById('cancelConsultModalBtn')?.addEventListener('click', () => closeModal(consultModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => closeModal(m));
    }
  });

  const modalDropzone = document.getElementById('modalDropzone');
  const modalSelectFileBtn = document.getElementById('modalSelectFileBtn');
  const modalCadFileInput = document.getElementById('modalCadFileInput');
  const scanSimBox = document.getElementById('scanSimBox');
  const scanProgressFill = document.getElementById('scanProgressFill');
  const scanStatusText = document.getElementById('scanStatusText');
  const scanStatusPct = document.getElementById('scanStatusPct');
  const scanTeleLog = document.getElementById('scanTeleLog');
  const cadQuoteForm = document.getElementById('cadQuoteForm');

  if (modalSelectFileBtn && modalCadFileInput) {
    modalSelectFileBtn.addEventListener('click', () => modalCadFileInput.click());
    modalCadFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleSimulatedScan(e.target.files[0].name);
      }
    });
  }

  if (modalDropzone) {
    modalDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      modalDropzone.classList.add('dragover');
    });
    modalDropzone.addEventListener('dragleave', () => {
      modalDropzone.classList.remove('dragover');
    });
    modalDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      modalDropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleSimulatedScan(e.dataTransfer.files[0].name);
      }
    });
  }

  function handleSimulatedScan(filename) {
    if (!scanSimBox) return;
    scanSimBox.style.display = 'block';
    if (scanProgressFill) scanProgressFill.style.width = '0%';

    const logs = [
      `> Ingesting model "${filename}"...`,
      '> Tessellating B-Rep boundary curves & manifold vertices...',
      '> Validating thin wall threshold (> 0.35 mm minimum)... PASS',
      '> Checking internal hollow powder drainage ports... PASS',
      '> Simulating thermal layer shrinkage & recoater clearance... OPTIMAL',
      '> Automated DFM Passed. Model classified for 24h dispatch.'
    ];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const pct = Math.min(step * 20, 100);
      if (scanProgressFill) scanProgressFill.style.width = `${pct}%`;
      if (scanStatusPct) scanStatusPct.textContent = `${pct}%`;

      if (logs[step - 1] && scanTeleLog) {
        const logLine = document.createElement('div');
        logLine.textContent = logs[step - 1];
        scanTeleLog.appendChild(logLine);
      }

      if (pct >= 100) {
        clearInterval(interval);
        if (scanStatusText) scanStatusText.textContent = 'DFM Verification Complete: Verified 100%';
        const projectNameInput = document.getElementById('cadProjectName');
        if (projectNameInput && !projectNameInput.value) {
          projectNameInput.value = filename.replace(/\.[^/.]+$/, '');
        }
        showToast(`CAD File "${filename}" passed DFM verification!`, 'success');
      }
    }, 450);
  }

  if (cadQuoteForm) {
    cadQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(cadUploadModal);
      showToast('CAD Project submitted! Your dedicated engineer review will arrive in < 2 hours.', 'success');
      cadQuoteForm.reset();
      if (scanSimBox) scanSimBox.style.display = 'none';
      if (scanTeleLog) scanTeleLog.innerHTML = '';
    });
  }

  const consultForm = document.getElementById('consultForm');
  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(consultModal);
      showToast('Engineering consultation confirmed. Calendar invite dispatched.', 'success');
      consultForm.reset();
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Authenticated into PrintNexa Foundry Portal.', 'success');
      loginForm.reset();
    });
  }

  setTimeout(() => {
    showToast('Welcome to PrintNexa II — Enterprise Additive Foundry', 'info');
  }, 900);

});
