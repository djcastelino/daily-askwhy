import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Why is the sky blue?",
    category: "Science",
    difficulty: "easy",
    answerSimple: "Sunlight is made of all the rainbow colors mixed together. When sunlight travels through the air, it bumps into tiny air molecules. Blue light gets scattered (bounced around) more than other colors because it travels in smaller waves. So when you look up, you see blue light coming from all directions in the sky!",
    answerIntermediate: "Sunlight appears white but contains all colors of the visible spectrum. As sunlight passes through Earth's atmosphere, it collides with gas molecules (nitrogen and oxygen). This process, called Rayleigh scattering, affects shorter wavelengths (blue and violet) more than longer wavelengths (red and orange). Blue light scatters about 10 times more than red light. We see the sky as blue (not violet) because our eyes are more sensitive to blue and because some violet light is absorbed by the upper atmosphere.",
    answerAdvanced: "Electromagnetic radiation from the Sun spans the visible spectrum (400-700nm). Upon entering Earth's atmosphere, photons interact with atmospheric molecules via Rayleigh scattering - an elastic scattering process where scattering intensity is inversely proportional to wavelength to the fourth power (I ∝ λ⁻⁴). Blue light (~450nm) scatters approximately 16 times more efficiently than red light (~650nm) due to this wavelength dependence. While violet (~400nm) scatters even more, human eye sensitivity peaks at 555nm (green-yellow) with reduced sensitivity to violet, and atmospheric ozone absorption diminishes short-wavelength transmission. The combined effect produces the characteristic blue appearance of the daytime sky.",
    funFact: "On Mars, the sky appears reddish-orange during the day and blue during sunset - the exact opposite of Earth! This happens because Mars' thin atmosphere contains fine dust particles that scatter red light during the day.",
    funFactSource: "NASA Mars Exploration",
    funFactSourceUrl: "https://mars.nasa.gov/"
  },
  {
    id: 2,
    question: "Why do we yawn?",
    category: "Human Body",
    difficulty: "easy",
    answerSimple: "Scientists think we yawn to wake up our brain and body! When you're tired or bored, your brain needs more oxygen and cooling. Yawning makes you take a big, deep breath and stretches your jaw, which sends blood to your brain and helps you feel more alert. It's like a natural 'wake up' button!",
    answerIntermediate: "Yawning serves multiple purposes: it increases oxygen intake, removes carbon dioxide, cools the brain through increased blood flow, and stretches facial muscles and lungs. Yawning is contagious because of mirror neurons in our brain - when we see someone yawn, the same brain regions activate, triggering our own yawn. This may have evolved as a social behavior to help groups stay alert together. You yawn more when tired, bored, or when your brain temperature rises.",
    answerAdvanced: "Yawning (oscitation) is a stereotyped motor pattern characterized by deep inspiration, jaw stretching, and brief apnea. Current neuroscientific theories propose thermoregulatory function: yawning increases cerebral blood flow and promotes heat exchange via countercurrent cooling in cavernous sinus, reducing brain temperature by ~0.2°C. Functional MRI studies reveal activation of posterior cingulate cortex, precuneus, and ventromedial prefrontal cortex. Contagious yawning correlates with Theory of Mind capabilities and mirror neuron system activity, particularly in superior temporal sulcus. Triggers include: elevated brain temperature, hypercapnia, sleep state transitions, and social cues. Frequency increases during circadian alertness troughs.",
    funFact: "Yawning is so contagious that even reading about yawning or seeing the word 'yawn' can make you yawn! Studies show that about 55% of people will yawn within 5 minutes of seeing someone else yawn.",
    funFactSource: "Current Biology Journal",
    funFactSourceUrl: "https://www.cell.com/current-biology/"
  },
  {
    id: 3,
    question: "Why do cats purr?",
    category: "Animals",
    difficulty: "easy",
    answerSimple: "Cats purr when they're happy and comfortable, like when you pet them or they're about to eat! But cats also purr when they're scared, hurt, or giving birth. Scientists think purring helps cats feel better and heal faster - the vibrations might actually help their bones and muscles heal! It's like their own built-in healing machine.",
    answerIntermediate: "Cats purr by vibrating their larynx (voice box) muscles at 25-150 times per second. They purr when content, but also when stressed, injured, or in labor - suggesting purring has a self-soothing and healing function. Research shows that purring frequencies (25-150 Hz) promote bone density, heal fractures faster, and reduce pain and swelling. Mother cats purr to guide blind and deaf kittens to them, and sick cats may purr to help themselves recover from injuries.",
    answerAdvanced: "Purring results from rapid oscillation of intrinsic laryngeal muscles (20-30 Hz) modulating airflow through the glottis during both inspiration and expiration. Acoustic frequencies (25-150 Hz) overlap with therapeutic low-frequency vibration ranges demonstrating osteogenic effects: enhanced osteoblast proliferation, increased bone mineral density (+2-3%), accelerated fracture healing (+20-30%), reduced edema, and analgesic properties via mechanotransduction pathways. Purring serves multiple functions: (1) Self-healing during injury/illness; (2) Mother-kitten bonding (kittens purr from 2 days old); (3) Social communication; (4) Stress reduction via endorphin release. Frequency spectrum correlates with specific therapeutic outcomes, supporting 'purr as medicine' hypothesis.",
    funFact: "Scientists have discovered that astronauts could benefit from 'purr therapy!' The vibration frequencies in cat purrs match the mechanical vibrations used to prevent bone density loss in astronauts during long space missions.",
    funFactSource: "Journal of Feline Medicine and Surgery",
    funFactSourceUrl: "https://journals.sagepub.com/home/jfm"
  },
  {
    id: 4,
    question: "Why do onions make you cry?",
    category: "Science",
    difficulty: "easy",
    answerSimple: "Onions make a special gas when you cut them. This gas floats up to your eyes and irritates them (makes them sting). Your eyes make tears to wash away the irritation and protect themselves! It's your body's way of saying 'Help! Get this gas away from my eyes!' Even though it's annoying, it's actually your eyes protecting you.",
    answerIntermediate: "When you cut an onion, you break its cells and release enzymes. These enzymes mix with sulfur compounds in the onion and create a gas called syn-propanethial-S-oxide. This gas floats up to your eyes and dissolves in the water on your eye surface, forming sulfuric acid - which irritates your eyes! Your eyes respond by producing tears to flush out the irritation. Cooling onions before cutting, using a sharp knife, or cutting under running water can reduce crying.",
    answerAdvanced: "Onion cells contain amino acid sulfoxides (primarily S-alk(en)yl-L-cysteine sulfoxides). Upon cellular disruption via cutting, alliinase enzyme (previously compartmentalized in vacuoles) catalyzes sulfoxide conversion to sulfenic acids. These undergo spontaneous rearrangement forming syn-propanethial-S-oxide (C₃H₆OS) - a volatile lachrymatory factor. LF diffuses to eyes, dissolves in tear film, and is enzymatically converted to sulfuric acid (H₂SO₄) via lachrymatory factor synthase. Acid formation activates corneal nociceptors (TRPA1 ion channels), triggering trigeminal nerve signals to lacrimal glands, inducing reflex lacrimation (tear production ≥1 mL/min) to dilute/flush irritant. Cold temperature (<4°C) reduces enzyme activity; sharp blades minimize cell rupture.",
    funFact: "Scientists have genetically engineered 'tearless onions' by modifying the enzyme that produces the crying gas! These onions still taste the same but don't make you cry when cutting them.",
    funFactSource: "Plant Physiology Journal",
    funFactSourceUrl: "https://academic.oup.com/plphys"
  },
  {
    id: 5,
    question: "Why do stars twinkle?",
    category: "Space",
    difficulty: "easy",
    answerSimple: "Stars don't actually twinkle - they shine with steady light! The twinkling you see happens because starlight has to travel through Earth's atmosphere (the air around our planet). The air is always moving and changing temperature, which makes the starlight bend and wiggle as it comes to your eyes. That's why stars appear to twinkle! Astronauts in space see stars as steady points of light.",
    answerIntermediate: "Stars emit constant light, but Earth's atmosphere causes the twinkling effect (called stellar scintillation). Our atmosphere consists of layers of air at different temperatures and densities, constantly moving due to wind and thermal currents. As starlight passes through these turbulent air layers, it bends and refracts in constantly changing directions. This makes the star's position and brightness appear to flicker rapidly. The effect is stronger near the horizon (more atmosphere to travel through) and on windy nights. Planets don't twinkle as much because they appear as small disks, not points.",
    answerAdvanced: "Stellar scintillation results from atmospheric turbulence-induced refractive index fluctuations. Starlight (effectively plane waves from astronomical distances) traverses atmospheric cells of varying density (ρ) and temperature (T), experiencing varying refractive index n = 1 + (ρ/ρ₀ - 1) × 2.9×10⁻⁴. Kolmogorov turbulence theory describes atmospheric cells ranging 1mm-10m creating phase front distortions. Scintillation index S = σᵢ²/⟨I⟩² quantifies intensity fluctuations. Effects scale with: (1) Zenith angle (sec z increases atmospheric path); (2) Wavelength λ (blue light scintillates more, λ⁻⁷/⁶ dependence); (3) Aperture diameter D (larger telescopes average over turbulent cells, reducing scintillation). Planets subtend finite angular diameter, providing spatial averaging that reduces scintillation. Adaptive optics systems compensate atmospheric distortion via deformable mirrors (∼1kHz correction rates).",
    funFact: "The Hubble Space Telescope doesn't see twinkling stars because it orbits above Earth's atmosphere! This is one reason space telescopes can take such clear pictures - they avoid all atmospheric distortion.",
    funFactSource: "NASA Astrophysics",
    funFactSourceUrl: "https://science.nasa.gov/"
  },

  {
    id: 6,
    question: "Why is the ocean salty?",
    category: "Earth",
    difficulty: "easy",
    answerSimple: "Rain falls on rocks and soil, and as it flows to the ocean, it picks up tiny bits of salt and minerals. Rivers carry this salt to the ocean. When ocean water evaporates (turns into vapor and goes up into the sky), only pure water leaves - the salt stays behind! Over millions of years, more and more salt has collected in the ocean, making it salty!",
    answerIntermediate: "Ocean salinity comes from two main sources: (1) Weathering of rocks on land - rainwater (slightly acidic from dissolved CO₂) dissolves minerals from rocks, and rivers carry these dissolved salts (mainly sodium and chloride) to the ocean; (2) Hydrothermal vents on the ocean floor release dissolved minerals from Earth's crust. The ocean maintains constant salinity (~3.5% or 35 ppt) because water evaporates but salt doesn't - it stays in the ocean. Over billions of years, salt has accumulated while the water cycle continues.",
    answerAdvanced: "Ocean salinity (~35 g/kg, dominated by Na⁺ and Cl⁻ ions) results from equilibrium between inputs and outputs. Inputs: (1) Riverine flux (~4×10¹⁴ g/yr) from continental weathering - carbonic acid (H₂CO₃ from atmospheric CO₂) dissolves silicate/carbonate minerals releasing cations; (2) Submarine hydrothermal circulation (~2×10¹⁴ g/yr) - seawater percolates through mid-ocean ridge basalt, leaching Mg²⁺, SO₄²⁻, and metals. Outputs: (1) Marine sediment burial; (2) Evaporite formation; (3) Ion exchange in clay minerals; (4) Biological uptake. Residence times vary by ion: Na⁺ ~68 Myr, Cl⁻ ~100 Myr. Salinity reached steady-state ~500 Mya. Evaporation increases surface salinity (Red Sea ~40 ppt), while freshwater input decreases it (Baltic Sea ~8 ppt).",
    funFact: "If you evaporated all the water from all the oceans, the leftover salt would cover all the continents in a layer 500 feet (150 meters) thick - taller than a 40-story building!",
    funFactSource: "NOAA Ocean Facts",
    funFactSourceUrl: "https://oceanservice.noaa.gov/"
  },

  {
    id: 7,
    question: "Why do we have fingerprints?",
    category: "Human Body",
    difficulty: "medium",
    answerSimple: "Fingerprints help you grip things better! The tiny ridges on your fingers create friction (like tire treads on a car), making it easier to hold onto objects without dropping them. They also help you feel textures better. Everyone's fingerprints are unique - even identical twins have different fingerprints!",
    answerIntermediate: "Fingerprints serve three main purposes: (1) Enhanced grip - the ridges increase friction and channel away moisture like tire treads; (2) Improved tactile sensitivity - the ridges amplify vibrations as you touch surfaces, helping you feel fine textures; (3) Sweat pore arrangement for thermoregulation. Fingerprints form in the womb between 10-24 weeks, influenced by random factors like finger position, amniotic fluid flow, and umbilical cord pressure. This randomness ensures everyone has unique fingerprints.",
    answerAdvanced: "Dermal ridges (fingerprints) form via Turing pattern mechanism during fetal development (10-24 weeks gestation). Morphogenesis involves: (1) Reaction-diffusion of signaling molecules (BMP, Wnt) creating periodic ridge patterns; (2) Biomechanical stress from differential growth rates between epidermis and dermis; (3) Stochastic microenvironment factors (amniotic fluid dynamics, vascular patterns). Functional advantages: (1) Tribological enhancement - ridges increase friction coefficient μ by ~30-50% via asperity contact and moisture drainage channels; (2) Mechanotransduction amplification - ridges create standing waves (∼200 Hz) in skin when sliding over textured surfaces, amplifying Pacinian corpuscle and Meissner's corpuscle responses; (3) Eccrine sweat gland distribution (∼370 pores/cm²) aids thermoregulation and grip. Ridge patterns (arch, loop, whorl) determined by random embryonic factors, ensuring uniqueness (probability <1 in 64 billion for identical patterns).",
    funFact: "Koalas are one of the few animals besides primates to have fingerprints! Their fingerprints are so similar to human fingerprints that they could potentially contaminate a crime scene.",
    funFactSource: "Journal of Forensic Sciences",
    funFactSourceUrl: "https://onlinelibrary.wiley.com/journal/15564029"
  },

  {
    id: 8,
    question: "Why do we dream?",
    category: "Human Body",
    difficulty: "medium",
    answerSimple: "Scientists aren't completely sure why we dream, but they think dreams help our brain organize memories and practice dealing with scary or new situations in a safe way. While you sleep, your brain is busy sorting through what happened during the day, deciding what to remember and what to forget. Dreams might be like your brain's way of 'filing' information!",
    answerIntermediate: "Dreams occur primarily during REM (Rapid Eye Movement) sleep. Leading theories suggest dreams serve multiple functions: (1) Memory consolidation - transferring important information from short-term to long-term memory; (2) Emotional processing - helping you work through feelings and experiences; (3) Threat simulation - practicing responses to dangers in a safe environment; (4) Creative problem-solving - making new connections between ideas. The average person has 4-6 dreams per night but forgets most of them within minutes of waking.",
    answerAdvanced: "Dreaming predominantly occurs during REM sleep (20-25% of sleep cycle, 90-minute periodicity). Neuroscientific theories include: (1) Activation-Synthesis Model - pontine acetylcholine activation creates random neural firing; cortex synthesizes narrative from signals; (2) Memory Consolidation Hypothesis - hippocampal replay during REM transfers declarative memories to neocortex; synaptic downscaling (synaptic homeostasis) optimizes neural networks; (3) Threat Simulation Theory - amygdala activation rehearses threat-response scenarios, conferring evolutionary advantage; (4) Cognitive-Emotional Processing - REM sleep depotentiates emotional memory valence while preserving factual content. Neuroimaging reveals: visual cortex activation (imagery), dorsolateral prefrontal cortex deactivation (reduced logical reasoning), limbic system hyperactivity (emotional intensity). Neurotransmitter changes: acetylcholine ↑, serotonin/norepinephrine ↓.",
    funFact: "You can't read text in dreams! The language centers of your brain are less active during REM sleep, so if you try to read in a dream, the text usually appears blurry or changes when you look away and back again.",
    funFactSource: "Nature Neuroscience",
    funFactSourceUrl: "https://www.nature.com/neuro/"
  },

  {
    id: 9,
    question: "Why does ice float?",
    category: "Physics",
    difficulty: "medium",
    answerSimple: "Ice floats because it's lighter (less dense) than liquid water! When water freezes into ice, the water molecules arrange themselves into a special crystal pattern that has lots of empty space. This makes ice take up more room than the same amount of liquid water, so ice is 'fluffier' and floats. This is unusual - most frozen things sink in their liquid form!",
    answerIntermediate: "Water is one of the few substances that expands when it freezes (most materials contract and become denser when solid). In liquid water, molecules move freely. When water freezes, molecules form a hexagonal crystal lattice held together by hydrogen bonds. This structure has more empty space than liquid water, making ice about 9% less dense than water. This property is crucial for aquatic life - ice forms on top of lakes, insulating the liquid water below and allowing fish to survive winter.",
    answerAdvanced: "Ice floats due to anomalous density behavior of H₂O. Liquid water (density ρ = 1.00 g/cm³ at 4°C) exhibits maximum density at 4°C, decreasing upon cooling to 0°C. Upon freezing, water forms hexagonal ice Ih crystal structure (P6₃/mmc space group) where each oxygen coordinates tetrahedrally with four neighbors via hydrogen bonds (O-H···O angles ~109.5°). Crystal lattice exhibits c/a ratio ~1.628, creating open cage-like structure with significant void volume. Ice Ih density: ρ = 0.917 g/cm³ (∼8.3% less dense). Molecular basis: hydrogen bonding (bond energy ∼20 kJ/mol) enforces geometric constraints preventing close packing. Anomalous expansion upon freezing crucial for: (1) Cryosphere thermal insulation - ice layers prevent complete freezing of water bodies; (2) Frost wedging - 9% volume expansion generates pressures >200 MPa, fracturing rocks; (3) Biological antifreeze - organisms produce antifreeze proteins to inhibit ice nucleation.",
    funFact: "If ice didn't float, Earth would be completely frozen! Ice would sink to the bottom of oceans and lakes, more ice would form on top and sink, and eventually entire water bodies would freeze solid from the bottom up, making life impossible.",
    funFactSource: "Physical Chemistry Textbooks",
    funFactSourceUrl: "https://www.acs.org/"
  },

  {
    id: 10,
    question: "Why do leaves change color in fall?",
    category: "Nature",
    difficulty: "easy",
    answerSimple: "Leaves are green because of chlorophyll - the part that helps plants make food from sunlight. In fall, days get shorter and colder, so trees stop making food and break down the chlorophyll. When the green chlorophyll goes away, you can see other colors (yellow, orange, red) that were hidden underneath all along! Then the tree drops its leaves to save energy for winter.",
    answerIntermediate: "Leaves contain different pigments: chlorophyll (green), carotenoids (yellow/orange), and anthocyanins (red/purple). During spring and summer, chlorophyll is abundant and masks other colors. In fall, decreasing daylight and cooler temperatures trigger trees to stop producing chlorophyll and begin forming an abscission layer (seal) where the leaf attaches. As chlorophyll breaks down, carotenoids (present year-round) become visible. Some trees also produce anthocyanins in fall as a response to bright light and sugar accumulation. Eventually, the abscission layer completes and the leaf falls.",
    answerAdvanced: "Leaf senescence is triggered by photoperiod reduction and temperature decrease, initiating phytochrome-mediated signaling cascades. Process: (1) Chlorophyll degradation - chlorophyll a/b (absorption peaks 430nm, 662nm) catabolizes via Mg²⁺ chelation removal, pheophytin formation, and chlorophyllase-mediated hydrolysis to colorless catabolites; (2) Carotenoid revelation - β-carotene, lutein, xanthophylls (absorption 400-500nm) persist, previously masked by chlorophyll's high concentration; (3) Anthocyanin synthesis - PAL (phenylalanine ammonia-lyase) pathway upregulates, producing cyanidin/delphinidin glycosides (absorption 520-560nm) in vacuoles - synthesis correlates with high light + accumulated sugars; (4) Abscission zone formation - ethylene signaling activates cellulase/pectinase at petiole, degrading middle lamella. Color intensity depends on species, weather (bright days + cool nights maximize anthocyanins), soil nutrients (low nitrogen → more red).",
    funFact: "The brightest fall colors happen when days are sunny and nights are cool but not freezing! This combination produces lots of sugar in leaves (from photosynthesis) while slowing its transport out, triggering maximum red anthocyanin production.",
    funFactSource: "US Forest Service",
    funFactSourceUrl: "https://www.fs.usda.gov/"
  },

  {
    id: 11,
    question: "Why do we get hiccups?",
    category: "Human Body",
    difficulty: "easy",
    answerSimple: "Hiccups happen when your diaphragm (the big muscle under your lungs that helps you breathe) gets irritated and suddenly tightens. This makes you suck in air quickly, and your vocal cords snap shut, making the 'hic' sound! Common triggers include eating too fast, drinking carbonated beverages, or sudden excitement. Most hiccups go away on their own after a few minutes.",
    answerIntermediate: "Hiccups (singultus) occur when the phrenic nerve stimulates the diaphragm to contract involuntarily. This sudden contraction makes you inhale rapidly, but your glottis (voice box opening) closes immediately, creating the 'hic' sound. Triggers include: overeating, carbonated drinks, sudden temperature changes, excitement, and irritation of nerves connected to the diaphragm. The hiccup reflex may be an evolutionary remnant from our amphibian ancestors who needed to prevent water from entering lungs while using gills. Most cases resolve within minutes, but persistent hiccups (>48 hours) can indicate medical issues.",
    answerAdvanced: "Hiccups result from involuntary myoclonic contraction of diaphragm and intercostal muscles, followed by glottic closure (~35ms after diaphragm contraction). Reflex arc involves: (1) Afferent limb - vagus nerve, phrenic nerve, and T6-T12 sympathetic fibers carry sensory input from GI tract, diaphragm, and pericardium; (2) Central processing - 'hiccup center' (hypothesized reticular formation location) coordinates reflex; involves respiratory pattern generator, phrenic nerve nuclei (C3-C5), and medullary chemoreceptors; (3) Efferent limb - phrenic nerve (predominantly left) → diaphragm contraction; recurrent laryngeal nerve → glottic closure. Triggers: gastric distension, rapid temperature change (ΔT >5°C), hypercarbia, emotional stress. Evolutionary hypothesis: phylogenetic remnant of primitive air-breathing reflex (analogous to tadpole respiration coordinating lung/gill ventilation). Persistent hiccups (>48hr) suggest CNS lesions, metabolic disturbances, or vagal irritation requiring clinical evaluation.",
    funFact: "The longest case of hiccups on record lasted 68 years! Charles Osborne of Iowa started hiccupping in 1922 and didn't stop until 1990 - hiccupping an estimated 430 million times during his lifetime!",
    funFactSource: "Mayo Clinic",
    funFactSourceUrl: "https://www.mayoclinic.org/"
  },

  {
    id: 12,
    question: "Why is space dark if the sun is so bright?",
    category: "Space",
    difficulty: "medium",
    answerSimple: "Space is dark because there's no air! On Earth, sunlight bounces off air molecules and scatters in all directions, making the whole sky bright. In space, there's nothing for the light to bounce off of, so the light travels in straight lines. If you're not looking directly at the sun or a star, you see darkness because there's nothing to scatter the light toward your eyes!",
    answerIntermediate: "Earth's atmosphere scatters sunlight (Rayleigh scattering), making our sky bright blue. Space is a near-perfect vacuum with almost no particles to scatter light. Sunlight in space travels in straight lines without scattering - you only see light when it directly enters your eye from a light source (sun, stars) or reflects off an object (moon, spacecraft, Earth). This is why astronauts see a black sky even when the sun is visible and extremely bright. The lack of atmospheric scattering also means stars don't twinkle and the sun appears as a bright disk against total darkness.",
    answerAdvanced: "Atmospheric scattering (Rayleigh regime for molecular-scale particles) makes Earth's sky luminous: scattering cross-section σ ∝ λ⁻⁴ creates diffuse blue skylight. Space contains ~5 atoms/cm³ (compared to ~10¹⁹/cm³ at sea level), orders of magnitude below scattering threshold. Optical depth τ = nσL for interplanetary space: τ ≈ 10⁻²⁰ over 1 AU, essentially zero. Solar photons propagate ballistically without interaction. Sky brightness from scattered sunlight: I_scattered ∝ (n_particles × σ × I_solar). In vacuum (n → 0), I_scattered → 0. Observer perceives blackness except for direct photons entering pupil from point sources (stars, Sun) or diffuse reflection from extended objects (planets, nebulae). This explains Olbers' Paradox resolution: finite age universe + redshift + dust absorption prevent distant starlight from creating uniformly bright sky. Astronauts report Sun's corona visible due to absence of atmospheric glare.",
    funFact: "In space, you can see stars even when the sun is out! Astronauts can see both the brilliant sun and stars simultaneously because there's no atmospheric scattering to wash out the starlight during the 'day'.",
    funFactSource: "NASA Space Physics",
    funFactSourceUrl: "https://www.nasa.gov/"
  },

  {
    id: 13,
    question: "Why do mosquitoes bite some people more than others?",
    category: "Animals",
    difficulty: "medium",
    answerSimple: "Mosquitoes are attracted to certain smells and chemicals your body makes! They especially like people who breathe out more carbon dioxide (CO₂), have warm skin, wear dark colors, or have certain bacteria on their skin. About 20% of people are 'mosquito magnets' because of their unique body chemistry. Your blood type, what you eat, and even your genes can make you more attractive to mosquitoes!",
    answerIntermediate: "Mosquitoes locate hosts using multiple sensory cues: (1) CO₂ from breath - detected from 30+ meters away; (2) Body heat and moisture; (3) Lactic acid and ammonia in sweat; (4) Specific skin bacteria metabolites; (5) Blood type - Type O attracts more mosquitoes than A or B; (6) Pregnancy - pregnant women exhale ~21% more CO₂ and have higher body temperature; (7) Genetics - about 85% of mosquito attraction is determined by your genes. Beer consumption, dark clothing, and exercise all increase attraction.",
    answerAdvanced: "Mosquito host-seeking behavior integrates multiple chemosensory and thermal cues: (1) Long-range (10-50m) - CO₂ plumes detected via maxillary palp capitate peg sensilla expressing Gr1, Gr2, Gr3 receptors; flight activated by [CO₂] >600ppm above background; (2) Mid-range (5-15m) - human volatiles (L-lactic acid, ammonia, carboxylic acids) detected via odorant receptor neurons on antennae; (3) Short-range (<5m) - thermal/visual cues (infrared detection via antenna, visual contrast detection); (4) Landing - skin microbiome metabolites (fatty acids, aldehydes). Individual variation driven by: ABO blood type antigens (Type O secretors show 83% increased attraction vs Type A), genetic polymorphisms affecting metabolite production (85% heritability), skin microbiota composition (Staphylococcus vs Brevibacterium ratios), pregnancy-related metabolic changes (CO₂ +21%, body temperature +0.7°C), alcohol consumption (ethanol metabolism → skin emissions). Dark clothing increases visual contrast attracting diurnal species.",
    funFact: "Only female mosquitoes bite! Males feed exclusively on flower nectar. Females need the protein from blood to develop their eggs - one blood meal can produce 100-200 eggs!",
    funFactSource: "Journal of Medical Entomology",
    funFactSourceUrl: "https://academic.oup.com/jme"
  },

  {
    id: 14,
    question: "Why does metal feel colder than wood even at the same temperature?",
    category: "Physics",
    difficulty: "medium",
    answerSimple: "Metal feels colder because it's really good at pulling heat away from your hand! When you touch metal, it quickly sucks the heat from your skin, making you feel cold. Wood is a poor conductor of heat - it doesn't pull heat from your hand as fast, so it feels warmer. Both objects are the same temperature, but metal transfers heat away from your hand much faster!",
    answerIntermediate: "This phenomenon involves thermal conductivity - how quickly materials transfer heat. Metal has high thermal conductivity (~200-400 W/m·K for aluminum), while wood has low conductivity (~0.1-0.2 W/m·K). When you touch an object, heat flows from your warm hand (37°C) to the cooler object. Metal conducts this heat away from the contact point very quickly, continuously drawing heat from your skin. Wood conducts heat slowly, so the surface you touch warms up quickly and heat transfer slows down. Your nerves detect the rate of heat loss, not actual temperature - rapid heat loss feels 'cold'.",
    answerAdvanced: "Thermal perception depends on heat flux (q) at skin-object interface, governed by Fourier's law: q = -k∇T, where k is thermal conductivity. For transient contact with semi-infinite solid, surface heat flux: q(t) = (k·ρ·c_p)^(1/2) × (T_skin - T_object) / √(πt), where ρ = density, c_p = specific heat. The term √(k·ρ·c_p) is thermal effusivity b. Materials: Aluminum b ≈ 24,000 W·s^(1/2)/m²·K; Wood b ≈ 400. For ΔT = 10K, aluminum extracts ~60× more heat per unit area in first second of contact. Thermoreceptors (TRPM8 cold receptors, TRPV3/V4 warm receptors) respond to temperature rate of change (dT/dt) rather than absolute temperature. Rapid heat extraction from skin (high q) activates cold receptors intensely despite identical ambient object temperature. Effect demonstrates: thermal effusivity, not temperature, determines immediate tactile thermal sensation. Diamond (b ≈ 40,000) feels coldest of common materials.",
    funFact: "Diamond feels even colder than metal when you touch it! Diamond has the highest thermal conductivity of any natural material - about 5 times higher than copper - making it feel ice-cold even at room temperature.",
    funFactSource: "Physics Education Journal",
    funFactSourceUrl: "https://iopscience.iop.org/journal/0031-9120"
  },

  {
    id: 15,
    question: "Why do we see lightning before we hear thunder?",
    category: "Physics",
    difficulty: "easy",
    answerSimple: "Light travels MUCH faster than sound! Lightning and thunder happen at the exact same time - lightning is the light you see, and thunder is the sound it makes. But light travels at 186,000 miles per second while sound only travels at about 0.2 miles per second. So you see the flash almost instantly, but the sound takes longer to reach you. You can count the seconds between lightning and thunder to figure out how far away the storm is!",
    answerIntermediate: "Lightning and thunder are simultaneous events - lightning is electrical discharge creating visible light, and thunder is the shock wave (sound) from rapidly heated air. Light travels at 299,792,458 m/s (essentially instantaneous for storm distances), while sound travels at ~343 m/s in air (about 1 km every 3 seconds). The delay between seeing lightning and hearing thunder reveals the storm's distance: every 5 seconds of delay equals about 1 mile. Lightning heats the air channel to ~30,000K (~5× sun's surface temperature), causing explosive expansion that creates the thunder sound wave.",
    answerAdvanced: "Lightning discharge involves: (1) Stepped leader propagation (ionized channel ~1-5 cm diameter) from cloud to ground at ~1×10⁵ m/s; (2) Return stroke - ground-to-cloud current flow (~30 kA peak, duration ~100 μs) heating plasma channel to ~30,000K; (3) Rapid thermal expansion - air heated from 300K to 30,000K in <10 μs creates supersonic shock wave (initially Mach >5) degenerating to acoustic wave (thunder). Light propagation: electromagnetic radiation at c = 2.998×10⁸ m/s reaches observer in τ_light = d/c ≈ 3.3 μs/km. Sound propagation: pressure wave at v_sound ≈ 331 + 0.6T m/s (T in °C) reaches observer in τ_sound = d/v ≈ 2.9 s/km at 20°C. Time delay Δt = d(1/v_sound - 1/c) ≈ d/v_sound. Distance estimation: d(km) ≈ Δt(s)/3 or d(mi) ≈ Δt(s)/5. Thunder duration indicates lightning channel length (∼5-10 km for typical cloud-to-ground strike); rumbling results from arrival time differences from various channel segments.",
    funFact: "You can estimate how far away lightning is by counting the seconds between the flash and thunder, then dividing by 5 (for miles) or 3 (for kilometers). If the count is less than 5 seconds, you're in the danger zone and should seek shelter immediately!",
    funFactSource: "National Weather Service",
    funFactSourceUrl: "https://www.weather.gov/"
  },

  {
    id: 16,
    question: "Why do we have eyebrows?",
    category: "Human Body",
    difficulty: "easy",
    answerSimple: "Eyebrows have an important job - they keep sweat, rain, and dirt out of your eyes! The arch shape of your eyebrows acts like a little roof that directs water to the sides of your face instead of into your eyes. Eyebrows also help you show emotions and recognize people's faces. When you're surprised, angry, or confused, your eyebrows move in different ways!",
    answerIntermediate: "Eyebrows serve three main functions: (1) Physical protection - the arch shape channels sweat, rain, and debris away from eyes; eyebrow hairs trap particles; (2) Nonverbal communication - eyebrows are crucial for expressing emotions (surprise, anger, confusion, skepticism); studies show faces without eyebrows are 46% harder to recognize; (3) Facial recognition - eyebrow shape and position are key identifying features. The unique shape (thick medially, arched, tapered laterally) and position are optimized for fluid redirection while maximizing expressiveness.",
    answerAdvanced: "Eyebrows are supraorbital ridges with specialized follicles (anagen phase ~4 months, shorter than scalp ~6 years, limiting length to ~1 cm). Functions: (1) Hydraulic channeling - arched morphology (maximum height at lateral third, slopes ~15-25° medially and laterally) exploits gravitational and surface tension forces to redirect descending fluids laterally; hair density (~250-500 follicles/eyebrow) provides capillary barrier to droplet penetration; (2) Thermoregulatory - eccrine sweat diversion prevents ocular stinging from hypotonic sweat (salt concentration); (3) Social signaling - controlled by frontalis, corrugator supercilii, and orbicularis oculi muscles enabling complex expression patterns; neural recognition studies show eyebrow configuration activates fusiform face area preferentially; removal reduces face recognition accuracy by 46% (vs 43% for eye removal); (4) Evolutionary sexual selection - eyebrow dimorphism (males: lower, straighter, thicker; females: higher arch, thinner) signals sex and reproductive status. Biomechanical modeling confirms optimal arch geometry minimizes ocular exposure to environmental fluids.",
    funFact: "Your eyebrows are more important for recognizing faces than your eyes! Studies where people's eyebrows or eyes were removed from photos showed that missing eyebrows made it harder to identify someone than missing eyes!",
    funFactSource: "Perception Journal",
    funFactSourceUrl: "https://journals.sagepub.com/home/pec"
  },

  {
    id: 17,
    question: "Why do airplanes leave white trails in the sky?",
    category: "Science",
    difficulty: "medium",
    answerSimple: "Those white trails are called contrails (short for condensation trails), and they're basically artificial clouds! Airplane engines burn fuel and create hot, moist exhaust. When this hot exhaust hits the freezing cold air high in the sky (around -40°F), the water vapor instantly freezes into tiny ice crystals, creating a white cloud trail. It's the same as seeing your breath on a cold day, but much bigger!",
    answerIntermediate: "Contrails form when aircraft exhaust mixes with cold, humid air at high altitude (typically above 26,000 feet where temperature <-40°C). Jet engines burn kerosene, producing CO₂ and H₂O vapor. The hot exhaust (~500-600°C) rapidly cools in ambient air. If atmospheric conditions are right (cold + high relative humidity with respect to ice), water vapor condenses and immediately freezes into ice crystals, forming visible contrails. Contrails can persist for hours if humidity is high, spreading into cirrus-like clouds. They may dissipate quickly in dry air. Contrails can affect climate by trapping Earth's heat (like greenhouse gases).",
    answerAdvanced: "Contrail formation requires: (1) Temperature T < -40°C (Schmidt-Appleman criterion); (2) High relative humidity with respect to ice (RH_ice >100%); (3) Sufficient condensation nuclei. Jet combustion: CₙH₂ₙ + O₂ → CO₂ + H₂O produces ~1.2-1.4 kg H₂O per kg fuel. Hot exhaust plume (T ~600K, pressure ~0.2 atm at 10 km) mixes with ambient air (T ~220K) creating supersaturated conditions. Homogeneous nucleation occurs when critical supersaturation S_crit ≈ 150-160% reached; heterogeneous nucleation on soot particles (diameter ~20-50 nm, concentration ~10⁵-10⁶/cm³) occurs at lower S. Ice crystals grow via vapor deposition (Wegener-Bergeron-Findeisen process); initial radius ~1 μm growing to ~100 μm. Persistence depends on atmospheric ice supersaturation. Contrails contain ~10⁷ crystals/m³. Radiative forcing: contrails trap outgoing longwave radiation (+0.01 W/m² globally); aviation-induced cirrus may contribute +0.03-0.05 W/m² to anthropogenic forcing. Optical depth τ ~0.1-0.3 makes contrails visible; dissipation occurs via sublimation when RH_ice <100%.",
    funFact: "Scientists estimate that contrails and aviation-induced clouds may have a greater climate warming effect than all the CO₂ emitted by airplanes since the beginning of aviation! The ice crystals trap Earth's heat like a blanket.",
    funFactSource: "Nature Climate Change",
    funFactSourceUrl: "https://www.nature.com/nclimate/"
  },

  {
    id: 18,
    question: "Why do our stomachs growl when we're hungry?",
    category: "Human Body",
    difficulty: "easy",
    answerSimple: "Your stomach growls because it's squeezing and moving around, even when there's no food in it! Your digestive system is always working, pushing food through with wave-like motions. When your stomach is empty, these squeezes push air and fluids around instead of food, creating the rumbling sounds you hear. Your brain also signals your stomach to prepare for food when you're hungry, making it more active!",
    answerIntermediate: "Stomach growling (borborygmi) results from peristalsis - wave-like muscle contractions that move contents through your digestive tract. This happens constantly, whether you've eaten or not. When your stomach is full, food muffles the sound. When empty, contractions squeeze air and digestive fluids through your stomach and intestines, creating audible rumbling. The migrating motor complex (MMC) - a pattern of electrical activity - increases about 2 hours after eating and every 90-120 minutes after, 'cleaning' your digestive tract. Hunger hormones (ghrelin) intensify these contractions.",
    answerAdvanced: "Borborygmi arise from peristaltic contractions generating acoustic emissions when propelling gas and fluid through hollow viscera. Mechanism: (1) Interstitial cells of Cajal generate slow-wave electrical activity (3 cycles/min in stomach, 12/min in small intestine) coordinating smooth muscle contraction; (2) Migrating motor complex (MMC) - cyclical pattern during fasting state (phases I-IV, ~90-120 min period) - phase III involves intense contractions ('intestinal housekeeper') clearing residual material; (3) Ghrelin secretion from gastric fundus (increases pre-prandially, t₁/₂ ~30 min) stimulates vagal afferents and hypothalamic NPY/AgRP neurons, amplifying gastric motility; (4) Gas-liquid interface oscillation - peristaltic wave pressure gradients (ΔP ~5-15 mmHg) accelerate luminal gas/fluid mixture; turbulent flow and cavitation generate broadband acoustic emissions (50-1000 Hz, intensity 40-60 dB). Sound propagates through abdominal wall. Frequency spectrum correlates with contractile vigor and luminal contents; absence suggests ileus or obstruction.",
    funFact: "Your stomach doesn't actually do most of the 'growling' - most of those sounds come from your small intestine! The intestines are about 20 feet long and make most of the gurgling noises you hear.",
    funFactSource: "American Journal of Gastroenterology",
    funFactSourceUrl: "https://journals.lww.com/ajg"
  },

  {
    id: 19,
    question: "Why is yawning contagious?",
    category: "Human Body",
    difficulty: "medium",
    answerSimple: "Yawning is contagious because of special 'mirror neurons' in your brain! When you see someone yawn (or even read about yawning!), these neurons make your brain copy what you saw. This happens automatically - you can't stop it! Scientists think contagious yawning might have helped early humans stay alert as a group. If one person yawned because they were tired, everyone would yawn and become more alert together!",
    answerIntermediate: "Contagious yawning involves mirror neurons - brain cells that activate both when you perform an action and when you see someone else do it. When you observe someone yawn, your brain's mirror neuron system (especially in the superior temporal sulcus and inferior frontal cortex) activates, often triggering your own yawn. This phenomenon is linked to empathy - people who score higher on empathy tests are more susceptible to contagious yawning. It appears around age 4-5 in humans and is also seen in chimpanzees and dogs, suggesting an evolutionary basis for social bonding and group alertness.",
    answerAdvanced: "Contagious yawning (echophenomenon) demonstrates motor mimicry via mirror neuron system activation. Neuroimaging reveals: (1) Superior temporal sulcus (STS) - processes biological motion including facial movements; (2) Inferior frontal gyrus/ventral premotor cortex - contains mirror neurons responding to observed and executed actions; (3) Posterior cingulate cortex and precuneus - nodes in default mode network associated with self-referential processing. fMRI studies show activation correlates with theory of mind capacity and empathic concern. Ontogeny: emerges ~4 years (coinciding with ToM development); absent in autism spectrum disorder (reduced mirror neuron activity). Phylogeny: documented in Pan troglodytes, Canis familiaris (cross-species with humans), suggesting convergent evolution of social synchronization mechanism. Hypothesized adaptive functions: (1) Vigilance coordination - synchronized arousal state transitions in social groups; (2) Behavioral synchrony - promoting collective action; (3) Emotional contagion - primitive empathy mechanism. Susceptibility correlates with: empathic concern (r=0.4), alexithymia (-0.3), schizotypy (-0.25). Refractory period ~5 min prevents continuous yawning loops.",
    funFact: "Even reading about yawning can make you yawn! Studies show that about 55% of people will yawn within 5 minutes of reading about yawning or seeing the word 'yawn' multiple times. (Are you yawning yet?)",
    funFactSource: "Frontiers in Neuroscience",
    funFactSourceUrl: "https://www.frontiersin.org/journals/neuroscience"
  },

  {
    id: 20,
    question: "Why do hot air balloons float?",
    category: "Physics",
    difficulty: "medium",
    answerSimple: "Hot air balloons float because hot air is lighter than cold air! When you heat the air inside the balloon, the air molecules move faster and spread apart, making the air less dense (lighter) than the cooler air outside. This lighter hot air inside the balloon rises, lifting the balloon up! It's the same reason smoke rises from a fire. To go down, the pilot lets the air cool down.",
    answerIntermediate: "Hot air balloons operate on the principle of buoyancy (Archimedes' principle). When air is heated, its molecules gain kinetic energy and spread apart, decreasing the air's density. Hot air at 100°C has a density of ~0.95 kg/m³ compared to cold air at 15°C (~1.23 kg/m³). A balloon filled with hot air displaces cooler, denser air. If the weight of displaced air exceeds the balloon's total weight (envelope + basket + passengers + hot air), the net buoyant force is upward and the balloon rises. Pilots control altitude by heating or cooling the air inside the envelope.",
    answerAdvanced: "Buoyant force derives from Archimedes' principle: F_b = ρ_ambient × V × g, where ρ_ambient is surrounding air density, V is balloon volume. For ascent: F_b > W_total, requiring ρ_ambient > ρ_effective. Air density temperature dependence (ideal gas): ρ = PM/(RT), where P = pressure, M = molar mass, R = gas constant, T = temperature (K). At constant altitude (P ≈ const): ρ ∝ 1/T. Typical envelope volume V ~2,800 m³. Temperature differential: T_hot ~100°C (373K), T_ambient ~15°C (288K). Density ratio: ρ_hot/ρ_ambient = T_ambient/T_hot = 288/373 ≈ 0.77. Buoyant force: F_b = (ρ_ambient - ρ_hot) × V × g ≈ (1.23 - 0.95) kg/m³ × 2800 m³ × 9.8 m/s² ≈ 7,700 N (payload capacity ~785 kg). Equilibrium requires: mg_total = ρ_ambient × V × g, thus ρ_effective = m_total/V. Pilots modulate T_hot via propane burner (heating rate ~3-4 MW) to control altitude via ρ_hot adjustment. Thermodynamic efficiency limited by envelope heat loss (convection, radiation ~20-30 kW).",
    funFact: "The first hot air balloon passengers weren't humans - they were a sheep, a duck, and a rooster! In 1783, the Montgolfier brothers sent these animals up first to test if living creatures could survive at high altitude.",
    funFactSource: "Smithsonian Air and Space Museum",
    funFactSourceUrl: "https://airandspace.si.edu/"
  },

  {
    id: 21,
    question: "Why do we get brain freeze from eating ice cream?",
    category: "Human Body",
    difficulty: "easy",
    answerSimple: "Brain freeze happens when something really cold touches the roof of your mouth! The sudden cold makes the blood vessels in the roof of your mouth shrink quickly, then expand again just as fast. This quick change confuses the nerves in your mouth, and your brain thinks the pain is coming from your forehead instead! Press your tongue against the roof of your mouth to warm it up and stop the brain freeze.",
    answerIntermediate: "Brain freeze (sphenopalatine ganglioneuralgia) occurs when cold food touches the palate (roof of mouth), causing rapid constriction of blood vessels. The blood vessels then dilate (expand) quickly to rewarm the area. This rapid dilation, particularly of the anterior cerebral artery, triggers pain receptors. The trigeminal nerve (which senses facial pain) sends signals to your brain, but due to 'referred pain,' your brain interprets the pain as coming from your forehead. The pain typically lasts 30-60 seconds. Eating cold foods slowly and warming your palate with your tongue can prevent or stop brain freeze.",
    answerAdvanced: "Sphenopalatine ganglioneuralgia pathophysiology: (1) Thermal stimulus (<10°C) contacts palatal mucosa, activating cold-sensitive TRPM8 thermoreceptors; (2) Reflex vasoconstriction of palatal arteries (sympathetic α-adrenergic response) followed by compensatory vasodilation; (3) Anterior cerebral artery rapid dilation measurable via transcranial Doppler (~15% diameter increase, onset ~2s); (4) Vascular distension activates perivascular nociceptors; (5) Trigeminovascular system activation - trigeminal nerve (V1 ophthalmic division) transmits nociceptive signals to trigeminal ganglion → brainstem; (6) Referred pain phenomenon - convergence of trigeminal afferents in spinal trigeminal nucleus causes pain localization error (palate → forehead). Duration ~30-60s correlates with vascular normalization time constant. Mechanism validated by TCD showing temporal correlation between ACA diameter changes and pain onset/offset. Frequency ~37% in population; susceptibility increases with rapid consumption rate and migraine history (shared trigeminovascular pathway). Countermeasure: palatal warming (tongue pressure) reverses thermal gradient.",
    funFact: "The scientific name for brain freeze is 'sphenopalatine ganglioneuralgia' - one of the longest medical terms for one of the shortest-lasting pains! It's also completely harmless despite how painful it feels.",
    funFactSource: "British Medical Journal",
    funFactSourceUrl: "https://www.bmj.com/"
  },

  {
    id: 22,
    question: "Why don't spiders get stuck in their own webs?",
    category: "Animals",
    difficulty: "medium",
    answerSimple: "Spiders are clever architects! They build their webs with two types of silk: sticky silk (for catching prey) and non-sticky silk (for walking on). The spider carefully walks only on the non-sticky strands. They also have a special oily coating on their legs and tiny hairs that prevent them from sticking. Plus, spiders have excellent memory and know exactly which threads are safe to walk on!",
    answerIntermediate: "Spiders avoid getting stuck through multiple adaptations: (1) Web architecture - orb webs have sticky spiral threads (capture spiral) and non-sticky radial threads and frame; spiders walk primarily on non-sticky threads; (2) Leg anatomy - legs have specialized setae (tiny hairs) that minimize contact area and have anti-adhesive properties; (3) Chemical coating - legs secrete a non-stick coating that prevents adhesion to sticky silk; (4) Behavior - spiders use delicate, high-stepping gait and can quickly pull legs free if they touch sticky silk; (5) Molecular differences - sticky silk contains glycoproteins (aqueous glue droplets), while dragline silk is dry.",
    answerAdvanced: "Spider web adhesion evasion mechanisms: (1) Silk heterogeneity - orb webs comprise multiple silk types: major ampullate (dragline/radial - β-sheet crystalline regions in amorphous matrix, dry, non-adhesive, σ_tensile ~1 GPa) vs flagelliform + aggregate (spiral capture - extensible flagelliform core coated with hygroscopic glycoprotein glue droplets, viscid, adhesive force ~1-10 μN/contact); (2) Behavioral selectivity - spiders locomote preferentially on radial/frame threads avoiding capture spiral; (3) Tarsal morphology - distal leg segments possess specialized setae (length ~50 μm, density ~10⁴/mm²) creating hierarchical roughness; minimal contact area via asperity contact reduces adhesive forces per Kendall model: F_adhesion ∝ A_real; (4) Cuticular chemistry - epicuticular lipids (hydrocarbons, fatty acids) provide low surface energy coating (contact angle >90°) reducing glycoprotein adhesion; (5) Piriform attachment discs - when adhering deliberately, spiders secrete cement proteins creating strong attachments (F ~0.1-1 mN). Aggregate glue composition: glycoproteins, GABamide neurotransmitter analogs, hygroscopic LMW compounds maintaining plasticity across humidity ranges.",
    funFact: "Spider silk is one of the strongest materials in nature - stronger than steel of the same thickness! If you could make a strand of spider silk as thick as a pencil, it could stop a Boeing 747 airplane in flight.",
    funFactSource: "Journal of Arachnology",
    funFactSourceUrl: "https://www.americanarachnology.org/"
  },

  {
    id: 23,
    question: "Why do we float better in saltwater than freshwater?",
    category: "Physics",
    difficulty: "medium",
    answerSimple: "Saltwater is heavier (more dense) than freshwater because of all the dissolved salt! When water is denser, it pushes up on your body with more force. Your body stays the same weight whether in saltwater or freshwater, but the saltwater pushes up harder, making you float better. This is why it's super easy to float in the Dead Sea - it has so much salt that you can't sink even if you try!",
    answerIntermediate: "Buoyancy follows Archimedes' principle: an object floats if it displaces a weight of fluid greater than its own weight. Freshwater has a density of 1.0 g/cm³, while seawater averages 1.025 g/cm³ (2.5% denser due to ~35 g/L dissolved salts, mainly sodium chloride). The Dead Sea has extreme salinity (~340 g/L), giving it a density of ~1.24 g/cm³. Human body density varies (0.95-1.05 g/cm³) depending on body composition. In saltwater, the denser fluid provides greater upward buoyant force, making floating easier. The 2.5% density increase in seawater provides noticeable difference in buoyancy.",
    answerAdvanced: "Buoyant force F_b = ρ_fluid × V_displaced × g (Archimedes). For floating equilibrium: F_b = m_object × g, thus V_displaced/V_total = ρ_object/ρ_fluid. Fluid densities: freshwater ρ_fresh ≈ 1.00 g/cm³ (4°C), seawater ρ_sea ≈ 1.025 g/cm³ (35 PSU salinity, 15°C), Dead Sea ρ_DS ≈ 1.24 g/cm³ (340 g/L TDS). Human body density ρ_human ≈ 0.95-1.05 g/cm³ (variable: fat ~0.9 g/cm³, muscle ~1.06 g/cm³, bone ~1.85 g/cm³; body composition determines position). For ρ_human = 1.0 g/cm³: freshwater submersion = 100%, seawater = 97.6%, Dead Sea = 80.6%. Density increase seawater vs freshwater: Δρ/ρ = 2.5%, increasing buoyant force proportionally. Saltwater density derives from dissolved ions (Na⁺, Cl⁻, Mg²⁺, SO₄²⁻, Ca²⁺, K⁺) mass contribution without proportional volume increase (partial molar volume effects). Practical consequence: swim effort reduction ~5-10% in seawater vs freshwater for neutral buoyancy maintenance.",
    funFact: "In the Dead Sea (the saltiest body of water on Earth), it's actually difficult to swim normally because you float so well! People typically float on their backs reading newspapers - trying to dive underwater is nearly impossible without weights.",
    funFactSource: "Oceanography Journal",
    funFactSourceUrl: "https://tos.org/"
  },

  {
    id: 24,
    question: "Why do fireflies glow?",
    category: "Animals",
    difficulty: "medium",
    answerSimple: "Fireflies glow to talk to each other, especially to find boyfriends and girlfriends! They have a special chemical reaction in their abdomen that creates light without heat (called bioluminescence). Males fly around flashing patterns to attract females. Females sitting in grass flash back if they're interested! Each firefly species has its own unique flashing pattern - it's like their own secret code!",
    answerIntermediate: "Fireflies produce light through bioluminescence - a chemical reaction in specialized cells called photocytes. The reaction involves: luciferin (substrate) + oxygen + ATP (energy), catalyzed by the enzyme luciferase, producing oxyluciferin + light (560 nm, yellow-green). This reaction is extremely efficient (~95% energy to light vs ~10% for light bulbs). Fireflies use species-specific flash patterns for mate attraction: males fly and flash, females (often wingless) respond from vegetation. Some species synchronize flashes in large groups. Firefly larvae also glow to warn predators they're toxic.",
    answerAdvanced: "Bioluminescence mechanism: luciferin (benzothiazole derivative) undergoes ATP-dependent oxidation catalyzed by luciferase (550 amino acids, ~62 kDa). Reaction pathway: (1) Luciferin + ATP → luciferyl-adenylate + PPᵢ; (2) Luciferyl-AMP + O₂ → dioxetanone intermediate; (3) Dioxetanone decomposition → oxyluciferin* (excited state) + AMP + CO₂; (4) Oxyluciferin* → oxyluciferin + hν (photon emission λ_max ~560 nm, E ~2.2 eV). Quantum efficiency Φ ~0.88 (88% photons per substrate molecule - highest biological light source). Photocytes contain: peroxisomes (luciferase, luciferin), mitochondria (ATP synthesis), tracheal end cells (O₂ delivery). NO• gating controls O₂ access, modulating flash timing. Interspecies variation: (1) Flash pattern (interval 0.3-5s, duration 50-500ms); (2) Wavelength (λ = 550-580 nm, species-specific via luciferase mutations); (3) Synchrony (Pteroptyx spp. achieve ms-precision synchronization via pulse-coupled oscillator mechanisms). Aposematic function in larvae: toxic defensive steroids (lucibufagins) correlate with constitutive glow warning predators. Sexual selection drives elaborate flash displays and aggressive female mimicry (Photuris spp. 'femme fatale' strategy).",
    funFact: "Some female fireflies are 'femme fatales' - they mimic the flash patterns of other species to lure males in, then eat them! These carnivorous females of the genus Photuris can mimic multiple species' signals.",
    funFactSource: "Annual Review of Entomology",
    funFactSourceUrl: "https://www.annualreviews.org/journal/ento"
  },

  {
    id: 25,
    question: "Why does the Moon look bigger when it's near the horizon?",
    category: "Space",
    difficulty: "hard",
    answerSimple: "This is a trick your brain plays on you! The Moon doesn't actually get bigger - it just looks bigger when it's near the horizon. Scientists call this the 'Moon Illusion.' When the Moon is near houses, trees, and mountains, your brain compares it to those objects and thinks the Moon must be huge! When it's high in the sky with no objects to compare it to, it looks smaller. But if you measure it, the Moon is actually the same size both times!",
    answerIntermediate: "The Moon Illusion is a perceptual phenomenon where the Moon appears 1.5-3× larger near the horizon than at zenith (directly overhead), despite being the same angular size (~0.5°). This is purely psychological - photographs show identical Moon sizes. Leading explanations: (1) Ponzo illusion - your brain interprets the horizon Moon as farther away (because it's behind terrestrial objects) and compensates by perceiving it as larger; (2) Flattened sky dome - we perceive the sky as a flattened dome, not a perfect hemisphere, making the horizon seem farther than zenith; (3) Relative size - comparing the Moon to trees and buildings makes it seem larger than when isolated against empty sky.",
    answerAdvanced: "Moon illusion involves size-distance invariance hypothesis and angular size contrast. Physical facts: (1) Moon angular diameter θ ≈ 0.52° (±~5% due to elliptical orbit; perigee 356,500 km → θ = 0.56°, apogee 406,700 km → θ = 0.49°); (2) Horizon Moon actually ~1.5% smaller (greater distance by Earth's radius ~6,371 km / Moon distance ~385,000 km); (3) Atmospheric refraction compresses vertical diameter ~3%, creating slight elliptical appearance. Perceptual theories: (1) Ponzo/Emmert's Law - perceived size S ∝ angular size × perceived distance: horizon Moon perceived as farther (terrain depth cues) → brain infers larger physical size for same angular size; (2) Oculomotor micropsia - vergence/accommodation cues for zenith (overhead eye angle) suggest proximity → perceptual size reduction; (3) Relative size contrast - visual angle comparison to terrestrial features (trees θ ~1-5°) creates size context absent at zenith. Neuroimaging reveals V1 (primary visual cortex) responses identical for horizon/zenith Moon; size difference emerges in higher-order cortical processing (lateral occipital complex, parietal cortex). Mandelbaum effect: photographing through aperture (eliminating context) eliminates illusion, confirming cognitive rather than optical origin.",
    funFact: "You can prove the Moon Illusion is in your head by making a small circle with your finger and thumb and looking at the Moon through it when it's on the horizon and again when it's overhead - it will appear the same size both times!",
    funFactSource: "Psychological Science Journal",
    funFactSourceUrl: "https://journals.sagepub.com/home/pss"
  }
];

