export const physicsChapter1 = {
  "chapter": "Units and Measurements",
  "chapter_no": 1,
  "exam": "NEET PYQs",
  "total_questions": 52,
  "sections": [
    {
      "topic": "Unit of Physical Quantities",
      "questions": [
        {
          "question_no": 1,
          "year": "NEET 2026",
          "question": "The speed of light in vacuum is taken as unity. If light takes 6 min 40 s to reach the Earth from the Sun, the distance between the Sun and the Earth in new unit is:",
          "options": { "a": "3 × 10⁸", "b": "500", "c": "3 × 10¹⁰", "d": "400" },
          "answer": "d",
          "explanation": "Time, t = 6 min 40 s = 400 s. Distance in new system d = vt = 1 × 400 = 400.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Unit Conversion",
          "required_to_solve": {
            "concepts": ["Speed-distance-time relation", "Natural units"],
            "formulas": ["d = v × t"]
          }
        },
        {
          "question_no": 2,
          "year": "AIPMT 2011 Mains",
          "question": "The density of a material in CGS system of units is 4 g cm⁻³. In a system of units in which unit of length is 10 cm and unit of mass is 100 g, the value of density of material will be",
          "options": { "a": "0.04", "b": "0.4", "c": "40", "d": "400" },
          "answer": "c",
          "explanation": "In CGS system, Density = 4 g/cm³. When unit of mass is 100g and unit of length is 10 cm, then x = 40 unit.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Unit Conversion",
          "required_to_solve": {
            "concepts": ["System of units conversion", "Dimensional method for unit conversion"],
            "formulas": ["n₁u₁ = n₂u₂", "ρ = M/L³"]
          }
        },
        {
          "question_no": 3,
          "year": "AIPMT 2012 Prelims",
          "question": "The damping force on an oscillator is directly proportional to the velocity. The units of the constant of proportionality are",
          "options": { "a": "kg m s⁻¹", "b": "kg m s⁻²", "c": "kg s", "d": "kg s⁻¹" },
          "answer": "d",
          "explanation": "F ∝ v → F = kv. k = F/v. Units of k = (kg m s⁻²) / (m s⁻¹) = kg s⁻¹.",
          "difficulty": "Easy",
          "approach": "theory based + formula based",
          "image_path": null,
          "similarity_tag": "S2, Units of Physical Quantities",
          "required_to_solve": {
            "concepts": ["Proportionality constant", "Units derivation from formula"],
            "formulas": ["F = kv", "k = F/v"]
          }
        },
        {
          "question_no": 4,
          "year": "NEET 2020 Phase 1",
          "question": "The energy required to break one bond in DNA is 10⁻²⁰ J. This value in eV is nearly:",
          "options": { "a": "0.6", "b": "0.06", "c": "0.006", "d": "6" },
          "answer": "b",
          "explanation": "1 eV = 1.6 × 10⁻¹⁹ J. 10⁻²⁰ J = 10⁻²⁰ / (1.6 × 10⁻¹⁹) eV = 0.06 eV.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Unit Conversion",
          "required_to_solve": {
            "concepts": ["Energy unit conversion", "Electron volt"],
            "formulas": ["1 eV = 1.6 × 10⁻¹⁹ J"]
          }
        },
        {
          "question_no": 5,
          "year": "AIPMT 2004",
          "question": "The unit of permittivity of free space, ε₀, is",
          "options": { "a": "coulomb/newton-metre", "b": "newton-metre²/coulomb²", "c": "coulomb²/newton-metre²", "d": "coulomb²/(newton-metre)" },
          "answer": "c",
          "explanation": "F = (1/4πε₀)(q₁q₂/r²). ε₀ = q₁q₂/(4πFr²). Unit = coulomb²/(newton-metre²).",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S2, Units of Physical Quantities",
          "required_to_solve": {
            "concepts": ["Coulomb's law", "Deriving units from formula"],
            "formulas": ["F = (1/4πε₀)(q₁q₂/r²)"]
          }
        }
      ]
    },
    {
      "topic": "Significant Figures",
      "questions": [
        {
          "question_no": 6,
          "year": "NEET 2023 Manipur",
          "question": "The diameter of a spherical bob, when measured with vernier callipers yielded the following values: 3.33 cm, 3.32 cm, 3.34 cm, 3.33 cm and 3.32 cm. The mean diameter to appropriate significant figures is:",
          "options": { "a": "3.328 cm", "b": "3.3 cm", "c": "3.33 cm", "d": "3.32 cm" },
          "answer": "c",
          "explanation": "Mean = (3.33 + 3.32 + 3.34 + 3.33 + 3.32)/5 = 3.328 ≈ 3.33 cm.",
          "difficulty": "Easy",
          "approach": "theory based + calculation type",
          "image_path": null,
          "similarity_tag": "S3, Significant Figures",
          "required_to_solve": {
            "concepts": ["Mean value calculation", "Significant figures in measurement"],
            "formulas": ["Mean = Σxᵢ/n"]
          }
        },
        {
          "question_no": 7,
          "year": "NEET 2026",
          "question": "Each side of a metallic cube of mass 5.580 kg is measured to be 9.0 cm. Keeping the significant figures in view, the density of the material of the cube can be best expressed as X × 10³ kg m⁻³ where the value of X is:",
          "options": { "a": "7.654", "b": "7.6", "c": "7.65", "d": "7.7" },
          "answer": "d",
          "explanation": "V = (9.0 × 10⁻²)³ = 7.29 × 10⁻⁴ m³. ρ = 5.580/(7.29 × 10⁻⁴) ≈ 7.654 × 10³. Side has 2 sig figs → X = 7.7.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S3, Significant Figures",
          "required_to_solve": {
            "concepts": ["Density calculation", "Significant figures in multiplication/division"],
            "formulas": ["ρ = M/V", "V = a³"]
          }
        },
        {
          "question_no": 8,
          "year": "NEET 2022 Phase 1",
          "question": "The area of a rectangular field (in m²) of length 55.3 m and breadth 25 m after rounding off the value for correct significant digits is",
          "options": { "a": "138 × 10¹", "b": "1382", "c": "1382.5", "d": "14 × 10²" },
          "answer": "d",
          "explanation": "Area = 55.3 × 25 = 1382.5 m². Breadth has 2 sig figs → 1400 m² = 14 × 10² m².",
          "difficulty": "Easy",
          "approach": "theory based + calculation type",
          "image_path": null,
          "similarity_tag": "S3, Significant Figures",
          "required_to_solve": {
            "concepts": ["Area calculation", "Significant figures in multiplication"],
            "formulas": ["A = l × b"]
          }
        },
        {
          "question_no": 9,
          "year": "NEET 2020 Phase 1",
          "question": "Taking into account of the significant figures, what is the value of 9.99m − 0.0099m?",
          "options": { "a": "9.98 m", "b": "9.980 m", "c": "9.9 m", "d": "9.9801 m" },
          "answer": "a",
          "explanation": "9.99 − 0.0099 = 9.9801 m. For subtraction, result has same decimal places as fewest (2). Answer = 9.98 m.",
          "difficulty": "Easy",
          "approach": "theory based + calculation type",
          "image_path": null,
          "similarity_tag": "S3, Significant Figures",
          "required_to_solve": {
            "concepts": ["Significant figures in addition/subtraction", "Rounding rules"],
            "formulas": ["None — rule-based"]
          }
        }
      ]
    },
    {
      "topic": "Errors in Measurements",
      "questions": [
        {
          "question_no": 10,
          "year": "NEET 2024 (Re-Examination)",
          "question": "In an electrical circuit, the voltage is measured as V = (200 ± 4) volt and the current is measured as I = (20 ± 0.2) A. The value of the resistance is:",
          "options": { "a": "(10 ± 4.2) Ω", "b": "(10 ± 0.3) Ω", "c": "(10 ± 0.1) Ω", "d": "(10 ± 0.8) Ω" },
          "answer": "b",
          "explanation": "R = V/I = 10 Ω. ΔR/R = ΔV/V + ΔI/I = 0.02 + 0.01 = 0.03. ΔR = 0.3 Ω.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Error propagation in division", "Relative error", "Absolute error"],
            "formulas": ["R = V/I", "ΔR/R = ΔV/V + ΔI/I"]
          }
        },
        {
          "question_no": 11,
          "year": "NEET 2025",
          "question": "A physical quantity P is related to four observations a, b, c and d as follows: P = a³b²/c√d. The percentage errors of measurement in a, b, c and d are 1%, 3%, 2%, and 4% respectively. The percentage error in the quantity P is",
          "options": { "a": "13%", "b": "15%", "c": "10%", "d": "2%" },
          "answer": "a",
          "explanation": "% error in P = 3(1%) + 2(3%) + 2% + ½(4%) = 3 + 6 + 2 + 2 = 13%.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Percentage error propagation", "Power rule for errors"],
            "formulas": ["ΔP/P = n(Δa/a) + m(Δb/b) + p(Δc/c) + q(Δd/d)"]
          }
        },
        {
          "question_no": 12,
          "year": "NEET 2022 Phase 2",
          "question": "The percentage error in the measurement of g is: (Given that g = 4π²L/T², L = (10 ± 0.1) cm, T = (100 ± 1) s)",
          "options": { "a": "7%", "b": "2%", "c": "5%", "d": "3%" },
          "answer": "d",
          "explanation": "Δg/g = ΔL/L + 2(ΔT/T) = 0.01 + 0.02 = 0.03 = 3%.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Error in derived quantity", "Percentage error"],
            "formulas": ["g = 4π²L/T²", "Δg/g = ΔL/L + 2(ΔT/T)"]
          }
        },
        {
          "question_no": 13,
          "year": "NEET 2023",
          "question": "A metal wire has mass (0.4 ± 0.002) g, radius (0.3 ± 0.001) mm and length (5 ± 0.02) cm. The maximum possible percentage error in the measurement of density will nearly be:",
          "options": { "a": "1.3%", "b": "1.6%", "c": "1.4%", "d": "1.2%" },
          "answer": "b",
          "explanation": "ρ = m/(πr²L). %error = 0.5 + 0.67 + 0.4 = 1.57 ≈ 1.6%.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Density formula", "Maximum percentage error", "Error propagation in products"],
            "formulas": ["ρ = m/(πr²L)", "Δρ/ρ = Δm/m + 2(Δr/r) + ΔL/L"]
          }
        },
        {
          "question_no": 14,
          "year": "NEET 2023",
          "question": "The errors in the measurement which arise due to unpredictable fluctuations in temperature and voltage supply are:",
          "options": { "a": "Personal errors", "b": "Least count errors", "c": "Random errors", "d": "Instrumental errors" },
          "answer": "c",
          "explanation": "Unpredictable fluctuations in temperature and voltage supply lead to random errors.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S5, Types of Errors",
          "required_to_solve": {
            "concepts": ["Types of errors", "Random errors"],
            "formulas": ["None"]
          }
        },
        {
          "question_no": 15,
          "year": "AIPMT 2010 Mains",
          "question": "A student measures the distance traversed in free fall of a body, initially at rest, in a given time. He uses this data to estimate g. If the maximum percentage errors in measurement of the distance and the time are e₁ and e₂ respectively, the percentage error in the estimation of g is",
          "options": { "a": "e₂ − e₁", "b": "e₁ + 2e₂", "c": "e₁ + e₂", "d": "e₁ − 2e₂" },
          "answer": "b",
          "explanation": "From h = ½gt², g = 2h/t². %error in g = e₁ + 2e₂.",
          "difficulty": "Medium",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Free fall equation", "Error propagation with powers"],
            "formulas": ["h = ½gt²", "g = 2h/t²", "Δg/g = Δh/h + 2(Δt/t)"]
          }
        },
        {
          "question_no": 16,
          "year": "NEET 2013",
          "question": "If in an experiment four quantities a, b, c and d are measured with percentage error 1%, 2%, 3% and 4% respectively. Quantity P is calculated as follows P = a³b²/(cd). Then the percentage error in P is",
          "options": { "a": "7%", "b": "4%", "c": "14%", "d": "10%" },
          "answer": "c",
          "explanation": "%error in P = 3(1) + 2(2) + 3 + 4 = 14%.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Percentage error propagation", "Power rule for errors"],
            "formulas": ["ΔP/P = 3(Δa/a) + 2(Δb/b) + Δc/c + Δd/d"]
          }
        },
        {
          "question_no": 17,
          "year": "NEET 2019",
          "question": "In an experiment, the percentage of error occurred in the measurement of physical quantities A, B, C and D are 1%, 2%, 3% and 4% respectively. Then the maximum percentage of error in the measurement X, where X = A²√B/(C^(1/3) × D³), will be:",
          "options": { "a": "16%", "b": "−10%", "c": "10%", "d": "7%" },
          "answer": "a",
          "explanation": "%error in X = 2(1) + ½(2) + ⅓(3) + 3(4) = 2 + 1 + 1 + 12 = 16%.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Error Propagation",
          "required_to_solve": {
            "concepts": ["Error propagation with fractional powers", "Maximum percentage error"],
            "formulas": ["ΔX/X = 2(ΔA/A) + ½(ΔB/B) + ⅓(ΔC/C) + 3(ΔD/D)"]
          }
        }
      ]
    },
    {
      "topic": "Dimensions of Physical Quantities",
      "questions": [
        {
          "question_no": 18,
          "year": "NEET 2025",
          "question": "A balloon is made of a material of surface tension S and its inflation outlet has small area A. It is filled with a gas of density ρ and takes a spherical shape of radius R. When the gas is allowed to flow freely out of it, its radius changes from R to 0 in time T. If v ∝ rⁿ, and T ∝ SᵃAᵇRᶜρᵈ, then",
          "options": { "a": "α=½, β=−1, γ=−½, δ=½", "b": "α=½, β=−½, γ=−1, δ=½", "c": "α=½, β=−½, γ=½, δ=−½", "d": "α=−½, β=−½, γ=−1, δ=½" },
          "answer": "c",
          "explanation": "Using dimensional analysis on T ∝ SᵃAᵇRᶜρᵈ and equating dimensions.",
          "difficulty": "Hard",
          "approach": "theory based + formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Dimensional analysis", "Surface tension dimensions", "Density dimensions"],
            "formulas": ["[S] = [MT⁻²]", "[A] = [L²]", "[ρ] = [ML⁻³]"]
          }
        },
        {
          "question_no": 19,
          "year": "RE-NEET 2026",
          "question": "Consider that σ, k_B, b represents Stefan-Boltzmann constant, Boltzmann constant and Wien's displacement law constant. The dimension of σk_B²b is",
          "options": { "a": "[L T⁻⁴]", "b": "[L T⁻¹ K⁻²]", "c": "[L K⁻²]", "d": "[L⁻¹ T⁻³]" },
          "answer": "b",
          "explanation": "σ = [MT⁻³K⁻⁴], k_B = [ML²T⁻²K⁻¹], b = [LK]. Multiply and simplify.",
          "difficulty": "Hard",
          "approach": "theory based + formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Stefan-Boltzmann constant", "Boltzmann constant", "Wien's constant"],
            "formulas": ["[σ] = [MT⁻³K⁻⁴]", "[k_B] = [ML²T⁻²K⁻¹]", "[b] = [LK]"]
          }
        },
        {
          "question_no": 20,
          "year": "NEET 2024 (Re-Examination)",
          "question": "A force defined by F = αt² + βt acts on a particle. The dimensionless factor is:",
          "options": { "a": "βt/α", "b": "αt/β", "c": "αt", "d": "αβ/t" },
          "answer": "b",
          "explanation": "[α] = [F]/[T²], [β] = [F]/[T]. αt/β = dimensionless.",
          "difficulty": "Medium",
          "approach": "theory based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Principle of homogeneity", "Dimensionless quantities"],
            "formulas": ["[α] = [MLT⁻⁴]", "[β] = [MLT⁻³]"]
          }
        },
        {
          "question_no": 21,
          "year": "NEET 2024",
          "question": "The quantities which have the same dimensions as those of solid angle are:",
          "options": { "a": "strain and angle", "b": "stress and angle", "c": "strain and arc", "d": "angular speed and stress" },
          "answer": "a",
          "explanation": "Solid angle = [M⁰L⁰T⁰]. Strain = dimensionless. Angle = dimensionless.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S8, Dimensionless Quantities",
          "required_to_solve": {
            "concepts": ["Solid angle", "Strain", "Dimensionless quantities"],
            "formulas": ["None"]
          }
        },
        {
          "question_no": 22,
          "year": "NEET 2024 (Re-Examination)",
          "question": "The potential energy V = Ar/(√r + B). The dimensions of A/B are:",
          "options": { "a": "[M^(3/2) L^(1/2) T⁻³]", "b": "[M^(1/2) L T⁻³]", "c": "[M² L^(1/2) T⁻⁴]", "d": "[M L T⁻³]" },
          "answer": "c",
          "explanation": "Using dimensional homogeneity to find [A] and [B], then compute [A/B].",
          "difficulty": "Hard",
          "approach": "theory based + formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Principle of homogeneity", "Potential energy dimensions"],
            "formulas": ["[V] = [ML²T⁻²]"]
          }
        },
        {
          "question_no": 23,
          "year": "NEET 2022 Phase 1",
          "question": "The dimensions [MLT⁻²A⁻²] belong to the",
          "options": { "a": "Magnetic flux", "b": "Self inductance", "c": "Magnetic permeability", "d": "Electric permittivity" },
          "answer": "c",
          "explanation": "Magnetic permeability μ₀ has dimensional formula [MLT⁻²A⁻²].",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Magnetic permeability", "Dimensional formulae of electromagnetic quantities"],
            "formulas": ["[μ₀] = [MLT⁻²A⁻²]"]
          }
        },
        {
          "question_no": 24,
          "year": "NEET 2022 Phase 2",
          "question": "The physical quantity that has the same dimensional formula as pressure is",
          "options": { "a": "Coefficient of viscosity", "b": "Force", "c": "Momentum", "d": "Young's modulus of elasticity" },
          "answer": "d",
          "explanation": "Pressure = [ML⁻¹T⁻²]. Young's modulus = [ML⁻¹T⁻²].",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S10, Same Dimensions",
          "required_to_solve": {
            "concepts": ["Pressure dimensions", "Young's modulus dimensions"],
            "formulas": ["[P] = [ML⁻¹T⁻²]", "[Y] = [ML⁻¹T⁻²]"]
          }
        },
        {
          "question_no": 25,
          "year": "NEET 2023 Manipur",
          "question": "The mechanical quantity, which has dimensions of reciprocal of mass (M⁻¹) is:",
          "options": { "a": "angular momentum", "b": "coefficient of thermal conductivity", "c": "torque", "d": "gravitational constant" },
          "answer": "d",
          "explanation": "G = [M⁻¹L³T⁻²] — contains M⁻¹.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Gravitational constant dimensions"],
            "formulas": ["[G] = [M⁻¹L³T⁻²]"]
          }
        },
        {
          "question_no": 26,
          "year": "NEET 2021",
          "question": "If force [F], acceleration [A] and time [T] are chosen as fundamental quantities. Find dimensions of energy.",
          "options": { "a": "[F][A][T]", "b": "[F][A][T⁻¹]", "c": "[F][A][T²]", "d": "[F][A][T⁻²]" },
          "answer": "c",
          "explanation": "Solving: a=1, b=1, c=2. E = [F][A][T²].",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, New Fundamental Quantities",
          "required_to_solve": {
            "concepts": ["Expressing quantity in new fundamental units", "Dimensional equations"],
            "formulas": ["[E] = [ML²T⁻²]", "[F] = [MLT⁻²]", "[A] = [LT⁻²]"]
          }
        },
        {
          "question_no": 27,
          "year": "NEET 2021",
          "question": "If E and G denote energy and gravitational constant, then E/G has dimensions of:",
          "options": { "a": "[M²][L][T]", "b": "[M²][L⁻¹][T⁰]", "c": "[M][L¹][T⁻¹]", "d": "[M][L][T]" },
          "answer": "b",
          "explanation": "E/G = [ML²T⁻²]/[M⁻¹L³T⁻²] = [M²L⁻¹T⁰].",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Energy dimensions", "Gravitational constant dimensions"],
            "formulas": ["[E] = [ML²T⁻²]", "[G] = [M⁻¹L³T⁻²]"]
          }
        },
        {
          "question_no": 28,
          "year": "NEET 2022 Phase 1",
          "question": "Plane angle and solid angle have",
          "options": { "a": "Units but no dimensions", "b": "Dimensions but no units", "c": "No units and no dimensions", "d": "Both units and dimensions" },
          "answer": "a",
          "explanation": "Plane angle (radian) and solid angle (steradian) have units but are dimensionless.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S8, Dimensionless Quantities",
          "required_to_solve": {
            "concepts": ["Supplementary SI units", "Dimensionless quantities with units"],
            "formulas": ["None"]
          }
        },
        {
          "question_no": 29,
          "year": "NEET 2016 Phase 2",
          "question": "Which combination of h, c and G has the dimension of length?",
          "options": { "a": "√(hc/G)", "b": "√(hG/c³)", "c": "hc/G", "d": "√(G/c³)" },
          "answer": "b",
          "explanation": "√(hG/c³) = √[L²] = [L].",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S13, Natural Units / Planck Units",
          "required_to_solve": {
            "concepts": ["Planck length", "Dimensional analysis with fundamental constants"],
            "formulas": ["[h] = [ML²T⁻¹]", "[G] = [M⁻¹L³T⁻²]", "[c] = [LT⁻¹]"]
          }
        },
        {
          "question_no": 30,
          "year": "NEET 2017",
          "question": "A physical quantity of dimensions of length formed from c, G and ε₀ is",
          "options": { "a": "c²[G/(4πε₀)]^(1/2)", "b": "√(c²G/(4πε₀)³)", "c": "√(G/(4πε₀))", "d": "√(cG/(4πε₀))" },
          "answer": "d",
          "explanation": "Using dimensional analysis with c, G, ε₀ to form [L].",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S13, Natural Units / Planck Units",
          "required_to_solve": {
            "concepts": ["Forming quantities of given dimensions"],
            "formulas": ["[c] = [LT⁻¹]", "[G] = [M⁻¹L³T⁻²]", "[ε₀] = [M⁻¹L⁻³T⁴A²]"]
          }
        },
        {
          "question_no": 31,
          "year": "NEET 2020 Phase 1",
          "question": "Dimensions of stress are:",
          "options": { "a": "[ML²T⁻²]", "b": "[MLT⁻²]", "c": "[ML⁻¹T⁻²]", "d": "[MLT⁻²]" },
          "answer": "c",
          "explanation": "Stress = Force/Area = [ML⁻¹T⁻²].",
          "difficulty": "Easy",
          "approach": "theory based + formula based",
          "image_path": null,
          "similarity_tag": "S11, Dimensions of Mechanical Quantities",
          "required_to_solve": {
            "concepts": ["Stress definition", "Force and area dimensions"],
            "formulas": ["Stress = F/A", "[F] = [MLT⁻²]"]
          }
        },
        {
          "question_no": 32,
          "year": "AIPMT 2014",
          "question": "If force (F), velocity (V) and time (T) are fundamental units, dimensions of mass are",
          "options": { "a": "[FVT⁻¹]", "b": "[FVT⁻³]", "c": "[FV⁻¹T⁻¹]", "d": "[FV⁻¹T]" },
          "answer": "d",
          "explanation": "Solving: a=1, b=−1, c=1. m = [FV⁻¹T].",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, New Fundamental Quantities",
          "required_to_solve": {
            "concepts": ["Expressing mass in new fundamental units"],
            "formulas": ["[M] = [MLT⁻²]ᵃ[LT⁻¹]ᵇ[T]ᶜ"]
          }
        },
        {
          "question_no": 33,
          "year": "AIPMT 2015 Cancelled Paper",
          "question": "If energy (E), velocity (V) and time (T) are fundamental quantities, dimensional formula of surface tension is",
          "options": { "a": "[EV⁻²T⁻²]", "b": "[E⁻²V⁻¹T⁻³]", "c": "[EV⁻²T⁻¹]", "d": "[EV⁻¹T⁻²]" },
          "answer": "a",
          "explanation": "Expressing surface tension in E, V, T system gives [EV⁻²T⁻²].",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, New Fundamental Quantities",
          "required_to_solve": {
            "concepts": ["Surface tension dimensions", "Change of fundamental quantities"],
            "formulas": ["[Surface tension] = [MT⁻²]", "[E] = [ML²T⁻²]", "[V] = [LT⁻¹]"]
          }
        },
        {
          "question_no": 34,
          "year": "AIPMT 2015",
          "question": "Critical velocity Uc = [ηˣρʸrᶻ]. Values of x, y, z are",
          "options": { "a": "−1, −1, −1", "b": "1, 1, 1", "c": "1, −1, −1", "d": "−1, −1, 1" },
          "answer": "c",
          "explanation": "Solving: x=1, y=−1, z=−1.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Critical velocity", "Viscosity dimensions", "Dimensional equations"],
            "formulas": ["[η] = [ML⁻¹T⁻¹]", "[ρ] = [ML⁻³]", "[v] = [LT⁻¹]"]
          }
        },
        {
          "question_no": 35,
          "year": "AIPMT 2011 Prelims",
          "question": "The dimensions of (μ₀ε₀)⁻¹/² are",
          "options": { "a": "[L^(1/2) T^(−1/2)]", "b": "[LT]", "c": "[LT⁻¹]", "d": "[L^(1/2) T^(1/2)]" },
          "answer": "c",
          "explanation": "(μ₀ε₀)⁻¹/² = c = [LT⁻¹].",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Speed of light from electromagnetic constants"],
            "formulas": ["c = 1/√(μ₀ε₀)", "[c] = [LT⁻¹]"]
          }
        },
        {
          "question_no": 36,
          "year": "NEET 2013 (Karnataka)",
          "question": "The pair of quantities having same dimensions is",
          "options": { "a": "Impulse and Surface Tension", "b": "Angular momentum and Work", "c": "Work and Torque", "d": "Young's modulus and Energy" },
          "answer": "c",
          "explanation": "Work = [ML²T⁻²]. Torque = [ML²T⁻²]. Same.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S10, Same Dimensions",
          "required_to_solve": {
            "concepts": ["Work dimensions", "Torque dimensions"],
            "formulas": ["[W] = [ML²T⁻²]", "[τ] = [ML²T⁻²]"]
          }
        },
        {
          "question_no": 37,
          "year": "AIPMT 2010 Prelims",
          "question": "The dimension of ½ε₀E² is",
          "options": { "a": "ML²T⁻²", "b": "ML⁻¹T⁻²", "c": "ML²T⁻¹", "d": "MLT⁻¹" },
          "answer": "b",
          "explanation": "½ε₀E² = energy density = [ML⁻¹T⁻²].",
          "difficulty": "Medium",
          "approach": "theory based + formula based",
          "image_path": null,
          "similarity_tag": "S11, Dimensions of Mechanical Quantities",
          "required_to_solve": {
            "concepts": ["Energy density", "Electromagnetic energy density"],
            "formulas": ["u = ½ε₀E²", "[u] = [ML⁻¹T⁻²]"]
          }
        },
        {
          "question_no": 38,
          "year": "AIPMT 2008",
          "question": "Which two have same dimensions? (1) Energy density (2) Refractive index (3) Dielectric constant (4) Young's modulus (5) Magnetic field",
          "options": { "a": "1 and 4", "b": "1 and 5", "c": "2 and 4", "d": "3 and 5" },
          "answer": "a",
          "explanation": "Energy density = [ML⁻¹T⁻²]. Young's modulus = [ML⁻¹T⁻²].",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S10, Same Dimensions",
          "required_to_solve": {
            "concepts": ["Energy density", "Young's modulus", "Comparing dimensions"],
            "formulas": ["[Energy density] = [ML⁻¹T⁻²]", "[Y] = [ML⁻¹T⁻²]"]
          }
        },
        {
          "question_no": 39,
          "year": "AIPMT 2009",
          "question": "If dimensions are MᵃLᵇTᶜ, the physical quantity will be",
          "options": { "a": "velocity if a=1,b=0,c=−1", "b": "acceleration if a=1,b=1,c=−2", "c": "force if a=0,b=1,c=−2", "d": "pressure if a=1,b=−1,c=−2" },
          "answer": "d",
          "explanation": "Pressure = [ML⁻¹T⁻²] → a=1, b=−1, c=−2.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S11, Dimensions of Mechanical Quantities",
          "required_to_solve": {
            "concepts": ["Dimensional formulae of basic quantities"],
            "formulas": ["[P] = [ML⁻¹T⁻²]"]
          }
        },
        {
          "question_no": 40,
          "year": "AIPMT 2005",
          "question": "The ratio h/I (Planck's constant / moment of inertia) has dimensions of",
          "options": { "a": "time", "b": "frequency", "c": "angular momentum", "d": "velocity" },
          "answer": "b",
          "explanation": "h/I = [ML²T⁻¹]/[ML²] = [T⁻¹] = frequency.",
          "difficulty": "Easy",
          "approach": "theory based + formula based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Planck's constant dimensions", "Moment of inertia dimensions"],
            "formulas": ["[h] = [ML²T⁻¹]", "[I] = [ML²]"]
          }
        },
        {
          "question_no": 41,
          "year": "AIPMT 2006",
          "question": "v = at + b/(t+c). Dimensions of a, b and c are:",
          "options": { "a": "[L],[LT],[LT⁻²]", "b": "[LT⁻²],[L],[T]", "c": "[L²],[T],[LT⁻²]", "d": "[LT⁻²],[LT],[L]" },
          "answer": "b",
          "explanation": "[a] = [LT⁻²], [c] = [T], [b] = [L].",
          "difficulty": "Medium",
          "approach": "theory based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S6, Dimensional Analysis",
          "required_to_solve": {
            "concepts": ["Principle of homogeneity", "Finding dimensions of constants"],
            "formulas": ["[v] = [LT⁻¹]"]
          }
        },
        {
          "question_no": 42,
          "year": "AIPMT 2007",
          "question": "Dimensions of resistance in terms of M, L, T and I would be",
          "options": { "a": "[ML²T⁻²]", "b": "[ML²T⁻¹I⁻¹]", "c": "[ML²T⁻³I⁻²]", "d": "[ML²T⁻³I⁻¹]" },
          "answer": "c",
          "explanation": "R = V/I = [ML²T⁻³A⁻²].",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S12, Dimensions of Electrical Quantities",
          "required_to_solve": {
            "concepts": ["Resistance dimensions", "Ohm's law"],
            "formulas": ["R = V/I", "[V] = [ML²T⁻³A⁻¹]"]
          }
        },
        {
          "question_no": 43,
          "year": "AIPMT 2000",
          "question": "Which pair do not have equal dimensions?",
          "options": { "a": "Energy and torque", "b": "Force and impulse", "c": "Angular momentum and Planck constant", "d": "Elastic modulus and pressure" },
          "answer": "b",
          "explanation": "Force = [MLT⁻²]. Impulse = [MLT⁻¹]. Not same.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S10, Same Dimensions",
          "required_to_solve": {
            "concepts": ["Force vs impulse dimensions"],
            "formulas": ["[F] = [MLT⁻²]", "[Impulse] = [MLT⁻¹]"]
          }
        },
        {
          "question_no": 44,
          "year": "AIPMT 2001",
          "question": "Dimensions of Planck's constant equals that of",
          "options": { "a": "energy", "b": "momentum", "c": "angular momentum", "d": "power" },
          "answer": "c",
          "explanation": "h = [ML²T⁻¹]. Angular momentum = [ML²T⁻¹].",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Planck's constant", "Angular momentum"],
            "formulas": ["[h] = [ML²T⁻¹]"]
          }
        },
        {
          "question_no": 45,
          "year": "AIPMT 2004",
          "question": "Dimensions of universal gravitational constant are",
          "options": { "a": "[M⁻¹L³T⁻²]", "b": "[ML²T⁻¹]", "c": "[M⁻²L³T⁻²]", "d": "[M⁻²L²T⁻¹]" },
          "answer": "a",
          "explanation": "G = Fr²/(m₁m₂) = [M⁻¹L³T⁻²].",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S9, Dimensions of Constants",
          "required_to_solve": {
            "concepts": ["Newton's law of gravitation"],
            "formulas": ["F = Gm₁m₂/r²"]
          }
        }
      ]
    },
    {
      "topic": "Vernier Calipers",
      "questions": [
        {
          "question_no": 46,
          "year": "NEET 2025",
          "question": "10 VSD = 9 MSD. Least division = 0.1 cm. Zero of VS at 0.1 cm. MSR = 5 cm, coinciding division = 8. Diameter after correction:",
          "options": { "a": "4.98 cm", "b": "5.00 cm", "c": "5.18 cm", "d": "5.08 cm" },
          "answer": "a",
          "explanation": "LC = 0.01 cm. Zero error = +0.1 cm. Reading = 5 + 0.08 − 0.1 = 4.98 cm.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Vernier Calipers",
          "required_to_solve": {
            "concepts": ["Least count", "Zero error correction", "Positive zero error"],
            "formulas": ["LC = 1 MSD − 1 VSD", "Reading = MSR + VSR × LC − Zero error"]
          }
        },
        {
          "question_no": 47,
          "year": "NEET 2026",
          "question": "20 VSD = 16 MSD (1 mm each). Least count is:",
          "options": { "a": "0.2 cm", "b": "0.01 cm", "c": "0.02 cm", "d": "0.1 cm" },
          "answer": "c",
          "explanation": "1 VSD = 0.8 MSD. LC = 0.2 mm = 0.02 cm.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Vernier Calipers",
          "required_to_solve": {
            "concepts": ["Least count calculation"],
            "formulas": ["LC = 1 MSD − 1 VSD"]
          }
        },
        {
          "question_no": 48,
          "year": "RE-NEET 2026",
          "question": "1 MSD = 1 mm, 10 VS divisions. 4th VSD coincides when jaws closed (left shift). Measured = 1 cm. Actual length:",
          "options": { "a": "1.04 cm", "b": "0.60 cm", "c": "0.96 cm", "d": "1.00 cm" },
          "answer": "a",
          "explanation": "LC = 0.01 cm. Negative zero error. Actual = 1 − (−0.04) = 1.04 cm.",
          "difficulty": "Medium",
          "approach": "theory based + formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Vernier Calipers",
          "required_to_solve": {
            "concepts": ["Negative zero error", "Zero error correction"],
            "formulas": ["Actual = Measured − Zero error"]
          }
        },
        {
          "question_no": 49,
          "year": "NEET 2024",
          "question": "(N+1) VSD = N MSD. 1 MSD = 0.1 mm. Vernier constant in cm:",
          "options": { "a": "10N", "b": "1/(100(N+1))", "c": "0.0N", "d": "10(N+1)" },
          "answer": "b",
          "explanation": "LC = 1/(N+1) × 0.1 mm = 1/(100(N+1)) cm.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Vernier Calipers",
          "required_to_solve": {
            "concepts": ["Vernier constant formula"],
            "formulas": ["LC = 1 MSD/(N+1)"]
          }
        }
      ]
    },
    {
      "topic": "Screw Gauge",
      "questions": [
        {
          "question_no": 50,
          "year": "NEET 2021",
          "question": "MSR = 0 mm, CSR = 52 divisions. 1 mm = 100 divisions. Diameter:",
          "options": { "a": "0.052 cm", "b": "0.52 cm", "c": "0.026 cm", "d": "0.26 cm" },
          "answer": "a",
          "explanation": "LC = 0.01 mm. D = 52 × 0.01 = 0.52 mm = 0.052 cm.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S15, Screw Gauge",
          "required_to_solve": {
            "concepts": ["Screw gauge least count", "Reading a screw gauge"],
            "formulas": ["LC = Pitch/N", "Reading = MSR + CSR × LC"]
          }
        },
        {
          "question_no": 51,
          "year": "NEET 2024 (Re-Examination)",
          "question": "Pitch = 1 mm, 100 circular divisions. PSR = 1 mm, 63rd division coincides. Diameter:",
          "options": { "a": "1.63 cm", "b": "0.163 cm", "c": "0.163 m", "d": "1.63 m" },
          "answer": "b",
          "explanation": "D = 1 + 0.63 = 1.63 mm = 0.163 cm.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S15, Screw Gauge",
          "required_to_solve": {
            "concepts": ["Pitch", "Least count", "Unit conversion"],
            "formulas": ["LC = Pitch/N", "D = MSR + CSR × LC"]
          }
        },
        {
          "question_no": 52,
          "year": "NEET 2018",
          "question": "LC = 0.001 cm. MSR = 5 mm. CSR = 25. Zero error = −0.004 cm. Correct diameter:",
          "options": { "a": "0.521 cm", "b": "0.525 cm", "c": "0.053 cm", "d": "0.529 cm" },
          "answer": "d",
          "explanation": "D = 0.5 + 0.025 − (−0.004) = 0.529 cm.",
          "difficulty": "Medium",
          "approach": "theory based + formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S15, Screw Gauge",
          "required_to_solve": {
            "concepts": ["Zero error correction", "Negative zero error"],
            "formulas": ["D = MSR + CSR × LC − Zero error"]
          }
        }
      ]
    }
  ]
};
