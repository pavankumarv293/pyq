export const physicsChapter2 = {
  "chapter": "Motion in a Straight Line",
  "chapter_no": 2,
  "exam": "NEET PYQs",
  "total_questions": 41,
  "sections": [
    {
      "topic": "Average Speed & Velocity",
      "questions": [
        {
          "question_no": 1, "year": "AIPMT 2011 Mains",
          "question": "A particle covers half of its total distance with speed v₁ and the rest half distance with speed v₂. Its average speed during the complete journey is:",
          "options": { "a": "(v₁ + v₂)/2", "b": "2v₁v₂/(v₁ + v₂)", "c": "2v₂/(v₁ + v₂)", "d": "2v₁/(v₁ + v₂)" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "Let total distance = 2S. t₁ = S/v₁, t₂ = S/v₂. Average speed = 2S/(t₁+t₂) = 2v₁v₂/(v₁+v₂).",
          "approach": "formula based", "image_path": null, "similarity_tag": "S1, Average Speed Equal Distance",
          "required_to_solve": { "concepts": ["Average speed for equal distances is harmonic mean"], "formulas": ["v_avg = 2v₁v₂/(v₁+v₂)"] }
        },
        {
          "question_no": 2, "year": "AIPMT 2006",
          "question": "A car runs at constant speed on a circular track of radius 100 m, taking 62.8 s per lap. Average velocity and average speed for each lap respectively are:",
          "options": { "a": "10 m/s, 0", "b": "0, 0", "c": "0, 10 m/s", "d": "10 m/s, 10 m/s" },
          "answer": "c", "difficulty": "Easy",
          "explanation": "For a complete loop displacement = 0, so avg velocity = 0. Distance = 2πr = 628 m; avg speed = 628/62.8 = 10 m/s.",
          "approach": "conceptual + formula based", "image_path": null, "similarity_tag": "S2, Circular Motion Average",
          "required_to_solve": { "concepts": ["Displacement is zero for complete loop", "Average speed ≠ average velocity"], "formulas": ["avg speed = total distance/time", "avg velocity = displacement/time"] }
        },
        {
          "question_no": 3, "year": "AIPMT 2007",
          "question": "A car moves from X to Y with uniform speed vᵤ and returns to Y with uniform speed v_d. The average speed for this round trip is:",
          "options": { "a": "√(vᵤv_d)/2", "b": "2vᵤv_d/(vᵤ + v_d)", "c": "(vᵤ + v_d)/2", "d": "2v_d/(vᵤ + v_d)" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "Equal distances. Average speed = 2vᵤv_d/(vᵤ + v_d) — harmonic mean formula.",
          "approach": "formula based", "image_path": null, "similarity_tag": "S1, Average Speed Equal Distance",
          "required_to_solve": { "concepts": ["Harmonic mean for equal-distance two-speed journey"], "formulas": ["v_avg = 2v₁v₂/(v₁+v₂)"] }
        },
        {
          "question_no": 4, "year": "NEET 2023",
          "question": "A vehicle travels half the distance with speed v and the remaining distance with speed 2v. Its average speed is:",
          "options": { "a": "v", "b": "4v/3", "c": "3v/2", "d": "5v/3" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "t₁ = S/v, t₂ = S/2v. Average speed = 2S/(3S/2v) = 4v/3.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S1, Average Speed Equal Distance",
          "required_to_solve": { "concepts": ["Average speed for equal distances"], "formulas": ["v_avg = 2v₁v₂/(v₁+v₂) = 2v·2v/(v+2v) = 4v/3"] }
        }
      ]
    },
    {
      "topic": "Graphs of Motion",
      "questions": [
        {
          "question_no": 5, "year": "NEET 2026",
          "question": "A ball is thrown vertically upward and falls back. Which velocity-time (v-t) graph correctly shows this motion? (Refer to graphs A, B, C, D below)",
          "options": { "a": "Graph A", "b": "Graph B", "c": "Graph C", "d": "Graph D" },
          "answer": "a", "difficulty": "Easy",
          "explanation": "Gravity is constant downward throughout — v-t graph is a straight line with constant negative slope (deceleration going up, acceleration coming down). This matches Graph A.",
          "approach": "theory based", "image_path": "https://static.prod-images.emergentagent.com/jobs/1972ff1f-1cc8-4887-9ba4-c2804365891d/images/c9ab2c2b0068edb9461974c861dc132152766b6f444463405a94844b421e8ec0.jpeg", "similarity_tag": "S3, v-t Graph Interpretation",
          "required_to_solve": { "concepts": ["Constant acceleration → linear v-t graph", "Slope of v-t = acceleration"], "formulas": ["a = Δv/Δt = constant = −g"] }
        },
        {
          "question_no": 6, "year": "NEET 2022 Phase 1",
          "question": "Displacement-time graphs of two particles P and Q make angles 30° and 45° respectively with the time-axis (see diagram). The ratio of their velocities v_P : v_Q is:",
          "options": { "a": "√3 : 1", "b": "1 : 1", "c": "1 : 2", "d": "1 : √3" },
          "answer": "d", "difficulty": "Easy",
          "explanation": "Slope of x-t graph = velocity. v_P/v_Q = tan30°/tan45° = (1/√3)/1 = 1 : √3.",
          "approach": "formula based + graphical", "image_path": "https://static.prod-images.emergentagent.com/jobs/1972ff1f-1cc8-4887-9ba4-c2804365891d/images/1d7a04e233fef43f63a4fbbdd079c1b200a0010896c42456cf1ea0b84845c5e2.jpeg", "similarity_tag": "S3, v-t Graph Interpretation",
          "required_to_solve": { "concepts": ["Slope of x-t graph = velocity"], "formulas": ["v = tan θ (slope of x-t graph)"] }
        },
        {
          "question_no": 7, "year": "NEET 2022 Phase 2",
          "question": "Which of the following position-time (x-t) graphs represents positive acceleration? (Refer to graphs 1, 2, 3, 4 below)",
          "options": { "a": "Graph 1", "b": "Graph 2", "c": "Graph 3", "d": "Graph 4" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "Positive acceleration means velocity increases with time. On x-t graph, the slope must increase → concave upward parabola. This matches Graph 2.",
          "approach": "theory based", "image_path": "https://static.prod-images.emergentagent.com/jobs/1972ff1f-1cc8-4887-9ba4-c2804365891d/images/740087e0d1be8f3cba545e15635e2ebfbfa823967eee0b683beb6b93315b7106.jpeg", "similarity_tag": "S4, x-t Graph Shape",
          "required_to_solve": { "concepts": ["Positive acceleration = increasing slope on x-t graph"], "formulas": ["x = ut + ½at² (parabola when a > 0)"] }
        },
        {
          "question_no": 8, "year": "NEET 2024",
          "question": "A v-t graph (top) shows: constant velocity → linearly increasing velocity → constant velocity again. Which of the a-t graphs (A, B, C, D) below best matches this motion?",
          "options": { "a": "Graph A", "b": "Graph B", "c": "Graph C", "d": "Graph D" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "Constant velocity → a = 0. Linear increase in v → constant positive a. Constant velocity again → a = 0. So a-t is a rectangular pulse = Graph A.",
          "approach": "theory based + graphical", "image_path": "https://static.prod-images.emergentagent.com/jobs/1972ff1f-1cc8-4887-9ba4-c2804365891d/images/6a369c0d87a5b289c93fb8423fca0d4fc68ba222363382da3b95491a6b9ea3ca.jpeg", "similarity_tag": "S3, v-t Graph Interpretation",
          "required_to_solve": { "concepts": ["Slope of v-t = acceleration", "Constant slope → constant a"], "formulas": ["a = dv/dt"] }
        }
      ]
    },
    {
      "topic": "Equations of Motion",
      "questions": [
        {
          "question_no": 9, "year": "NEET 2021",
          "question": "A small block slides down a smooth inclined plane from rest. Sₙ is distance in interval t = n−1 to t = n. Ratio Sₙ/Sₙ₊₁ is:",
          "options": { "a": "(2n−1)/(2n+1)", "b": "(2n−1)/2n", "c": "(2n+1)/(2n−1)", "d": "2n/(2n+1)" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "Sₙ = a(2n−1)/2. Sₙ₊₁ = a(2n+1)/2. Ratio = (2n−1)/(2n+1).",
          "approach": "formula based", "image_path": null, "similarity_tag": "S5, Distance in nth Second",
          "required_to_solve": { "concepts": ["Distance in nth second from rest"], "formulas": ["Sₙ = u + a(2n−1)/2; u=0 → Sₙ = a(2n−1)/2"] }
        },
        {
          "question_no": 10, "year": "AIPMT 2008",
          "question": "A particle starts from rest with constant acceleration. Distances covered in first 10 s and first 20 s are S₁ and S₂. Then:",
          "options": { "a": "S₂ = 3S₁", "b": "S₂ = 4S₁", "c": "S₂ = S₁", "d": "S₂ = 2S₁" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "s = ½at². S₁ = ½a(100) = 50a. S₂ = ½a(400) = 200a. S₂/S₁ = 4.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S6, Uniform Acceleration Distance",
          "required_to_solve": { "concepts": ["s ∝ t² from rest"], "formulas": ["s = ½at²"] }
        },
        {
          "question_no": 11, "year": "AIPMT 2008",
          "question": "A particle moves with constant acceleration, velocity changing from 10 m/s to 20 m/s through 135 m. Time taken is:",
          "options": { "a": "12 s", "b": "9 s", "c": "10 s", "d": "1.8 s" },
          "answer": "b", "difficulty": "Medium",
          "explanation": "a = (v²−u²)/2s = (400−100)/270 = 10/9 m/s². t = (v−u)/a = 10/(10/9) = 9 s.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S6, Uniform Acceleration Distance",
          "required_to_solve": { "concepts": ["Equations of motion"], "formulas": ["v² = u² + 2as", "v = u + at"] }
        },
        {
          "question_no": 12, "year": "NEET 2022 Phase 1",
          "question": "The ratio of distances travelled by a freely falling body in 1st, 2nd, 3rd and 4th second is:",
          "options": { "a": "1 : 2 : 3 : 4", "b": "1 : 4 : 9 : 16", "c": "1 : 3 : 5 : 7", "d": "1 : 1 : 1 : 1" },
          "answer": "c", "difficulty": "Easy",
          "explanation": "Sₙ = g(2n−1)/2 from rest. S₁ : S₂ : S₃ : S₄ = 1 : 3 : 5 : 7.",
          "approach": "formula based", "image_path": null, "similarity_tag": "S5, Distance in nth Second",
          "required_to_solve": { "concepts": ["Distance in successive seconds from rest: odd numbers"], "formulas": ["Sₙ = g(2n−1)/2"] }
        },
        {
          "question_no": 13, "year": "AIPMT 2009",
          "question": "A particle starts from rest and covers S₁ in first 10 s and S₂ in first 20 s under constant force. Then:",
          "options": { "a": "S₂ = 3S₁", "b": "S₂ = 4S₁", "c": "S₂ = S₁", "d": "S₂ = 2S₁" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "S ∝ t² (from rest). S₂/S₁ = (20)²/(10)² = 400/100 = 4.",
          "approach": "formula based", "image_path": null, "similarity_tag": "S6, Uniform Acceleration Distance",
          "required_to_solve": { "concepts": ["Distance proportional to t² from rest"], "formulas": ["s = ½at²"] }
        }
      ]
    },
    {
      "topic": "Kinematics Using Calculus",
      "questions": [
        {
          "question_no": 14, "year": "NEET 2024 (Re-Examination)",
          "question": "Position of a particle: x = αt³ + βt² + γt + δ. Ratio of initial velocity to initial acceleration is:",
          "options": { "a": "2α : δ", "b": "γ : 2β", "c": "4α : β", "d": "γ : 2β" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "v = 3αt² + 2βt + γ; v(0) = γ. a = 6αt + 2β; a(0) = 2β. Ratio = γ : 2β.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Velocity = dx/dt", "Acceleration = dv/dt", "Initial means t = 0"], "formulas": ["v = dx/dt", "a = dv/dt"] }
        },
        {
          "question_no": 15, "year": "RE-NEET 2026",
          "question": "Position: s(t) = t² − 6t + 5. Average speed from t = 0 to t = 6 s is:",
          "options": { "a": "0", "b": "12", "c": "6", "d": "3" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "v = 2t−6 = 0 at t = 3. s(0)=5, s(3)=−4, s(6)=5. Total distance = |−4−5| + |5−(−4)| = 9+9 = 18 m. Avg speed = 18/6 = 3 m/s.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S8, Average Speed with Direction Change",
          "required_to_solve": { "concepts": ["Total distance ≠ displacement when direction changes", "Find turning point: v=0"], "formulas": ["v = ds/dt = 0 for turning point", "avg speed = total distance/time"] }
        },
        {
          "question_no": 16, "year": "NEET 2016 Phase 2",
          "question": "Positions of cars P and Q: xₚ = at + bt², x_Q = ft − t². When do they have same velocity?",
          "options": { "a": "(a−f)/2(b+1)", "b": "(a+f)/2(b−1)", "c": "(a+f)/2(b+1)", "d": "(f−a)/2(b+1)" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "vₚ = a+2bt, v_Q = f−2t. Set equal: a+2bt = f−2t → t(2b+2) = f−a → t = (f−a)/2(b+1).",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Velocity = dx/dt", "Set v₁ = v₂ and solve for t"], "formulas": ["v = dx/dt"] }
        },
        {
          "question_no": 17, "year": "NEET 2013 (Karnataka)",
          "question": "t = √x + 3. Displacement of particle when velocity is zero is:",
          "options": { "a": "4 m", "b": "0 m", "c": "6 m", "d": "2 m" },
          "answer": "b", "difficulty": "Medium",
          "explanation": "x = (t−3)². v = dx/dt = 2(t−3). v=0 when t=3. x(3) = 0.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Rearrange t = √x+3 to get x(t)", "v = dx/dt = 0 for rest"], "formulas": ["x = (t−3)²", "v = dx/dt"] }
        },
        {
          "question_no": 18, "year": "AIPMT 2015 Cancelled Paper",
          "question": "v(x) = βx⁻²ⁿ. Acceleration of the particle as function of x is:",
          "options": { "a": "−2β²x⁻²ⁿ⁺¹", "b": "−2nβ²x⁻⁴ⁿ⁺¹", "c": "−2nβx⁻²ⁿ⁻¹", "d": "−2β²x⁻⁴ⁿ⁻¹" },
          "answer": "b", "difficulty": "Hard",
          "explanation": "a = v(dv/dx). dv/dx = −2nβx⁻²ⁿ⁻¹. a = (βx⁻²ⁿ)(−2nβx⁻²ⁿ⁻¹) = −2nβ²x⁻⁴ⁿ⁻¹.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S9, Velocity as Function of Position",
          "required_to_solve": { "concepts": ["a = v(dv/dx)"], "formulas": ["a = v·dv/dx"] }
        },
        {
          "question_no": 19, "year": "NEET 2016 Phase 1",
          "question": "v = At + Bt². Distance between t = 1 s and t = 2 s is:",
          "options": { "a": "A + B", "b": "3A/2 + 7B/3", "c": "A + 4B", "d": "3A + 7B" },
          "answer": "b", "difficulty": "Medium",
          "explanation": "x = ∫v dt = At²/2 + Bt³/3. Δx = x(2)−x(1) = (2A+8B/3) − (A/2+B/3) = 3A/2 + 7B/3.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Distance = ∫v dt"], "formulas": ["x = ∫(At+Bt²)dt = At²/2 + Bt³/3"] }
        },
        {
          "question_no": 20, "year": "AIPMT 2010 Prelims",
          "question": "x = (t+5)⁻¹. Acceleration is proportional to:",
          "options": { "a": "(velocity)^(3/2)", "b": "(distance)^(−2)", "c": "(distance)^2", "d": "(velocity)^(2/3)" },
          "answer": "a", "difficulty": "Hard",
          "explanation": "v = −(t+5)⁻². |v| = (t+5)⁻². a = 2(t+5)⁻³. Since |v|^(3/2) = (t+5)⁻³, a ∝ (velocity)^(3/2).",
          "approach": "formula based (calculus) + conceptual reasoning", "image_path": null, "similarity_tag": "S9, Velocity as Function of Position",
          "required_to_solve": { "concepts": ["a = dv/dt", "Express a in terms of v by substitution"], "formulas": ["v = dx/dt", "a = dv/dt"] }
        },
        {
          "question_no": 21, "year": "AIPMT 2012 Prelims",
          "question": "x = 8 + 12t − t³. Retardation when velocity becomes zero is:",
          "options": { "a": "24 m/s²", "b": "zero", "c": "6 m/s²", "d": "12 m/s²" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "v = 12 − 3t² = 0 → t = 2 s. a = −6t. |a| at t=2 is 12 m/s².",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["v = dx/dt, a = dv/dt", "Find t when v = 0, then find |a|"], "formulas": ["v = dx/dt", "a = dv/dt"] }
        },
        {
          "question_no": 22, "year": "AIPMT 2006",
          "question": "x = 40 + 12t − t³. Distance particle travels before coming to rest:",
          "options": { "a": "16 m", "b": "24 m", "c": "40 m", "d": "56 m" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "v = 12 − 3t² = 0 → t = 2 s. x(0) = 40, x(2) = 56. Distance = 56 − 40 = 16 m.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Find t when v=0", "Distance = |x(t) − x(0)|"], "formulas": ["v = dx/dt = 0"] }
        },
        {
          "question_no": 23, "year": "AIPMT 2007",
          "question": "f = f₀(1 − t/T). Particle starts from rest. Velocity when f = 0 is:",
          "options": { "a": "½f₀T²", "b": "f₀T/2", "c": "f₀T", "d": "f₀T²" },
          "answer": "b", "difficulty": "Medium",
          "explanation": "f=0 when t=T. v = ∫₀ᵀ f₀(1−t/T)dt = f₀[t − t²/2T]₀ᵀ = f₀(T − T/2) = f₀T/2.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["v = ∫a dt (integrate acceleration to get velocity)"], "formulas": ["v = ∫f dt"] }
        },
        {
          "question_no": 24, "year": "AIPMT 2007",
          "question": "x = 9t² − t³. Position when particle achieves maximum speed in +x direction:",
          "options": { "a": "54 m", "b": "81 m", "c": "24 m", "d": "32 m" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "v = 18t − 3t². Max speed when a = 18 − 6t = 0 → t = 3 s. x(3) = 9(9) − 27 = 54 m.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["Max speed when acceleration = 0", "Find t, then find x(t)"], "formulas": ["v = dx/dt", "a = dv/dt = 0 for max speed"] }
        },
        {
          "question_no": 25, "year": "AIPMT 2000",
          "question": "s = 3t³ + 7t² + 14t + 8. Acceleration at t = 1 s is:",
          "options": { "a": "10 m/s²", "b": "32 m/s²", "c": "23 m/s²", "d": "16 m/s²" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "v = 9t² + 14t + 14. a = 18t + 14. At t=1: a = 18 + 14 = 32 m/s².",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["a = d²s/dt²"], "formulas": ["v = ds/dt", "a = dv/dt"] }
        },
        {
          "question_no": 26, "year": "AIPMT 2005",
          "question": "x = ae⁻ᵅᵗ + be⁻ᵝᵗ (a, b, α, β positive). The velocity of the particle will:",
          "options": { "a": "be independent of β", "b": "drop to zero when α = β", "c": "go on decreasing with time", "d": "go on increasing with time" },
          "answer": "d", "difficulty": "Hard",
          "explanation": "v = −aαe⁻ᵅᵗ − bβe⁻ᵝᵗ (negative). a = aα²e⁻ᵅᵗ + bβ²e⁻ᵝᵗ > 0. Positive acceleration means velocity becomes less negative — increases with time.",
          "approach": "formula based (calculus) + conceptual reasoning", "image_path": null, "similarity_tag": "S7, Calculus Kinematics",
          "required_to_solve": { "concepts": ["d/dt(e⁻ᵅᵗ) = −αe⁻ᵅᵗ", "Positive a means v increases (less negative)"], "formulas": ["v = dx/dt", "a = dv/dt"] }
        }
      ]
    },
    {
      "topic": "Free Fall & Vertical Motion",
      "questions": [
        {
          "question_no": 27, "year": "AIPMT 2011 Prelims",
          "question": "A boy drops a stone from a 20 m tower. Velocity when it hits ground (g = 10 m/s²):",
          "options": { "a": "10 m/s", "b": "20 m/s", "c": "40 m/s", "d": "5 m/s" },
          "answer": "b", "difficulty": "Easy",
          "explanation": "v² = 2gh = 2×10×20 = 400. v = 20 m/s.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S10, Free Fall",
          "required_to_solve": { "concepts": ["Free fall from rest"], "formulas": ["v² = u² + 2gh; u=0 → v = √(2gh)"] }
        },
        {
          "question_no": 28, "year": "NEET 2013",
          "question": "A stone falls freely. It covers h₁, h₂, h₃ in the 1st, 2nd and 3rd intervals of 5 s each. Relation between them:",
          "options": { "a": "h₂ = 3h₁, h₃ = 3h₂", "b": "h₁ = h₂ = h₃", "c": "h₁ = 2h₂ = 3h₃", "d": "h₂ = 3h₁ and h₃ = 5h₁" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "h₁ = 25g/2, h₁+h₂ = 50g → h₂ = 75g/2 = 3h₁. h₃ = 125g/2 = 5h₁.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S10, Free Fall",
          "required_to_solve": { "concepts": ["h = ½gt²", "Find cumulative then subtract for each interval"], "formulas": ["h = ½gt²"] }
        },
        {
          "question_no": 29, "year": "NEET 2020 Phase 1",
          "question": "A ball thrown vertically downward at 20 m/s from a tower hits ground at 80 m/s. Height of tower (g = 10 m/s²):",
          "options": { "a": "340 m", "b": "320 m", "c": "300 m", "d": "360 m" },
          "answer": "c", "difficulty": "Easy",
          "explanation": "v² = u² + 2gh → 6400 = 400 + 20h → h = 300 m.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S10, Free Fall",
          "required_to_solve": { "concepts": ["Downward throw with gravity"], "formulas": ["v² = u² + 2gh"] }
        },
        {
          "question_no": 30, "year": "AIPMT 2005",
          "question": "A ball thrown up has speed 10 m/s at half its maximum height. Maximum height (g = 10 m/s²):",
          "options": { "a": "10 m", "b": "5 m", "c": "15 m", "d": "20 m" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "u² = 2gH. At h = H/2: 100 = u² − gH = 2gH − gH = gH → H = 10 m.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S11, Vertical Throw Up",
          "required_to_solve": { "concepts": ["v² = u² − 2gh at any height"], "formulas": ["v² = u² − 2gh", "u² = 2gH"] }
        },
        {
          "question_no": 31, "year": "AIPMT 2006",
          "question": "Bodies A (1 kg, 16 m) and B (3 kg, 25 m) are dropped. Ratio of times to reach ground is:",
          "options": { "a": "4/5", "b": "5/4", "c": "12/5", "d": "5/12" },
          "answer": "a", "difficulty": "Easy",
          "explanation": "t ∝ √h (mass doesn't matter). t₁/t₂ = √(16/25) = 4/5.",
          "approach": "formula based", "image_path": null, "similarity_tag": "S10, Free Fall",
          "required_to_solve": { "concepts": ["All bodies fall at same rate regardless of mass", "t = √(2h/g)"], "formulas": ["t = √(2h/g)"] }
        },
        {
          "question_no": 32, "year": "AIPMT 2010 Prelims",
          "question": "Ball 1 dropped at t=0. Ball 2 thrown downward at v after 6 s. Both meet at t=18 s (g = 10 m/s²). Value of v:",
          "options": { "a": "75 m/s", "b": "55 m/s", "c": "40 m/s", "d": "60 m/s" },
          "answer": "a", "difficulty": "Hard",
          "explanation": "d₁ = ½(10)(18²) = 1620 m. Ball 2 travels 12 s: 1620 = 12v + ½(10)(144) = 12v+720 → v = 75 m/s.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S12, Two Bodies Simultaneous",
          "required_to_solve": { "concepts": ["Both travel same distance from platform to meeting point"], "formulas": ["s = ut + ½gt²"] }
        },
        {
          "question_no": 33, "year": "AIPMT 2003",
          "question": "Man throws balls every 2 s vertically upward. For more than 2 balls in sky at any time, speed must be:",
          "options": { "a": "more than 19.6 m/s", "b": "at least 9.8 m/s", "c": "any speed < 19.6 m/s", "d": "only 19.6 m/s" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "For ≥3 balls, time of flight > 2×2 = 4 s. T = 2u/g > 4 → u > 4g/2 = 2×9.8 = 19.6 m/s.",
          "approach": "conceptual + formula based", "image_path": null, "similarity_tag": "S11, Vertical Throw Up",
          "required_to_solve": { "concepts": ["Time of flight T = 2u/g", "For n+1 balls in air: T > n × interval"], "formulas": ["T = 2u/g"] }
        },
        {
          "question_no": 34, "year": "AIPMT 2003",
          "question": "Ball thrown vertically upward with speed u. Distance covered during last t seconds of ascent is:",
          "options": { "a": "ut", "b": "½gt²", "c": "ut − ½gt²", "d": "(u+gt)t" },
          "answer": "b", "difficulty": "Medium",
          "explanation": "The last t seconds of ascent = first t seconds of fall from top (by symmetry). Distance = ½gt².",
          "approach": "conceptual + formula based", "image_path": null, "similarity_tag": "S11, Vertical Throw Up",
          "required_to_solve": { "concepts": ["Symmetry of vertical throw: last t seconds up = first t seconds down from top"], "formulas": ["s = ½gt² (from rest)"] }
        }
      ]
    },
    {
      "topic": "Relative Motion",
      "questions": [
        {
          "question_no": 35, "year": "NEET 2017",
          "question": "Preeti walks up stationary escalator in t₁. Escalator alone takes t₂. Time walking on moving escalator:",
          "options": { "a": "1/t = 1/t₁ + 1/t₂", "b": "t = t₁ + t₂", "c": "t₁ = t₂", "d": "t = t₁/t₂" },
          "answer": "a", "difficulty": "Medium",
          "explanation": "v_walk = L/t₁, v_escalator = L/t₂. Together: v = L/t₁ + L/t₂ → 1/t = 1/t₁ + 1/t₂.",
          "approach": "formula based + conceptual reasoning", "image_path": null, "similarity_tag": "S13, Relative Motion",
          "required_to_solve": { "concepts": ["Speeds add when both in same direction", "Relative speed on moving escalator"], "formulas": ["v_total = v₁ + v₂", "t = L/v"] }
        },
        {
          "question_no": 36, "year": "NEET 2025",
          "question": "Girl on scooty at 60 km/h (X→Y). Bus every T min. Bus passes her every 30 min (same dir), every 10 min (opposite). Period T and bus speed are:",
          "options": { "a": "10 min, 90 km/h", "b": "15 min, 120 km/h", "c": "9 min, 40 km/h", "d": "25 min, 100 km/h" },
          "answer": "b", "difficulty": "Hard",
          "explanation": "(v−60)×30 = vT and (v+60)×10 = vT. Equating: 30v−1800 = 10v+600 → v = 120 km/h. T = 180×10/120 = 15 min.",
          "approach": "formula based + calculation type", "image_path": null, "similarity_tag": "S14, Bus Relative Motion",
          "required_to_solve": { "concepts": ["Distance between buses = vT", "Set up two equations using relative speed and time"], "formulas": ["v_rel × t_observed = separation between buses = vT"] }
        },
        {
          "question_no": 37, "year": "AIPMT 2009",
          "question": "Bus moves at 10 m/s. Scooterist at 1 km behind wants to overtake in 100 s. Speed needed:",
          "options": { "a": "40 m/s", "b": "25 m/s", "c": "10 m/s", "d": "20 m/s" },
          "answer": "d", "difficulty": "Easy",
          "explanation": "Relative distance = 1000 m in 100 s. v_rel = 10 m/s. v_scooter = 10 + 10 = 20 m/s.",
          "approach": "formula based", "image_path": null, "similarity_tag": "S13, Relative Motion",
          "required_to_solve": { "concepts": ["Relative velocity to cover relative distance"], "formulas": ["v_rel = Δx/t", "v_scooter = v_bus + v_rel"] }
        },
        {
          "question_no": 38, "year": "NEET 2019",
          "question": "Swimmer speed = 20 m/s, river flows east at 10 m/s. To cross along shortest path, angle with north is:",
          "options": { "a": "0°", "b": "60° west", "c": "45° west", "d": "30° west" },
          "answer": "d", "difficulty": "Medium",
          "explanation": "For straight-across path: v_swim sinθ = v_river → 20 sinθ = 10 → θ = 30° west of north.",
          "approach": "formula based + vector analysis", "image_path": null, "similarity_tag": "S15, River Boat Problem",
          "required_to_solve": { "concepts": ["Shortest path = aim upstream so resultant is perpendicular to bank"], "formulas": ["sin θ = v_river/v_swimmer"] }
        },
        {
          "question_no": 39, "year": "NEET 2026",
          "question": "Ruler falls vertically. Reaction times: A=0.20s, B=0.22s, C=0.18s, D=0.19s, E=0.21s. Correct order of distances:",
          "options": { "a": "B > E > A > C > D", "b": "C > D > A > B > E", "c": "B > E > A > D > C", "d": "C > D > A > E > B" },
          "answer": "c", "difficulty": "Easy",
          "explanation": "s = ½gt² ∝ t². Descending reaction times: B(0.22) > E(0.21) > A(0.20) > D(0.19) > C(0.18). So s: B > E > A > D > C.",
          "approach": "conceptual + formula based", "image_path": null, "similarity_tag": "S10, Free Fall",
          "required_to_solve": { "concepts": ["s ∝ t² — longer reaction time → more distance"], "formulas": ["s = ½gt²"] }
        }
      ]
    },
    {
      "topic": "2D Motion & Vectors",
      "questions": [
        {
          "question_no": 40, "year": "NEET 2023 Manipur",
          "question": "r(t) = 4tî + 2t²ĵ + 5k̂. Magnitude and direction of velocity at t = 1 s w.r.t. x-axis:",
          "options": { "a": "4√2 m/s, 45°", "b": "4√2 m/s, 60°", "c": "3√2 m/s, 30°", "d": "3√2 m/s, 45°" },
          "answer": "a", "difficulty": "Easy",
          "explanation": "v = dr/dt = 4î + 4tĵ. At t=1: v = 4î + 4ĵ. |v| = √(16+16) = 4√2 m/s. θ = tan⁻¹(4/4) = 45°.",
          "approach": "formula based + vector analysis", "image_path": null, "similarity_tag": "S16, 2D Vector Velocity",
          "required_to_solve": { "concepts": ["Velocity vector = dr/dt", "Angle = tan⁻¹(vy/vx)"], "formulas": ["v = dr/dt", "θ = tan⁻¹(vy/vx)"] }
        },
        {
          "question_no": 41, "year": "NEET 2025",
          "question": "t = x² + x. Acceleration of the particle is:",
          "options": { "a": "−(2x+1)/(2x+1)³", "b": "1/(2x+1)²", "c": "x/(2x+1)²", "d": "−2/(2x+1)³" },
          "answer": "d", "difficulty": "Hard",
          "explanation": "v = dx/dt = 1/(2x+1). a = v·dv/dx = [1/(2x+1)]·[−2/(2x+1)²] = −2/(2x+1)³.",
          "approach": "formula based (calculus)", "image_path": null, "similarity_tag": "S9, Velocity as Function of Position",
          "required_to_solve": { "concepts": ["v = 1/(dt/dx)", "a = v·(dv/dx)"], "formulas": ["v = dx/dt", "a = v·dv/dx"] }
        }
      ]
    }
  ]
};
