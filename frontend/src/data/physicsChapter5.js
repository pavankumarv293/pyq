export const physicsChapter5 = {
  "chapter": "Work, Energy and Power",
  "chapter_no": 5,
  "exam": "NEET PYQs",
  "total_questions": 18,
  "sections": [
    {
      "topic": "Work Done by a Force",
      "questions": [
        {
          "question_no": 1,
          "year": "NEET 2016",
          "question": "A force F⃗ = (5î + 3ĵ) N acts on a body. Displacement d⃗ = (6î + 2ĵ) m. Work done is:",
          "options": { "a": "36 J", "b": "30 J", "c": "6 J", "d": "42 J" },
          "answer": "a",
          "explanation": "W = F⃗ · d⃗ = 5×6 + 3×2 = 30 + 6 = 36 J.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Work as Dot Product",
          "required_to_solve": {
            "concepts": ["Work as dot product of force and displacement"],
            "formulas": ["W = F⃗ · d⃗ = Fx·dx + Fy·dy"]
          }
        },
        {
          "question_no": 2,
          "year": "NEET 2019",
          "question": "Work done by gravity on a body of mass 2 kg moving horizontally for 5 m (g = 10 m/s²) is:",
          "options": { "a": "0 J", "b": "100 J", "c": "10 J", "d": "−100 J" },
          "answer": "a",
          "explanation": "Gravity acts vertically downward; displacement is horizontal. θ = 90°. W = Fd cosθ = Fd × 0 = 0.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S2, Zero Work",
          "required_to_solve": {
            "concepts": ["Work done when force perpendicular to displacement"],
            "formulas": ["W = Fd cosθ; θ = 90° → W = 0"]
          }
        },
        {
          "question_no": 3,
          "year": "AIPMT 2011",
          "question": "A body of mass 5 kg moves up a frictionless incline of 30°, distance 10 m (g = 10 m/s²). Work done by gravity is:",
          "options": { "a": "−250 J", "b": "250 J", "c": "−500 J", "d": "500 J" },
          "answer": "a",
          "explanation": "Height gained h = 10 sin30° = 5 m. W_gravity = −mgh = −5×10×5 = −250 J.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S3, Work by Gravity on Incline",
          "required_to_solve": {
            "concepts": ["Work done by gravity = −mgh"],
            "formulas": ["W_gravity = −mgh", "h = d sinθ"]
          }
        },
        {
          "question_no": 4,
          "year": "NEET 2022",
          "question": "A force-displacement graph forms a trapezium with parallel sides 4 m and 8 m, and height 5 N. Work done is:",
          "options": { "a": "30 J", "b": "20 J", "c": "40 J", "d": "60 J" },
          "answer": "a",
          "explanation": "W = Area of trapezoid = ½(4 + 8)×5 = ½×12×5 = 30 J.",
          "difficulty": "Medium",
          "approach": "graphical + formula based",
          "image_path": null,
          "similarity_tag": "S4, Work from F-x Graph",
          "required_to_solve": {
            "concepts": ["Work = area under F-x graph"],
            "formulas": ["W = Area under F-x graph"]
          }
        }
      ]
    },
    {
      "topic": "Kinetic Energy & Work-Energy Theorem",
      "questions": [
        {
          "question_no": 5,
          "year": "NEET 2021",
          "question": "A 2 kg object starts from rest. A force of 10 N acts for 5 m. Final velocity is:",
          "options": { "a": "5√2 m/s", "b": "5 m/s", "c": "10 m/s", "d": "√50 m/s" },
          "answer": "a",
          "explanation": "W = Fd = 10×5 = 50 J. Work-energy theorem: ½mv² = 50 → v² = 50 → v = 5√2 m/s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S5, Work-Energy Theorem",
          "required_to_solve": {
            "concepts": ["Work-energy theorem"],
            "formulas": ["W = ΔKE = ½mv² − ½mu²"]
          }
        },
        {
          "question_no": 6,
          "year": "NEET 2020",
          "question": "A car of mass 1000 kg doubles its speed from 20 m/s to 40 m/s. Change in KE is:",
          "options": { "a": "6 × 10⁵ J", "b": "3 × 10⁵ J", "c": "12 × 10⁵ J", "d": "1.5 × 10⁵ J" },
          "answer": "a",
          "explanation": "ΔKE = ½m(v² − u²) = ½×1000×(1600 − 400) = 500×1200 = 6×10⁵ J.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Kinetic Energy",
          "required_to_solve": {
            "concepts": ["Kinetic energy formula"],
            "formulas": ["KE = ½mv²", "ΔKE = ½m(v² − u²)"]
          }
        },
        {
          "question_no": 7,
          "year": "AIPMT 2009",
          "question": "A body with KE = E₀ is brought to rest by friction. Work done by friction is:",
          "options": { "a": "−E₀", "b": "E₀", "c": "0", "d": "2E₀" },
          "answer": "a",
          "explanation": "By work-energy theorem: W_friction = ΔKE = 0 − E₀ = −E₀.",
          "difficulty": "Easy",
          "approach": "conceptual + formula based",
          "image_path": null,
          "similarity_tag": "S5, Work-Energy Theorem",
          "required_to_solve": {
            "concepts": ["Work-energy theorem", "Friction always does negative work"],
            "formulas": ["W_net = ΔKE"]
          }
        },
        {
          "question_no": 8,
          "year": "NEET 2023",
          "question": "A bullet of mass 0.04 kg moving at 200 m/s embeds in a block of 1.96 kg. Speed of block after collision is:",
          "options": { "a": "4 m/s", "b": "8 m/s", "c": "2 m/s", "d": "200 m/s" },
          "answer": "a",
          "explanation": "Conservation of momentum: 0.04×200 = (0.04 + 1.96)v → 8 = 2v → v = 4 m/s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, Perfectly Inelastic Collision",
          "required_to_solve": {
            "concepts": ["Perfectly inelastic collision", "Conservation of momentum"],
            "formulas": ["m₁u₁ = (m₁ + m₂)v"]
          }
        }
      ]
    },
    {
      "topic": "Potential Energy & Conservation of Energy",
      "questions": [
        {
          "question_no": 9,
          "year": "NEET 2017",
          "question": "A 2 kg ball is at a height of 5 m above ground (g = 10 m/s²). Its gravitational PE is:",
          "options": { "a": "100 J", "b": "50 J", "c": "200 J", "d": "10 J" },
          "answer": "a",
          "explanation": "PE = mgh = 2×10×5 = 100 J.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S8, Gravitational PE",
          "required_to_solve": {
            "concepts": ["Gravitational potential energy"],
            "formulas": ["PE = mgh"]
          }
        },
        {
          "question_no": 10,
          "year": "NEET 2019",
          "question": "A spring of spring constant 200 N/m is compressed by 0.1 m. Elastic potential energy stored is:",
          "options": { "a": "1 J", "b": "2 J", "c": "0.5 J", "d": "10 J" },
          "answer": "a",
          "explanation": "U = ½kx² = ½×200×0.01 = 1 J.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S9, Spring Potential Energy",
          "required_to_solve": {
            "concepts": ["Spring potential energy"],
            "formulas": ["U = ½kx²"]
          }
        },
        {
          "question_no": 11,
          "year": "NEET 2019",
          "question": "A stone of 0.2 kg is dropped from 20 m height (g = 10 m/s²). Speed just before hitting ground is:",
          "options": { "a": "20 m/s", "b": "10 m/s", "c": "40 m/s", "d": "200 m/s" },
          "answer": "a",
          "explanation": "By energy conservation: ½mv² = mgh → v = √(2gh) = √(2×10×20) = 20 m/s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S10, Conservation of Energy",
          "required_to_solve": {
            "concepts": ["Conservation of mechanical energy"],
            "formulas": ["v = √(2gh)"]
          }
        },
        {
          "question_no": 12,
          "year": "NEET 2022",
          "question": "A body of mass 2 kg falls from height 10 m to 5 m. KE gained (g = 10 m/s²) is:",
          "options": { "a": "100 J", "b": "200 J", "c": "50 J", "d": "300 J" },
          "answer": "a",
          "explanation": "ΔKE = ΔPE = mgΔh = 2×10×(10 − 5) = 100 J.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S10, Conservation of Energy",
          "required_to_solve": {
            "concepts": ["PE converts to KE during free fall"],
            "formulas": ["ΔKE = mg Δh"]
          }
        }
      ]
    },
    {
      "topic": "Power",
      "questions": [
        {
          "question_no": 13,
          "year": "NEET 2016",
          "question": "A pump raises 600 kg of water per minute to height 10 m (g = 10 m/s²). Power of pump is:",
          "options": { "a": "1 kW", "b": "10 kW", "c": "100 W", "d": "60 kW" },
          "answer": "a",
          "explanation": "P = mgh/t = 600×10×10/60 = 60000/60 = 1000 W = 1 kW.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S11, Power of Pump",
          "required_to_solve": {
            "concepts": ["Power of a pump"],
            "formulas": ["P = mgh/t"]
          }
        },
        {
          "question_no": 14,
          "year": "AIPMT 2010",
          "question": "A car engine develops 100 kW. Car travels at 36 km/h. Net traction force on car is:",
          "options": { "a": "10000 N", "b": "1000 N", "c": "100 N", "d": "100000 N" },
          "answer": "a",
          "explanation": "v = 36 km/h = 10 m/s. P = Fv → F = P/v = 100000/10 = 10000 N.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S12, Power = Fv",
          "required_to_solve": {
            "concepts": ["Power = Force × Velocity"],
            "formulas": ["P = Fv → F = P/v"]
          }
        },
        {
          "question_no": 15,
          "year": "NEET 2023",
          "question": "A machine of power P increases speed of mass m from v to 3v. Time taken is:",
          "options": { "a": "4mv²/P", "b": "8mv²/P", "c": "mv²/P", "d": "2mv²/P" },
          "answer": "a",
          "explanation": "W = ΔKE = ½m(9v² − v²) = 4mv². P × t = 4mv² → t = 4mv²/P.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S13, Power and Time",
          "required_to_solve": {
            "concepts": ["Work-energy theorem with power"],
            "formulas": ["P × t = ΔKE", "t = ΔKE/P"]
          }
        }
      ]
    },
    {
      "topic": "Collisions",
      "questions": [
        {
          "question_no": 16,
          "year": "NEET 2017",
          "question": "In a perfectly elastic collision between two equal masses, one initially at rest. After collision:",
          "options": { "a": "first stops, second moves with initial speed of first", "b": "both move with half speed", "c": "first continues with same speed", "d": "both stop" },
          "answer": "a",
          "explanation": "In elastic collision between equal masses: the striking body stops and the stationary one moves with initial speed.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S14, Elastic Collision Equal Masses",
          "required_to_solve": {
            "concepts": ["Elastic collision between equal masses"],
            "formulas": ["Conservation of momentum + KE"]
          }
        },
        {
          "question_no": 17,
          "year": "NEET 2020",
          "question": "Coefficient of restitution e is defined as:",
          "options": { "a": "relative velocity of separation / relative velocity of approach", "b": "relative velocity of approach / relative velocity of separation", "c": "final KE / initial KE", "d": "change in momentum / time" },
          "answer": "a",
          "explanation": "e = (v₂ − v₁)/(u₁ − u₂) = relative velocity of separation / relative velocity of approach.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S15, Coefficient of Restitution",
          "required_to_solve": {
            "concepts": ["Coefficient of restitution definition"],
            "formulas": ["e = (v₂ − v₁)/(u₁ − u₂)"]
          }
        },
        {
          "question_no": 18,
          "year": "NEET 2018",
          "question": "A ball of 2 kg moving at 10 m/s collides elastically with an identical ball at rest. KE transferred to second ball is:",
          "options": { "a": "100 J", "b": "50 J", "c": "200 J", "d": "0 J" },
          "answer": "a",
          "explanation": "Elastic collision between equal masses: all KE transfers. Initial KE = ½×2×100 = 100 J transferred.",
          "difficulty": "Medium",
          "approach": "conceptual + formula based",
          "image_path": null,
          "similarity_tag": "S14, Elastic Collision Equal Masses",
          "required_to_solve": {
            "concepts": ["KE transfer in elastic collision between equal masses"],
            "formulas": ["KE_transferred = ½m₁u₁² (100% for equal masses)"]
          }
        }
      ]
    }
  ]
};
