
export interface Question {
  question: string;
  choices: string[];
  answer: string;
}

export interface CategoryQuestions {
  [key: string]: Question[];
}

const questions: CategoryQuestions = {
  countries: [
    {
      question: "Which country has the most time zones?",
      choices: ["USA", "France", "Russia", "China"],
      answer: "France"
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "South Korea", "Thailand"],
      answer: "Japan"
    },
    {
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "Which country has the longest coastline in the world?",
      choices: ["Russia", "Canada", "Norway", "Chile"],
      answer: "Canada"
    },
    {
      question: "What is the most populous country in Africa?",
      choices: ["Egypt", "South Africa", "Nigeria", "Kenya"],
      answer: "Nigeria"
    },
    {
      question: "Which country is both in Europe and Asia?",
      choices: ["Russia", "Turkey", "Kazakhstan", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the capital of Brazil?",
      choices: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      answer: "Brasília"
    },
    {
      question: "Which country has three capital cities?",
      choices: ["Switzerland", "South Africa", "Netherlands", "Bolivia"],
      answer: "South Africa"
    },
    {
      question: "What is the highest mountain in Africa?",
      choices: ["Mount Kenya", "Mount Kilimanjaro", "Atlas Mountains", "Drakensberg"],
      answer: "Mount Kilimanjaro"
    },
    {
      question: "Which country is known as the Hermit Kingdom?",
      choices: ["Myanmar", "North Korea", "Bhutan", "Nepal"],
      answer: "North Korea"
    },
    {
      question: "What is the largest island country in the world?",
      choices: ["Madagascar", "Sri Lanka", "Indonesia", "Philippines"],
      answer: "Indonesia"
    },
    {
      question: "Which country has the most official languages?",
      choices: ["India", "South Africa", "Switzerland", "Zimbabwe"],
      answer: "Zimbabwe"
    },
    {
      question: "What is the driest desert in the world?",
      choices: ["Sahara", "Gobi", "Atacama", "Kalahari"],
      answer: "Atacama"
    },
    {
      question: "Which country invented pizza?",
      choices: ["Greece", "Italy", "Turkey", "France"],
      answer: "Italy"
    }
  ],
  cricket: [
    {
      question: "Who holds the record for the highest individual score in Test cricket?",
      choices: ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Kumar Sangakkara"],
      answer: "Brian Lara"
    },
    {
      question: "In which year was the first Cricket World Cup held?",
      choices: ["1971", "1973", "1975", "1977"],
      answer: "1975"
    },
    {
      question: "What is the maximum number of overs a bowler can bowl in a T20 match?",
      choices: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Who is known as 'Captain Cool'?",
      choices: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Sourav Ganguly"],
      answer: "MS Dhoni"
    },
    {
      question: "Which country has won the most Cricket World Cups?",
      choices: ["India", "Australia", "West Indies", "England"],
      answer: "Australia"
    },
    {
      question: "What does LBW stand for in cricket?",
      choices: ["Leg Before Wicket", "Left Behind Wicket", "Last Ball Win", "Long Ball Wide"],
      answer: "Leg Before Wicket"
    },
    {
      question: "Who has taken the most wickets in Test cricket?",
      choices: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "Glenn McGrath"],
      answer: "Muttiah Muralitharan"
    },
    {
      question: "What is the length of a cricket pitch?",
      choices: ["20 yards", "22 yards", "24 yards", "26 yards"],
      answer: "22 yards"
    },
    {
      question: "Which Indian cricketer is known as 'The Wall'?",
      choices: ["Sachin Tendulkar", "Rahul Dravid", "VVS Laxman", "Sourav Ganguly"],
      answer: "Rahul Dravid"
    },
    {
      question: "In which city is the Lord's Cricket Ground located?",
      choices: ["Manchester", "Birmingham", "London", "Leeds"],
      answer: "London"
    },
    {
      question: "What is a hat-trick in cricket?",
      choices: ["3 runs in 3 balls", "3 wickets in 3 consecutive balls", "3 sixes in an over", "3 catches in an over"],
      answer: "3 wickets in 3 consecutive balls"
    },
    {
      question: "Who scored the fastest century in ODI cricket?",
      choices: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Chris Gayle"],
      answer: "AB de Villiers"
    },
    {
      question: "What is the highest team score in ODI cricket?",
      choices: ["481/6", "498/4", "444/3", "434/4"],
      answer: "498/4"
    },
    {
      question: "Which bowler has the best bowling figures in a Test match innings?",
      choices: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"],
      answer: "Jim Laker"
    },
    {
      question: "What is the Duckworth-Lewis method used for?",
      choices: ["Calculating run rate", "Rain-affected matches", "Powerplay overs", "Wicket decisions"],
      answer: "Rain-affected matches"
    }
  ],
  cinema: [
    {
      question: "Who is known as the 'King of Bollywood'?",
      choices: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan"],
      answer: "Shah Rukh Khan"
    },
    {
      question: "Which was the first Indian film to be nominated for an Oscar?",
      choices: ["Mother India", "Lagaan", "Mughal-E-Azam", "Sholay"],
      answer: "Mother India"
    },
    {
      question: "Who directed the movie 'Sholay'?",
      choices: ["Yash Chopra", "Ramesh Sippy", "Raj Kapoor", "Guru Dutt"],
      answer: "Ramesh Sippy"
    },
    {
      question: "Which actress is known as the 'Dream Girl' of Bollywood?",
      choices: ["Madhuri Dixit", "Sridevi", "Hema Malini", "Rekha"],
      answer: "Hema Malini"
    },
    {
      question: "In which year was the first Bollywood film 'Raja Harishchandra' released?",
      choices: ["1913", "1915", "1917", "1919"],
      answer: "1913"
    },
    {
      question: "Who composed music for the movie 'Mughal-E-Azam'?",
      choices: ["R.D. Burman", "Naushad", "S.D. Burman", "Shankar-Jaikishan"],
      answer: "Naushad"
    },
    {
      question: "Which film won the first National Film Award for Best Feature Film?",
      choices: ["Shyamchi Aai", "Sant Tukaram", "Amar Bhoopali", "Jhanak Jhanak Payal Baaje"],
      answer: "Shyamchi Aai"
    },
    {
      question: "Who is known as the 'Tragedy King' of Bollywood?",
      choices: ["Raj Kapoor", "Dev Anand", "Dilip Kumar", "Ashok Kumar"],
      answer: "Dilip Kumar"
    },
    {
      question: "Which movie features the famous song 'Jai Ho'?",
      choices: ["3 Idiots", "Slumdog Millionaire", "Rang De Basanti", "Zindagi Na Milegi Dobara"],
      answer: "Slumdog Millionaire"
    },
    {
      question: "Who directed the movie '3 Idiots'?",
      choices: ["Rajkumar Hirani", "Aamir Khan", "Vidhu Vinod Chopra", "Karan Johar"],
      answer: "Rajkumar Hirani"
    },
    {
      question: "Which was the highest-grossing Indian film of 2019?",
      choices: ["War", "Kabir Singh", "Uri: The Surgical Strike", "Avengers: Endgame"],
      answer: "War"
    },
    {
      question: "Who played the role of Mogambo in 'Mr. India'?",
      choices: ["Pran", "Amrish Puri", "Shakti Kapoor", "Kader Khan"],
      answer: "Amrish Puri"
    },
    {
      question: "Which film marked Hrithik Roshan's debut as an actor?",
      choices: ["Kaho Naa... Pyaar Hai", "Mission Kashmir", "Fiza", "Koi... Mil Gaya"],
      answer: "Kaho Naa... Pyaar Hai"
    },
    {
      question: "Who is the director of the movie 'Dangal'?",
      choices: ["Nitesh Tiwari", "Rajkumar Hirani", "Imtiaz Ali", "Zoya Akhtar"],
      answer: "Nitesh Tiwari"
    },
    {
      question: "Which actress won the National Film Award for 'Queen'?",
      choices: ["Deepika Padukone", "Priyanka Chopra", "Kangana Ranaut", "Vidya Balan"],
      answer: "Kangana Ranaut"
    }
  ],
  history: [
    {
      question: "Who was the first President of India?",
      choices: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Mahatma Gandhi"],
      answer: "Dr. Rajendra Prasad"
    },
    {
      question: "In which year did India gain independence?",
      choices: ["1945", "1946", "1947", "1948"],
      answer: "1947"
    },
    {
      question: "Who built the Taj Mahal?",
      choices: ["Akbar", "Shah Jahan", "Humayun", "Aurangzeb"],
      answer: "Shah Jahan"
    },
    {
      question: "Which emperor was known as 'Akbar the Great'?",
      choices: ["Babur", "Humayun", "Akbar", "Shah Jahan"],
      answer: "Akbar"
    },
    {
      question: "Who started the Quit India Movement?",
      choices: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
      answer: "Mahatma Gandhi"
    },
    {
      question: "When did World War II end?",
      choices: ["1944", "1945", "1946", "1947"],
      answer: "1945"
    },
    {
      question: "Who was the last Mughal emperor?",
      choices: ["Aurangzeb", "Bahadur Shah II", "Akbar Shah II", "Shah Alam II"],
      answer: "Bahadur Shah II"
    },
    {
      question: "Which battle is considered the beginning of British rule in India?",
      choices: ["Battle of Plassey", "Battle of Panipat", "Battle of Haldighati", "Battle of Talikota"],
      answer: "Battle of Plassey"
    },
    {
      question: "Who was known as the 'Iron Man of India'?",
      choices: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh"],
      answer: "Sardar Vallabhbhai Patel"
    },
    {
      question: "In which year was the Berlin Wall torn down?",
      choices: ["1987", "1988", "1989", "1990"],
      answer: "1989"
    },
    {
      question: "Who wrote the Indian National Anthem?",
      choices: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Subramanya Bharathi"],
      answer: "Rabindranath Tagore"
    },
    {
      question: "Which ancient civilization built Machu Picchu?",
      choices: ["Aztecs", "Mayans", "Incas", "Olmecs"],
      answer: "Incas"
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      choices: ["Sarojini Naidu", "Indira Gandhi", "Sucheta Kripalani", "Vijaya Lakshmi Pandit"],
      answer: "Indira Gandhi"
    },
    {
      question: "In which year did the Jallianwala Bagh massacre take place?",
      choices: ["1918", "1919", "1920", "1921"],
      answer: "1919"
    },
    {
      question: "Who founded the Mauryan Empire?",
      choices: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
      answer: "Chandragupta Maurya"
    }
  ]
};

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions[category] || [];
};

export const getAllCategories = (): string[] => {
  return Object.keys(questions);
};
