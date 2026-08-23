export const physicsChapter3 = {
  "chapter": "Motion in a Plane",
  "chapter_no": 3,
  "exam": "NEET PYQs",
  "total_questions": 18,
  "sections": [
    {
      "topic": "Vectors & Scalars",
      "questions": [
        {
          "question_no": 1,
          "year": "NEET 2019",
          "question": "Two forces of 6 N and 8 N act perpendicularly on a body. The resultant force is:",
          "options": { "a": "10 N", "b": "14 N", "c": "2 N", "d": "7 N" },
          "answer": "a",
          "explanation": "R = √(6² + 8²) = √(36 + 64) = √100 = 10 N.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Vector Addition",
          "required_to_solve": {
            "concepts": ["Resultant of perpendicular vectors"],
            "formulas": ["R = √(A² + B²)"]
          }
        },
        {
          "question_no": 2,
          "year": "AIPMT 2013",
          "question": "A vector of magnitude 5 units makes an angle of 60° with the x-axis. Its x-component is:",
          "options": { "a": "2.5", "b": "4.33", "c": "5", "d": "2" },
          "answer": "a",
          "explanation": "x-component = A cosθ = 5 × cos60° = 5 × 0.5 = 2.5.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S2, Components of Vectors",
          "required_to_solve": {
            "concepts": ["Resolution of vectors"],
            "formulas": ["Aₓ = A cosθ", "Aᵧ = A sinθ"]
          }
        },
        {
          "question_no": 3,
          "year": "NEET 2022",
          "question": "The dot product A⃗ · B⃗ = 0 means that:",
          "options": { "a": "vectors are parallel", "b": "vectors are perpendicular", "c": "vectors are equal", "d": "one vector is zero" },
          "answer": "b",
          "explanation": "A⃗ · B⃗ = AB cosθ = 0 → cosθ = 0 → θ = 90°. Vectors are perpendicular.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S3, Dot Product",
          "required_to_solve": {
            "concepts": ["Dot product of perpendicular vectors"],
            "formulas": ["A⃗ · B⃗ = AB cosθ"]
          }
        }
      ]
    },
    {
      "topic": "Projectile Motion",
      "questions": [
        {
          "question_no": 4,
          "year": "NEET 2016",
          "question": "A projectile is thrown at 60° to horizontal with speed 20 m/s. Maximum height (g = 10 m/s²) is:",
          "options": { "a": "15 m", "b": "10 m", "c": "20 m", "d": "30 m" },
          "answer": "a",
          "explanation": "H = u²sin²θ/(2g) = 400 × (3/4)/20 = 300/20 = 15 m.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Projectile Maximum Height",
          "required_to_solve": {
            "concepts": ["Maximum height of projectile"],
            "formulas": ["H = u²sin²θ/(2g)"]
          }
        },
        {
          "question_no": 5,
          "year": "NEET 2019",
          "question": "Horizontal range of a projectile is maximum when the angle of projection is:",
          "options": { "a": "30°", "b": "45°", "c": "60°", "d": "90°" },
          "answer": "b",
          "explanation": "R = u²sin2θ/g. R is maximum when sin2θ = 1 → 2θ = 90° → θ = 45°.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S5, Maximum Range",
          "required_to_solve": {
            "concepts": ["Condition for maximum range"],
            "formulas": ["R = u²sin2θ/g", "R_max at θ = 45°"]
          }
        },
        {
          "question_no": 6,
          "year": "NEET 2021",
          "question": "A projectile at angle 45° with speed u has range R. Its maximum height is:",
          "options": { "a": "R/4", "b": "R/2", "c": "R", "d": "2R" },
          "answer": "a",
          "explanation": "R = u²/g. H = u²sin²45°/(2g) = u²/(4g) = R/4.",
          "difficulty": "Medium",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S6, H and R Relation",
          "required_to_solve": {
            "concepts": ["Relation between max height and range at 45°"],
            "formulas": ["H = u²sin²θ/(2g)", "R = u²sin2θ/g"]
          }
        },
        {
          "question_no": 7,
          "year": "AIPMT 2012",
          "question": "A ball is projected with velocity 20 m/s at 30° to horizontal. Time of flight (g = 10 m/s²) is:",
          "options": { "a": "2 s", "b": "4 s", "c": "1 s", "d": "3 s" },
          "answer": "a",
          "explanation": "T = 2u sinθ/g = 2×20×0.5/10 = 2 s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, Time of Flight",
          "required_to_solve": {
            "concepts": ["Time of flight of projectile"],
            "formulas": ["T = 2u sinθ/g"]
          }
        },
        {
          "question_no": 8,
          "year": "NEET 2018",
          "question": "A projectile has the same range R for two angles θ and (90° − θ). If H₁ and H₂ are the maximum heights, then H₁ × H₂ equals:",
          "options": { "a": "R²/16", "b": "R²/4", "c": "R²/8", "d": "R²" },
          "answer": "a",
          "explanation": "H₁ = u²sin²θ/(2g), H₂ = u²cos²θ/(2g). H₁H₂ = u⁴sin²θcos²θ/(4g²) = (u²sin2θ)²/(16g²) = R²/16.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S8, Complementary Angles",
          "required_to_solve": {
            "concepts": ["Complementary angles of projection", "Product of heights"],
            "formulas": ["H = u²sin²θ/(2g)", "R = u²sin2θ/g"]
          }
        },
        {
          "question_no": 9,
          "year": "NEET 2020",
          "question": "A projectile is thrown at 30° with speed u. Range is 20√3 m. Initial speed u (g = 10 m/s²) is:",
          "options": { "a": "20 m/s", "b": "10 m/s", "c": "40 m/s", "d": "30 m/s" },
          "answer": "a",
          "explanation": "R = u²sin2θ/g → 20√3 = u²×(√3/2)/10 → u² = 400 → u = 20 m/s.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S5, Maximum Range",
          "required_to_solve": {
            "concepts": ["Range formula rearrangement"],
            "formulas": ["R = u²sin2θ/g"]
          }
        },
        {
          "question_no": 10,
          "year": "NEET 2023",
          "question": "A ball is thrown horizontally with 20 m/s from a height of 45 m. Horizontal distance covered when it hits the ground (g = 10 m/s²) is:",
          "options": { "a": "60 m", "b": "45 m", "c": "30 m", "d": "90 m" },
          "answer": "a",
          "explanation": "Time to fall: h = ½gt² → 45 = 5t² → t = 3 s. Range = 20 × 3 = 60 m.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S9, Horizontal Projectile",
          "required_to_solve": {
            "concepts": ["Horizontal throw", "Time of fall"],
            "formulas": ["h = ½gt²", "x = u_x × t"]
          }
        },
        {
          "question_no": 11,
          "year": "NEET 2022",
          "question": "A particle is projected at angle θ with initial KE = E. KE at the highest point is:",
          "options": { "a": "E cos²θ", "b": "E sin²θ", "c": "E", "d": "Zero" },
          "answer": "a",
          "explanation": "At highest point vy = 0; only vx = u cosθ remains. KE = ½m(ucosθ)² = E cos²θ.",
          "difficulty": "Medium",
          "approach": "conceptual + formula based",
          "image_path": null,
          "similarity_tag": "S10, Energy at Highest Point",
          "required_to_solve": {
            "concepts": ["Velocity at highest point of projectile"],
            "formulas": ["vx = u cosθ", "KE = ½mv²"]
          }
        }
      ]
    },
    {
      "topic": "Circular Motion",
      "questions": [
        {
          "question_no": 12,
          "year": "NEET 2017",
          "question": "A car moves in a circle of radius 100 m at 36 km/h. Centripetal acceleration is:",
          "options": { "a": "1 m/s²", "b": "10 m/s²", "c": "0.1 m/s²", "d": "100 m/s²" },
          "answer": "a",
          "explanation": "v = 36 km/h = 10 m/s. a_c = v²/r = 100/100 = 1 m/s².",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S11, Centripetal Acceleration",
          "required_to_solve": {
            "concepts": ["Centripetal acceleration formula"],
            "formulas": ["a_c = v²/r"]
          }
        },
        {
          "question_no": 13,
          "year": "NEET 2019",
          "question": "Banking angle θ for a curved road of radius r at speed v (no friction) is given by:",
          "options": { "a": "tan θ = v²/(rg)", "b": "tan θ = rg/v²", "c": "sin θ = v²/(rg)", "d": "cos θ = v²/(rg)" },
          "answer": "a",
          "explanation": "For banked road without friction: tan θ = v²/(rg).",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S12, Banking of Roads",
          "required_to_solve": {
            "concepts": ["Banking of roads formula"],
            "formulas": ["tan θ = v²/(rg)"]
          }
        },
        {
          "question_no": 14,
          "year": "NEET 2021",
          "question": "A stone of mass 0.5 kg is whirled in a horizontal circle of radius 1 m at 2 revolutions/second. Centripetal force is:",
          "options": { "a": "8π² N", "b": "4π² N", "c": "16π² N", "d": "2π² N" },
          "answer": "a",
          "explanation": "ω = 2×2π = 4π rad/s. F = mω²r = 0.5×16π²×1 = 8π² N.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S13, Centripetal Force",
          "required_to_solve": {
            "concepts": ["Angular velocity to linear", "Centripetal force"],
            "formulas": ["ω = 2πn", "F = mω²r"]
          }
        },
        {
          "question_no": 15,
          "year": "AIPMT 2009",
          "question": "A car travels on a curved road at 72 km/h. Coefficient of friction μ = 0.4 (g = 10 m/s²). Minimum radius of curve to avoid skidding is:",
          "options": { "a": "100 m", "b": "50 m", "c": "200 m", "d": "40 m" },
          "answer": "a",
          "explanation": "v = 20 m/s. For no skid: μmg = mv²/r → r = v²/(μg) = 400/(0.4×10) = 100 m.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Circular Motion Friction",
          "required_to_solve": {
            "concepts": ["Friction provides centripetal force on flat road"],
            "formulas": ["r_min = v²/(μg)"]
          }
        },
        {
          "question_no": 16,
          "year": "NEET 2021",
          "question": "A stone tied to a string of length 0.5 m is rotated in a vertical circle. Minimum speed at the top to maintain taut string (g = 10 m/s²) is:",
          "options": { "a": "√5 m/s", "b": "√10 m/s", "c": "5 m/s", "d": "2√5 m/s" },
          "answer": "a",
          "explanation": "At top, T = 0 for minimum speed: mv²/r = mg → v = √(gr) = √(10×0.5) = √5 m/s.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S15, Vertical Circle",
          "required_to_solve": {
            "concepts": ["Minimum speed at top of vertical circle"],
            "formulas": ["v_min = √(gr)"]
          }
        },
        {
          "question_no": 17,
          "year": "NEET 2022",
          "question": "A vehicle at the top of a hill of radius 100 m. Maximum speed to maintain contact with road (g = 10 m/s²) is:",
          "options": { "a": "10√10 m/s", "b": "10 m/s", "c": "100 m/s", "d": "√10 m/s" },
          "answer": "a",
          "explanation": "At top: mg − N = mv²/r. For contact: N ≥ 0 → v ≤ √(rg) = √(1000) = 10√10 m/s.",
          "difficulty": "Medium",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S15, Vertical Circle",
          "required_to_solve": {
            "concepts": ["Maximum speed at top of hill"],
            "formulas": ["v_max = √(rg)"]
          }
        },
        {
          "question_no": 18,
          "year": "NEET 2018",
          "question": "A river 100 m wide flows at 3 m/s. A boat can travel at 5 m/s in still water. To cross with minimum drift, time taken is:",
          "options": { "a": "25 s", "b": "20 s", "c": "40 s", "d": "50 s" },
          "answer": "a",
          "explanation": "Aim upstream: sin θ = v_river/v_boat = 3/5 → cos θ = 4/5. Effective speed = 5×(4/5) = 4 m/s. t = 100/4 = 25 s.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S16, Boat River Problem",
          "required_to_solve": {
            "concepts": ["River boat problem — minimum drift condition"],
            "formulas": ["sin θ = v_r/v_b", "v_eff = √(v_b² − v_r²)"]
          }
        }
      ]
    }
  ]
};
