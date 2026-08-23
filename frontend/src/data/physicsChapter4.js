export const physicsChapter4 = {
  "chapter": "Laws of Motion",
  "chapter_no": 4,
  "exam": "NEET PYQs",
  "total_questions": 22,
  "sections": [
    {
      "topic": "Newton's Laws & Inertia",
      "questions": [
        {
          "question_no": 1,
          "year": "NEET 2013",
          "question": "A force acts on a body for time t. If the force is halved and time is doubled, the impulse will be:",
          "options": { "a": "unchanged", "b": "doubled", "c": "halved", "d": "quadrupled" },
          "answer": "a",
          "explanation": "Impulse J = Ft. New J = (F/2)×2t = Ft. Impulse remains unchanged.",
          "difficulty": "Easy",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S1, Impulse",
          "required_to_solve": {
            "concepts": ["Impulse = Force × Time"],
            "formulas": ["J = Ft = Δp"]
          }
        },
        {
          "question_no": 2,
          "year": "NEET 2018",
          "question": "A force F⃗ = (3î + 4ĵ) N acts on a body of mass 5 kg. The acceleration of the body is:",
          "options": { "a": "1 m/s²", "b": "5 m/s²", "c": "0.5 m/s²", "d": "2 m/s²" },
          "answer": "a",
          "explanation": "|F| = √(3² + 4²) = 5 N. a = F/m = 5/5 = 1 m/s².",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S2, Newton's Second Law",
          "required_to_solve": {
            "concepts": ["Magnitude of vector force", "Newton's 2nd law"],
            "formulas": ["F = ma", "|F| = √(Fx² + Fy²)"]
          }
        },
        {
          "question_no": 3,
          "year": "AIPMT 2015",
          "question": "Newton's first law of motion defines:",
          "options": { "a": "force", "b": "inertia", "c": "energy", "d": "momentum" },
          "answer": "b",
          "explanation": "Newton's first law defines inertia — the tendency of a body to resist change in its state of motion.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S3, Newton's First Law",
          "required_to_solve": {
            "concepts": ["Newton's first law and inertia"],
            "formulas": ["None — conceptual"]
          }
        },
        {
          "question_no": 4,
          "year": "NEET 2016",
          "question": "A ball of mass m is thrown at an angle θ. At the highest point, the net force on the ball is:",
          "options": { "a": "mg downward", "b": "mg upward", "c": "zero", "d": "mg cosθ" },
          "answer": "a",
          "explanation": "At the highest point, gravity (mg) still acts downward. No other force acts (air resistance ignored).",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S4, Force on Projectile",
          "required_to_solve": {
            "concepts": ["Gravity always acts downward", "Force at highest point"],
            "formulas": ["F = mg downward always"]
          }
        },
        {
          "question_no": 5,
          "year": "NEET 2020",
          "question": "A 2 kg body moving at 10 m/s collides with a wall and bounces back at the same speed. If collision time = 0.1 s, the force exerted is:",
          "options": { "a": "400 N", "b": "200 N", "c": "100 N", "d": "800 N" },
          "answer": "a",
          "explanation": "Δp = m×Δv = 2×(10−(−10)) = 40 N·s. F = Δp/Δt = 40/0.1 = 400 N.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S5, Impulse and Force",
          "required_to_solve": {
            "concepts": ["Change in momentum on elastic wall collision"],
            "formulas": ["F = Δp/Δt", "Δp = m(v − u)"]
          }
        }
      ]
    },
    {
      "topic": "Friction",
      "questions": [
        {
          "question_no": 6,
          "year": "NEET 2014",
          "question": "A block on a rough surface is pulled by a horizontal force of 10 N but remains stationary. The friction force on the block is:",
          "options": { "a": "10 N", "b": "more than 10 N", "c": "0 N", "d": "depends on μ alone" },
          "answer": "a",
          "explanation": "Since block is stationary, static friction equals applied force = 10 N (self-adjusting).",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S6, Static Friction",
          "required_to_solve": {
            "concepts": ["Static friction is self-adjusting"],
            "formulas": ["f_static = F_applied (when body is at rest)"]
          }
        },
        {
          "question_no": 7,
          "year": "NEET 2019",
          "question": "A 10 kg block is on a surface with μk = 0.3 (g = 10 m/s²). The kinetic friction force is:",
          "options": { "a": "30 N", "b": "300 N", "c": "3 N", "d": "3000 N" },
          "answer": "a",
          "explanation": "f_k = μk × N = 0.3 × 10 × 10 = 30 N.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, Kinetic Friction",
          "required_to_solve": {
            "concepts": ["Kinetic friction formula"],
            "formulas": ["f_k = μk × N = μk × mg"]
          }
        },
        {
          "question_no": 8,
          "year": "AIPMT 2011",
          "question": "A block of 5 kg is on an incline of 30°. If μs = 0.7, will the block remain at rest? (g = 10 m/s²)",
          "options": { "a": "Yes — max static friction exceeds component along incline", "b": "No — it slides down", "c": "It depends on block size", "d": "It slides up" },
          "answer": "a",
          "explanation": "F_along = mg sin30° = 25 N. f_max = μs mg cos30° = 0.7×5×10×0.866 = 30.3 N > 25 N. Block is at rest.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S8, Block on Incline",
          "required_to_solve": {
            "concepts": ["Inclined plane force analysis", "Static friction limit"],
            "formulas": ["F_along = mg sinθ", "f_max = μs mg cosθ"]
          }
        },
        {
          "question_no": 9,
          "year": "NEET 2022",
          "question": "A block just starts sliding when angle of incline = 30°. The coefficient of static friction μs is:",
          "options": { "a": "1/√3", "b": "√3", "c": "1/√2", "d": "1/2" },
          "answer": "a",
          "explanation": "At limiting angle θ: μs = tan θ = tan 30° = 1/√3 ≈ 0.577.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S9, Angle of Repose",
          "required_to_solve": {
            "concepts": ["Angle of repose", "Limiting friction"],
            "formulas": ["μs = tan θ (at angle of repose)"]
          }
        },
        {
          "question_no": 10,
          "year": "NEET 2021",
          "question": "A 2 kg block on a rough surface has μk = 0.5. A horizontal force of 15 N is applied. Acceleration (g = 10 m/s²) is:",
          "options": { "a": "2.5 m/s²", "b": "7.5 m/s²", "c": "5 m/s²", "d": "1.5 m/s²" },
          "answer": "a",
          "explanation": "Friction = μk×mg = 0.5×2×10 = 10 N. Net force = 15 − 10 = 5 N. a = 5/2 = 2.5 m/s².",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S7, Kinetic Friction",
          "required_to_solve": {
            "concepts": ["Net force with friction", "Newton's second law"],
            "formulas": ["F_net = F − f_k", "a = F_net/m"]
          }
        },
        {
          "question_no": 11,
          "year": "NEET 2017",
          "question": "Angle of friction equals angle of repose. This implies:",
          "options": { "a": "tan (angle of friction) = μs", "b": "angle of repose > angle of friction", "c": "angle of repose < angle of friction", "d": "they are unrelated" },
          "answer": "a",
          "explanation": "Both angle of friction and angle of repose have the same tangent = μs, so they are equal.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S9, Angle of Repose",
          "required_to_solve": {
            "concepts": ["Angle of friction = angle of repose"],
            "formulas": ["tan θ = μs"]
          }
        },
        {
          "question_no": 12,
          "year": "NEET 2023",
          "question": "A monkey of mass 40 kg climbs a rope with max safe tension 600 N (g = 10 m/s²). Minimum upward acceleration that breaks rope:",
          "options": { "a": "5 m/s²", "b": "2.5 m/s²", "c": "10 m/s²", "d": "15 m/s²" },
          "answer": "a",
          "explanation": "T = m(g + a). 600 = 40(10 + a) → a = 5 m/s².",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S10, Climbing Rope",
          "required_to_solve": {
            "concepts": ["Apparent weight while accelerating up"],
            "formulas": ["T = m(g + a)"]
          }
        }
      ]
    },
    {
      "topic": "Connected Bodies & Pulleys",
      "questions": [
        {
          "question_no": 13,
          "year": "NEET 2018",
          "question": "In an Atwood machine, masses are 3 kg and 5 kg. Acceleration (g = 10 m/s²) is:",
          "options": { "a": "2.5 m/s²", "b": "5 m/s²", "c": "1.25 m/s²", "d": "10 m/s²" },
          "answer": "a",
          "explanation": "a = (m₂ − m₁)g/(m₁ + m₂) = (5 − 3)×10/(5 + 3) = 20/8 = 2.5 m/s².",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S11, Atwood Machine",
          "required_to_solve": {
            "concepts": ["Atwood machine acceleration"],
            "formulas": ["a = (m₂ − m₁)g/(m₁ + m₂)"]
          }
        },
        {
          "question_no": 14,
          "year": "NEET 2016",
          "question": "In an Atwood machine with masses 3 kg and 5 kg, tension in string (g = 10 m/s²) is:",
          "options": { "a": "37.5 N", "b": "40 N", "c": "30 N", "d": "50 N" },
          "answer": "a",
          "explanation": "T = 2m₁m₂g/(m₁ + m₂) = 2×3×5×10/8 = 300/8 = 37.5 N.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S11, Atwood Machine",
          "required_to_solve": {
            "concepts": ["Tension in Atwood machine"],
            "formulas": ["T = 2m₁m₂g/(m₁ + m₂)"]
          }
        },
        {
          "question_no": 15,
          "year": "NEET 2020",
          "question": "Two blocks A (3 kg) and B (2 kg) are connected by a string on a smooth horizontal surface. Force 10 N is applied on A. Tension in string between them is:",
          "options": { "a": "4 N", "b": "6 N", "c": "10 N", "d": "2 N" },
          "answer": "a",
          "explanation": "Total mass = 5 kg. a = 10/5 = 2 m/s². Tension = m_B × a = 2 × 2 = 4 N.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S12, Connected Bodies",
          "required_to_solve": {
            "concepts": ["System acceleration", "Tension in connected bodies"],
            "formulas": ["a = F/M_total", "T = m_B × a"]
          }
        }
      ]
    },
    {
      "topic": "Dynamics of Circular Motion",
      "questions": [
        {
          "question_no": 16,
          "year": "NEET 2019",
          "question": "For a vehicle on a banked curve of radius r at speed v, the ideal banking angle θ (no friction) satisfies:",
          "options": { "a": "tan θ = v²/(rg)", "b": "sin θ = v²/(rg)", "c": "cos θ = v²/(rg)", "d": "tan θ = rg/v²" },
          "answer": "a",
          "explanation": "N cosθ = mg and N sinθ = mv²/r → tan θ = v²/(rg).",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S13, Banking of Roads",
          "required_to_solve": {
            "concepts": ["Banked road force analysis"],
            "formulas": ["tan θ = v²/(rg)"]
          }
        },
        {
          "question_no": 17,
          "year": "NEET 2022",
          "question": "Why are curved mountain roads banked?",
          "options": { "a": "To provide centripetal force", "b": "To reduce friction between tires and road", "c": "To increase speed limit", "d": "To reduce normal force" },
          "answer": "a",
          "explanation": "Banking provides a horizontal component of normal force that acts as centripetal force, allowing safe turning.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S13, Banking of Roads",
          "required_to_solve": {
            "concepts": ["Purpose of banking curved roads"],
            "formulas": ["N sinθ = mv²/r (centripetal)"]
          }
        },
        {
          "question_no": 18,
          "year": "NEET 2024",
          "question": "A ball of mass 0.25 kg is attached to a string of length 1 m and makes a horizontal circle at 60 rpm. Tension in string is:",
          "options": { "a": "π² N", "b": "2π² N", "c": "4π² N", "d": "π/2 N" },
          "answer": "a",
          "explanation": "ω = 2π rad/s. T = mω²r = 0.25 × 4π² × 1 = π² N.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S14, Horizontal Circular Motion",
          "required_to_solve": {
            "concepts": ["Centripetal force = Tension in horizontal circle"],
            "formulas": ["ω = 2πn", "T = mω²r"]
          }
        },
        {
          "question_no": 19,
          "year": "AIPMT 2014",
          "question": "A body of mass m is moving in a vertical circle of radius r. Minimum speed at top of circle is:",
          "options": { "a": "√(gr)", "b": "√(2gr)", "c": "√(5gr)", "d": "0" },
          "answer": "a",
          "explanation": "At top, T + mg = mv²/r. Minimum when T = 0: v_min = √(gr).",
          "difficulty": "Medium",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S15, Vertical Circle Minimum Speed",
          "required_to_solve": {
            "concepts": ["Vertical circle at top condition"],
            "formulas": ["v_min (top) = √(gr)"]
          }
        },
        {
          "question_no": 20,
          "year": "NEET 2023",
          "question": "A car moving at speed v on a flat circular track of radius r. Coefficient of friction μ. Condition for not skidding:",
          "options": { "a": "v ≤ √(μrg)", "b": "v ≥ √(μrg)", "c": "v ≤ μrg", "d": "v = μrg" },
          "answer": "a",
          "explanation": "For no skid: centripetal force ≤ friction → mv²/r ≤ μmg → v ≤ √(μrg).",
          "difficulty": "Easy",
          "approach": "formula based + conceptual reasoning",
          "image_path": null,
          "similarity_tag": "S16, Flat Circular Road",
          "required_to_solve": {
            "concepts": ["Friction as centripetal force on flat road"],
            "formulas": ["v_max = √(μrg)"]
          }
        }
      ]
    },
    {
      "topic": "Pseudo Force & Non-Inertial Frames",
      "questions": [
        {
          "question_no": 21,
          "year": "NEET 2015",
          "question": "A person stands in a lift. The lift accelerates upward at 2 m/s². If mass of person is 60 kg (g = 10 m/s²), the reading on weighing scale is:",
          "options": { "a": "720 N", "b": "600 N", "c": "480 N", "d": "60 N" },
          "answer": "a",
          "explanation": "N = m(g + a) = 60(10 + 2) = 720 N.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S17, Apparent Weight in Lift",
          "required_to_solve": {
            "concepts": ["Apparent weight in accelerating lift (upward)"],
            "formulas": ["N = m(g + a)"]
          }
        },
        {
          "question_no": 22,
          "year": "NEET 2024",
          "question": "A man in a lift accelerating downward at 5 m/s² weighs himself. If his true weight is 700 N (g = 10 m/s²), scale reads:",
          "options": { "a": "350 N", "b": "700 N", "c": "1050 N", "d": "250 N" },
          "answer": "a",
          "explanation": "m = 70 kg. N = m(g − a) = 70(10 − 5) = 350 N.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S17, Apparent Weight in Lift",
          "required_to_solve": {
            "concepts": ["Apparent weight in accelerating lift (downward)"],
            "formulas": ["N = m(g − a)"]
          }
        }
      ]
    }
  ]
};
