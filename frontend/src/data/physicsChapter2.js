export const physicsChapter2 = {
  "chapter": "Motion in a Straight Line",
  "chapter_no": 2,
  "exam": "NEET PYQs",
  "total_questions": 20,
  "sections": [
    {
      "topic": "Distance & Displacement",
      "questions": [
        {
          "question_no": 1,
          "year": "NEET 2013",
          "question": "A man walks 3 km due North, then 4 km due East. His displacement is:",
          "options": { "a": "7 km", "b": "5 km", "c": "1 km", "d": "3.5 km" },
          "answer": "b",
          "explanation": "Displacement = √(3² + 4²) = √(9 + 16) = √25 = 5 km.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S1, Vector Displacement",
          "required_to_solve": {
            "concepts": ["Displacement as vector", "Pythagoras theorem"],
            "formulas": ["d = √(x² + y²)"]
          }
        },
        {
          "question_no": 2,
          "year": "AIPMT 2014",
          "question": "A car travels from A to B at 40 km/h and returns from B to A at 60 km/h. The average speed of the car for the entire journey is:",
          "options": { "a": "48 km/h", "b": "50 km/h", "c": "45 km/h", "d": "52 km/h" },
          "answer": "a",
          "explanation": "Average speed = 2v₁v₂/(v₁+v₂) = 2×40×60/(40+60) = 4800/100 = 48 km/h.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S2, Average Speed",
          "required_to_solve": {
            "concepts": ["Average speed for equal distances"],
            "formulas": ["v_avg = 2v₁v₂/(v₁+v₂)"]
          }
        },
        {
          "question_no": 3,
          "year": "NEET 2017",
          "question": "A particle moves along x-axis. Its position (in metres) varies with time (in seconds) as x = 2t² − 3t + 1. Velocity at t = 2 s is:",
          "options": { "a": "1 m/s", "b": "5 m/s", "c": "3 m/s", "d": "8 m/s" },
          "answer": "b",
          "explanation": "v = dx/dt = 4t − 3. At t = 2 s: v = 8 − 3 = 5 m/s.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S3, Differentiation of Position",
          "required_to_solve": {
            "concepts": ["Velocity as derivative of position"],
            "formulas": ["v = dx/dt"]
          }
        }
      ]
    },
    {
      "topic": "Equations of Motion",
      "questions": [
        {
          "question_no": 4,
          "year": "AIPMT 2011",
          "question": "A body starts from rest with uniform acceleration 5 m/s². Distance traveled in the 3rd second is:",
          "options": { "a": "12.5 m", "b": "22.5 m", "c": "25 m", "d": "5 m" },
          "answer": "a",
          "explanation": "s_n = u + (a/2)(2n − 1) = 0 + (5/2)(2×3 − 1) = 2.5 × 5 = 12.5 m.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S4, Distance in nth Second",
          "required_to_solve": {
            "concepts": ["Distance in nth second", "Uniformly accelerated motion"],
            "formulas": ["s_n = u + (a/2)(2n − 1)"]
          }
        },
        {
          "question_no": 5,
          "year": "NEET 2019",
          "question": "A ball is thrown vertically upward with initial speed 30 m/s. Maximum height reached (g = 10 m/s²) is:",
          "options": { "a": "45 m", "b": "30 m", "c": "60 m", "d": "90 m" },
          "answer": "a",
          "explanation": "At max height v = 0. v² = u² − 2gH → H = u²/(2g) = 900/20 = 45 m.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S5, Vertical Throw Up",
          "required_to_solve": {
            "concepts": ["Vertical projectile upward", "Maximum height"],
            "formulas": ["H = u²/(2g)", "v² = u² − 2as"]
          }
        },
        {
          "question_no": 6,
          "year": "NEET 2021",
          "question": "A car starts from rest and accelerates uniformly at 2 m/s². Time taken to cover 100 m is:",
          "options": { "a": "10 s", "b": "5 s", "c": "20 s", "d": "25 s" },
          "answer": "a",
          "explanation": "s = ½at². 100 = ½(2)t² → t² = 100 → t = 10 s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Equations of Motion",
          "required_to_solve": {
            "concepts": ["Kinematics from rest"],
            "formulas": ["s = ut + ½at²"]
          }
        },
        {
          "question_no": 7,
          "year": "NEET 2022",
          "question": "A stone is thrown upward with velocity 20 m/s. Time to reach maximum height (g = 10 m/s²) is:",
          "options": { "a": "2 s", "b": "1 s", "c": "4 s", "d": "5 s" },
          "answer": "a",
          "explanation": "At max height, v = 0. v = u − gt → 0 = 20 − 10t → t = 2 s.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S5, Vertical Throw Up",
          "required_to_solve": {
            "concepts": ["Time to reach max height"],
            "formulas": ["v = u − gt", "t = u/g"]
          }
        },
        {
          "question_no": 8,
          "year": "NEET 2018",
          "question": "A car moving at 36 km/h decelerates uniformly at 5 m/s². Distance to come to rest is:",
          "options": { "a": "10 m", "b": "20 m", "c": "30 m", "d": "5 m" },
          "answer": "a",
          "explanation": "36 km/h = 10 m/s. v² = u² − 2as → 0 = 100 − 10s → s = 10 m.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S6, Equations of Motion",
          "required_to_solve": {
            "concepts": ["Deceleration to stop"],
            "formulas": ["v² = u² − 2as"]
          }
        },
        {
          "question_no": 9,
          "year": "AIPMT 2008",
          "question": "A particle starts from rest. Distances covered in 1st, 2nd, and 3rd seconds are in the ratio:",
          "options": { "a": "1 : 3 : 5", "b": "1 : 2 : 3", "c": "1 : 4 : 9", "d": "2 : 3 : 4" },
          "answer": "a",
          "explanation": "s_n ∝ (2n − 1). Ratio = 1 : 3 : 5.",
          "difficulty": "Medium",
          "approach": "theory based + formula based",
          "image_path": null,
          "similarity_tag": "S4, Distance in nth Second",
          "required_to_solve": {
            "concepts": ["Ratio of distances in successive seconds from rest"],
            "formulas": ["s_n ∝ (2n − 1)"]
          }
        },
        {
          "question_no": 10,
          "year": "NEET 2020",
          "question": "A train 100 m long passes a telegraph post at 72 km/h. Time to pass completely is:",
          "options": { "a": "5 s", "b": "10 s", "c": "20 s", "d": "4 s" },
          "answer": "a",
          "explanation": "72 km/h = 20 m/s. Time = length/speed = 100/20 = 5 s.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S7, Train Problems",
          "required_to_solve": {
            "concepts": ["Time for train to cross point obstacle"],
            "formulas": ["t = L/v"]
          }
        },
        {
          "question_no": 11,
          "year": "NEET 2016",
          "question": "A body moving at velocity v is brought to rest by a uniform retarding force. If velocity were doubled, stopping distance would be:",
          "options": { "a": "4 times", "b": "2 times", "c": "8 times", "d": "same" },
          "answer": "a",
          "explanation": "v² = 2as → s = v²/(2a). If v doubles, s quadruples.",
          "difficulty": "Easy",
          "approach": "conceptual + formula based",
          "image_path": null,
          "similarity_tag": "S6, Equations of Motion",
          "required_to_solve": {
            "concepts": ["Stopping distance proportional to v²"],
            "formulas": ["v² = u² − 2as"]
          }
        }
      ]
    },
    {
      "topic": "Graphs of Motion",
      "questions": [
        {
          "question_no": 12,
          "year": "NEET 2014",
          "question": "The area under a velocity-time graph gives:",
          "options": { "a": "acceleration", "b": "displacement", "c": "speed", "d": "force" },
          "answer": "b",
          "explanation": "Area under v-t graph = ∫v dt = displacement.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S8, Graphical Analysis",
          "required_to_solve": {
            "concepts": ["v-t graph interpretation"],
            "formulas": ["s = ∫v dt = area under v-t graph"]
          }
        },
        {
          "question_no": 13,
          "year": "AIPMT 2006",
          "question": "The slope of a velocity-time graph gives:",
          "options": { "a": "displacement", "b": "distance", "c": "acceleration", "d": "speed" },
          "answer": "c",
          "explanation": "Slope of v-t graph = Δv/Δt = acceleration.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S8, Graphical Analysis",
          "required_to_solve": {
            "concepts": ["Slope of v-t graph"],
            "formulas": ["a = dv/dt = slope of v-t graph"]
          }
        },
        {
          "question_no": 14,
          "year": "NEET 2019",
          "question": "For a uniformly accelerated body, the position-time (x-t) graph is a:",
          "options": { "a": "straight line", "b": "parabola", "c": "hyperbola", "d": "circle" },
          "answer": "b",
          "explanation": "x = ut + ½at² — quadratic in t, hence a parabola.",
          "difficulty": "Easy",
          "approach": "theory based",
          "image_path": null,
          "similarity_tag": "S8, Graphical Analysis",
          "required_to_solve": {
            "concepts": ["x-t graph for uniform acceleration"],
            "formulas": ["x = ut + ½at²"]
          }
        },
        {
          "question_no": 15,
          "year": "NEET 2022",
          "question": "A particle's velocity changes uniformly from 10 m/s to 30 m/s in 4 s. Displacement is:",
          "options": { "a": "80 m", "b": "40 m", "c": "160 m", "d": "120 m" },
          "answer": "a",
          "explanation": "s = (u + v)/2 × t = (10 + 30)/2 × 4 = 20 × 4 = 80 m.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S8, Graphical Analysis",
          "required_to_solve": {
            "concepts": ["Average velocity method"],
            "formulas": ["s = (u + v)t/2"]
          }
        }
      ]
    },
    {
      "topic": "Free Fall",
      "questions": [
        {
          "question_no": 16,
          "year": "NEET 2015",
          "question": "A stone is dropped from a 80 m high cliff. Time to reach the ground (g = 10 m/s²) is:",
          "options": { "a": "4 s", "b": "2 s", "c": "8 s", "d": "√8 s" },
          "answer": "a",
          "explanation": "h = ½gt² → 80 = 5t² → t² = 16 → t = 4 s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S9, Free Fall",
          "required_to_solve": {
            "concepts": ["Free fall from rest"],
            "formulas": ["h = ½gt²"]
          }
        },
        {
          "question_no": 17,
          "year": "NEET 2018",
          "question": "A ball reaches a maximum height of 20 m when thrown vertically upward. Initial speed (g = 10 m/s²) is:",
          "options": { "a": "20 m/s", "b": "10 m/s", "c": "40 m/s", "d": "2 m/s" },
          "answer": "a",
          "explanation": "v² = u² − 2gH → 0 = u² − 2×10×20 → u = √400 = 20 m/s.",
          "difficulty": "Easy",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S9, Free Fall",
          "required_to_solve": {
            "concepts": ["Maximum height to initial speed"],
            "formulas": ["v² = u² − 2gH"]
          }
        },
        {
          "question_no": 18,
          "year": "NEET 2020",
          "question": "From the top of a 200 m tower a stone is dropped. Simultaneously another stone is thrown vertically upward from the base with velocity 40 m/s (g = 10 m/s²). They meet at height:",
          "options": { "a": "75 m from ground", "b": "125 m from ground", "c": "100 m from ground", "d": "50 m from ground" },
          "answer": "a",
          "explanation": "y₁ (from ground) = 200 − 5t². y₂ = 40t − 5t². Meeting: 200 − 5t² = 40t − 5t² → t = 5 s. h = 40(5) − 5(25) = 200 − 125 = 75 m.",
          "difficulty": "Hard",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S10, Two Bodies Thrown Simultaneously",
          "required_to_solve": {
            "concepts": ["Two bodies meeting condition", "Simultaneous motion"],
            "formulas": ["s = ut + ½at²", "Set equations equal to find t"]
          }
        }
      ]
    },
    {
      "topic": "Relative Motion",
      "questions": [
        {
          "question_no": 19,
          "year": "NEET 2017",
          "question": "Two cars A and B move in same direction. Car A at 30 km/h, car B at 50 km/h. Speed of B relative to A is:",
          "options": { "a": "20 km/h", "b": "80 km/h", "c": "30 km/h", "d": "15 km/h" },
          "answer": "a",
          "explanation": "Relative velocity = v_B − v_A = 50 − 30 = 20 km/h in same direction.",
          "difficulty": "Easy",
          "approach": "formula based",
          "image_path": null,
          "similarity_tag": "S11, Relative Velocity",
          "required_to_solve": {
            "concepts": ["Relative velocity (same direction)"],
            "formulas": ["v_rel = v_B − v_A"]
          }
        },
        {
          "question_no": 20,
          "year": "AIPMT 2010",
          "question": "Two trains, each of length 100 m, move in the same direction at 60 km/h and 90 km/h. Time for the faster train to pass the slower one is:",
          "options": { "a": "24 s", "b": "12 s", "c": "48 s", "d": "36 s" },
          "answer": "a",
          "explanation": "Relative speed = 30 km/h = 25/3 m/s. Total length = 200 m. t = 200/(25/3) = 24 s.",
          "difficulty": "Medium",
          "approach": "formula based + calculation type",
          "image_path": null,
          "similarity_tag": "S12, Train Crossing Problems",
          "required_to_solve": {
            "concepts": ["Relative velocity for same direction", "Time to cross"],
            "formulas": ["v_rel = v₁ − v₂", "t = (L₁+L₂)/v_rel"]
          }
        }
      ]
    }
  ]
};
