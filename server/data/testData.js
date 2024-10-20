const testData = [
  {
    id: "R1",
    levels: {
      level_1: [
        {
          passage:
            "The cat is black. It likes to sleep in the sun. The dog is brown.",
          question: "What color is the cat?",
          correct_answer: "Black",
          level: 1,
        },
        {
          passage:
            "The sky is blue. There are many clouds. The sun is shining.",
          question: "What color is the sky?",
          correct_answer: "Blue",
          level: 1,
        },
        {
          passage: "The tree has green leaves. Birds sing in its branches.",
          question: "What color are the leaves?",
          correct_answer: "Green",
          level: 1,
        },
      ],
      level_2: [
        {
          passage:
            "In the park, there are many trees and flowers. A girl sits on a bench reading a book. The sun shines brightly, and birds chirp happily.",
          question: "What did the girl do in the park?",
          correct_answer: "She sat on a bench reading a book.",
          level: 2,
        },
        {
          passage:
            "The boy kicked the ball into the river. He was sad but then decided to play with his friends.",
          question: "What did the boy do after he lost the ball?",
          correct_answer: "He decided to play with his friends.",
          level: 2,
        },
        {
          passage:
            "The library was quiet. Students were studying. A teacher helped a student with math.",
          question: "What was the teacher doing in the library?",
          correct_answer: "Helping a student with math.",
          level: 2,
        },
      ],
      level_3: [
        {
          passage:
            "In a small village, a kind man named John decided to help his neighbors. Every day, he would lend a hand to anyone in need, whether it was fixing a roof or sharing food. His actions inspired others, and soon, the entire village began to work together to support one another.",
          question: "Why do you think John's actions inspired the villagers?",
          correct_answer:
            "Because he helped others and showed the importance of community.",
          level: 3,
        },
        {
          passage:
            "During the summer, a group of friends planned a camping trip. They packed their bags, chose a beautiful spot near a lake, and spent the weekend exploring nature. They learned to set up a tent and even caught some fish for dinner.",
          question:
            "What skills did the friends learn during their camping trip?",
          correct_answer: "They learned to set up a tent and catch fish.",
          level: 3,
        },
        {
          passage:
            "A scientist discovered a new species of bird in the rainforest. This bird had vibrant colors and unique songs that had never been documented before. The discovery excited researchers and raised awareness about the importance of preserving natural habitats.",
          question: "Why was the discovery of the new bird significant?",
          correct_answer:
            "It raised awareness about the importance of preserving natural habitats.",
          level: 3,
        },
      ],
    },
  },
  {
    id: "R2",
    levels: {
      level_1: [
        {
          level: 1,
          letter: "b",
          prompt: "Identify the letter 'b' shown on the screen.",
          correct_answer: "b",
          feedback: {
            correct: "Great job! You identified the letter 'b'.",
            incorrect: "Oops! That\u2019s the letter 'b'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "d",
          prompt: "Identify the letter 'd' shown on the screen.",
          correct_answer: "d",
          feedback: {
            correct: "Great job! You identified the letter 'd'.",
            incorrect: "Oops! That\u2019s the letter 'd'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "p",
          prompt: "Identify the letter 'p' shown on the screen.",
          correct_answer: "p",
          feedback: {
            correct: "Great job! You identified the letter 'p'.",
            incorrect: "Oops! That\u2019s the letter 'p'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "q",
          prompt: "Identify the letter 'q' shown on the screen.",
          correct_answer: "q",
          feedback: {
            correct: "Great job! You identified the letter 'q'.",
            incorrect: "Oops! That\u2019s the letter 'q'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "m",
          prompt: "Identify the letter 'm' shown on the screen.",
          correct_answer: "m",
          feedback: {
            correct: "Great job! You identified the letter 'm'.",
            incorrect: "Oops! That\u2019s the letter 'm'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "n",
          prompt: "Identify the letter 'n' shown on the screen.",
          correct_answer: "n",
          feedback: {
            correct: "Great job! You identified the letter 'n'.",
            incorrect: "Oops! That\u2019s the letter 'n'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "r",
          prompt: "Identify the letter 'r' shown on the screen.",
          correct_answer: "r",
          feedback: {
            correct: "Great job! You identified the letter 'r'.",
            incorrect: "Oops! That\u2019s the letter 'r'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "s",
          prompt: "Identify the letter 's' shown on the screen.",
          correct_answer: "s",
          feedback: {
            correct: "Great job! You identified the letter 's'.",
            incorrect: "Oops! That\u2019s the letter 's'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "t",
          prompt: "Identify the letter 't' shown on the screen.",
          correct_answer: "t",
          feedback: {
            correct: "Great job! You identified the letter 't'.",
            incorrect: "Oops! That\u2019s the letter 't'. Let's try again.",
          },
        },
        {
          level: 1,
          letter: "l",
          prompt: "Identify the letter 'l' shown on the screen.",
          correct_answer: "l",
          feedback: {
            correct: "Great job! You identified the letter 'l'.",
            incorrect: "Oops! That\u2019s the letter 'l'. Let's try again.",
          },
        },
      ],
      level_2: [
        {
          level: 2,
          letters: ["b", "d"],
          prompt: "Which letters are shown here? b and d",
          correct_answer: ["b", "d"],
          feedback: {
            correct: "Great job! You identified 'b' and 'd'.",
            incorrect: "Close! The letters are 'b' and 'd'.",
          },
        },
        {
          level: 2,
          letters: ["p", "q"],
          prompt: "Which letters are shown here? p and q",
          correct_answer: ["p", "q"],
          feedback: {
            correct: "Great job! You identified 'p' and 'q'.",
            incorrect: "Close! The letters are 'p' and 'q'.",
          },
        },
        {
          level: 2,
          letters: ["m", "n"],
          prompt: "Which letters are shown here? m and n",
          correct_answer: ["m", "n"],
          feedback: {
            correct: "Great job! You identified 'm' and 'n'.",
            incorrect: "Close! The letters are 'm' and 'n'.",
          },
        },
        {
          level: 2,
          letters: ["r", "s"],
          prompt: "Which letters are shown here? r and s",
          correct_answer: ["r", "s"],
          feedback: {
            correct: "Great job! You identified 'r' and 's'.",
            incorrect: "Close! The letters are 'r' and 's'.",
          },
        },
        {
          level: 2,
          letters: ["t", "l"],
          prompt: "Which letters are shown here? t and l",
          correct_answer: ["t", "l"],
          feedback: {
            correct: "Great job! You identified 't' and 'l'.",
            incorrect: "Close! The letters are 't' and 'l'.",
          },
        },
        {
          level: 2,
          letters: ["b", "p"],
          prompt: "Which letters are shown here? b and p",
          correct_answer: ["b", "p"],
          feedback: {
            correct: "Great job! You identified 'b' and 'p'.",
            incorrect: "Close! The letters are 'b' and 'p'.",
          },
        },
        {
          level: 2,
          letters: ["d", "q"],
          prompt: "Which letters are shown here? d and q",
          correct_answer: ["d", "q"],
          feedback: {
            correct: "Great job! You identified 'd' and 'q'.",
            incorrect: "Close! The letters are 'd' and 'q'.",
          },
        },
        {
          level: 2,
          letters: ["n", "r"],
          prompt: "Which letters are shown here? n and r",
          correct_answer: ["n", "r"],
          feedback: {
            correct: "Great job! You identified 'n' and 'r'.",
            incorrect: "Close! The letters are 'n' and 'r'.",
          },
        },
        {
          level: 2,
          letters: ["m", "t"],
          prompt: "Which letters are shown here? m and t",
          correct_answer: ["m", "t"],
          feedback: {
            correct: "Great job! You identified 'm' and 't'.",
            incorrect: "Close! The letters are 'm' and 't'.",
          },
        },
        {
          level: 2,
          letters: ["s", "l"],
          prompt: "Which letters are shown here? s and l",
          correct_answer: ["s", "l"],
          feedback: {
            correct: "Great job! You identified 's' and 'l'.",
            incorrect: "Close! The letters are 's' and 'l'.",
          },
        },
      ],
      level_3: [
        {
          level: 3,
          letters: ["b", "d", "p"],
          prompt: "Identify the letters shown: b, d, p",
          correct_answer: ["b", "d", "p"],
          feedback: {
            correct: "Great job! You found 'b, d, p'.",
            incorrect: "The letters are 'b, d, p'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["q", "m", "n"],
          prompt: "Identify the letters shown: q, m, n",
          correct_answer: ["q", "m", "n"],
          feedback: {
            correct: "Great job! You found 'q, m, n'.",
            incorrect: "The letters are 'q, m, n'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["p", "b", "d", "q"],
          prompt: "Identify the letters shown: p, b, d, q",
          correct_answer: ["p", "b", "d", "q"],
          feedback: {
            correct: "Great job! You found 'p, b, d, q'.",
            incorrect: "The letters are 'p, b, d, q'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["r", "s", "t"],
          prompt: "Identify the letters shown: r, s, t",
          correct_answer: ["r", "s", "t"],
          feedback: {
            correct: "Great job! You found 'r, s, t'.",
            incorrect: "The letters are 'r, s, t'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["m", "n", "r", "s"],
          prompt: "Identify the letters shown: m, n, r, s",
          correct_answer: ["m", "n", "r", "s"],
          feedback: {
            correct: "Great job! You found 'm, n, r, s'.",
            incorrect: "The letters are 'm, n, r, s'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["t", "l", "m"],
          prompt: "Identify the letters shown: t, l, m",
          correct_answer: ["t", "l", "m"],
          feedback: {
            correct: "Great job! You found 't, l, m'.",
            incorrect: "The letters are 't, l, m'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["b", "q", "r"],
          prompt: "Identify the letters shown: b, q, r",
          correct_answer: ["b", "q", "r"],
          feedback: {
            correct: "Great job! You found 'b, q, r'.",
            incorrect: "The letters are 'b, q, r'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["d", "p", "s", "t"],
          prompt: "Identify the letters shown: d, p, s, t",
          correct_answer: ["d", "p", "s", "t"],
          feedback: {
            correct: "Great job! You found 'd, p, s, t'.",
            incorrect: "The letters are 'd, p, s, t'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["n", "q", "r"],
          prompt: "Identify the letters shown: n, q, r",
          correct_answer: ["n", "q", "r"],
          feedback: {
            correct: "Great job! You found 'n, q, r'.",
            incorrect: "The letters are 'n, q, r'. Try again!",
          },
        },
        {
          level: 3,
          letters: ["m", "t", "b", "l"],
          prompt: "Identify the letters shown: m, t, b, l",
          correct_answer: ["m", "t", "b", "l"],
          feedback: {
            correct: "Great job! You found 'm, t, b, l'.",
            incorrect: "The letters are 'm, t, b, l'. Try again!",
          },
        },
      ],
    },
  },
  {
    id: "R3",
    levels: {
      level_1: [
        {
          level: 1,
          letters: ["cat"],
          prompt: "Identify the word shown on the screen: 'cat'.",
          correct_answer: ["cat"],
          feedback: {
            correct: "Great job! You identified the word 'cat'.",
            incorrect: "Oops! That\u2019s the word 'cat'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["dog"],
          prompt: "Identify the word shown on the screen: 'dog'.",
          correct_answer: ["dog"],
          feedback: {
            correct: "Great job! You identified the word 'dog'.",
            incorrect: "Oops! That\u2019s the word 'dog'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["bat"],
          prompt: "Identify the word shown on the screen: 'bat'.",
          correct_answer: ["bat"],
          feedback: {
            correct: "Great job! You identified the word 'bat'.",
            incorrect: "Oops! That\u2019s the word 'bat'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["mat"],
          prompt: "Identify the word shown on the screen: 'mat'.",
          correct_answer: ["mat"],
          feedback: {
            correct: "Great job! You identified the word 'mat'.",
            incorrect: "Oops! That\u2019s the word 'mat'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["rat"],
          prompt: "Identify the word shown on the screen: 'rat'.",
          correct_answer: ["rat"],
          feedback: {
            correct: "Great job! You identified the word 'rat'.",
            incorrect: "Oops! That\u2019s the word 'rat'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["sun"],
          prompt: "Identify the word shown on the screen: 'sun'.",
          correct_answer: ["sun"],
          feedback: {
            correct: "Great job! You identified the word 'sun'.",
            incorrect: "Oops! That\u2019s the word 'sun'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["man"],
          prompt: "Identify the word shown on the screen: 'man'.",
          correct_answer: ["man"],
          feedback: {
            correct: "Great job! You identified the word 'man'.",
            incorrect: "Oops! That\u2019s the word 'man'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["run"],
          prompt: "Identify the word shown on the screen: 'run'.",
          correct_answer: ["run"],
          feedback: {
            correct: "Great job! You identified the word 'run'.",
            incorrect: "Oops! That\u2019s the word 'run'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["hop"],
          prompt: "Identify the word shown on the screen: 'hop'.",
          correct_answer: ["hop"],
          feedback: {
            correct: "Great job! You identified the word 'hop'.",
            incorrect: "Oops! That\u2019s the word 'hop'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["top"],
          prompt: "Identify the word shown on the screen: 'top'.",
          correct_answer: ["top"],
          feedback: {
            correct: "Great job! You identified the word 'top'.",
            incorrect: "Oops! That\u2019s the word 'top'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["zib"],
          prompt: "Identify the word shown on the screen: 'zib'.",
          correct_answer: ["zib"],
          feedback: {
            correct: "Great job! You identified the word 'zib'.",
            incorrect: "Oops! That\u2019s the word 'zib'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["fob"],
          prompt: "Identify the word shown on the screen: 'fob'.",
          correct_answer: ["fob"],
          feedback: {
            correct: "Great job! You identified the word 'fob'.",
            incorrect: "Oops! That\u2019s the word 'fob'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["gib"],
          prompt: "Identify the word shown on the screen: 'gib'.",
          correct_answer: ["gib"],
          feedback: {
            correct: "Great job! You identified the word 'gib'.",
            incorrect: "Oops! That\u2019s the word 'gib'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["dob"],
          prompt: "Identify the word shown on the screen: 'dob'.",
          correct_answer: ["dob"],
          feedback: {
            correct: "Great job! You identified the word 'dob'.",
            incorrect: "Oops! That\u2019s the word 'dob'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["jib"],
          prompt: "Identify the word shown on the screen: 'jib'.",
          correct_answer: ["jib"],
          feedback: {
            correct: "Great job! You identified the word 'jib'.",
            incorrect: "Oops! That\u2019s the word 'jib'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["bib"],
          prompt: "Identify the word shown on the screen: 'bib'.",
          correct_answer: ["bib"],
          feedback: {
            correct: "Great job! You identified the word 'bib'.",
            incorrect: "Oops! That\u2019s the word 'bib'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["nob"],
          prompt: "Identify the word shown on the screen: 'nob'.",
          correct_answer: ["nob"],
          feedback: {
            correct: "Great job! You identified the word 'nob'.",
            incorrect: "Oops! That\u2019s the word 'nob'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["rib"],
          prompt: "Identify the word shown on the screen: 'rib'.",
          correct_answer: ["rib"],
          feedback: {
            correct: "Great job! You identified the word 'rib'.",
            incorrect: "Oops! That\u2019s the word 'rib'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["qub"],
          prompt: "Identify the word shown on the screen: 'qub'.",
          correct_answer: ["qub"],
          feedback: {
            correct: "Great job! You identified the word 'qub'.",
            incorrect: "Oops! That\u2019s the word 'qub'. Let's try again.",
          },
        },
        {
          level: 1,
          letters: ["kub"],
          prompt: "Identify the word shown on the screen: 'kub'.",
          correct_answer: ["kub"],
          feedback: {
            correct: "Great job! You identified the word 'kub'.",
            incorrect: "Oops! That\u2019s the word 'kub'. Let's try again.",
          },
        },
      ],
      level_2: [
        {
          level: 2,
          letters: ["apple"],
          prompt: "Identify the word shown: 'apple'.",
          correct_answer: ["apple"],
          feedback: {
            correct: "Great job! You identified the word 'apple'.",
            incorrect: "Oops! That\u2019s the word 'apple'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["grape"],
          prompt: "Identify the word shown: 'grape'.",
          correct_answer: ["grape"],
          feedback: {
            correct: "Great job! You identified the word 'grape'.",
            incorrect: "Oops! That\u2019s the word 'grape'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["table"],
          prompt: "Identify the word shown: 'table'.",
          correct_answer: ["table"],
          feedback: {
            correct: "Great job! You identified the word 'table'.",
            incorrect: "Oops! That\u2019s the word 'table'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["chair"],
          prompt: "Identify the word shown: 'chair'.",
          correct_answer: ["chair"],
          feedback: {
            correct: "Great job! You identified the word 'chair'.",
            incorrect: "Oops! That\u2019s the word 'chair'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["house"],
          prompt: "Identify the word shown: 'house'.",
          correct_answer: ["house"],
          feedback: {
            correct: "Great job! You identified the word 'house'.",
            incorrect: "Oops! That\u2019s the word 'house'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["water"],
          prompt: "Identify the word shown: 'water'.",
          correct_answer: ["water"],
          feedback: {
            correct: "Great job! You identified the word 'water'.",
            incorrect: "Oops! That\u2019s the word 'water'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["flower"],
          prompt: "Identify the word shown: 'flower'.",
          correct_answer: ["flower"],
          feedback: {
            correct: "Great job! You identified the word 'flower'.",
            incorrect: "Oops! That\u2019s the word 'flower'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["pencil"],
          prompt: "Identify the word shown: 'pencil'.",
          correct_answer: ["pencil"],
          feedback: {
            correct: "Great job! You identified the word 'pencil'.",
            incorrect: "Oops! That\u2019s the word 'pencil'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["plumby"],
          prompt: "Identify the word shown: 'plumby'.",
          correct_answer: ["plumby"],
          feedback: {
            correct: "Great job! You identified the word 'plumby'.",
            incorrect: "Oops! That\u2019s the word 'plumby'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["snorf"],
          prompt: "Identify the word shown: 'snorf'.",
          correct_answer: ["snorf"],
          feedback: {
            correct: "Great job! You identified the word 'snorf'.",
            incorrect: "Oops! That\u2019s the word 'snorf'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["glip"],
          prompt: "Identify the word shown: 'glip'.",
          correct_answer: ["glip"],
          feedback: {
            correct: "Great job! You identified the word 'glip'.",
            incorrect: "Oops! That\u2019s the word 'glip'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["flobble"],
          prompt: "Identify the word shown: 'flobble'.",
          correct_answer: ["flobble"],
          feedback: {
            correct: "Great job! You identified the word 'flobble'.",
            incorrect: "Oops! That\u2019s the word 'flobble'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["zample"],
          prompt: "Identify the word shown: 'zample'.",
          correct_answer: ["zample"],
          feedback: {
            correct: "Great job! You identified the word 'zample'.",
            incorrect: "Oops! That\u2019s the word 'zample'. Let's try again.",
          },
        },
        {
          level: 2,
          letters: ["tubble"],
          prompt: "Identify the word shown: 'tubble'.",
          correct_answer: ["tubble"],
          feedback: {
            correct: "Great job! You identified the word 'tubble'.",
            incorrect: "Oops! That\u2019s the word 'tubble'. Let's try again.",
          },
        },
      ],
      level_3: [
        {
          level: 3,
          letters: ["caterpillar"],
          prompt: "Identify the word shown: 'caterpillar'.",
          correct_answer: ["caterpillar"],
          feedback: {
            correct: "Great job! You identified the word 'caterpillar'.",
            incorrect:
              "Oops! That\u2019s the word 'caterpillar'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["university"],
          prompt: "Identify the word shown: 'university'.",
          correct_answer: ["university"],
          feedback: {
            correct: "Great job! You identified the word 'university'.",
            incorrect:
              "Oops! That\u2019s the word 'university'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["extraordinary"],
          prompt: "Identify the word shown: 'extraordinary'.",
          correct_answer: ["extraordinary"],
          feedback: {
            correct: "Great job! You identified the word 'extraordinary'.",
            incorrect:
              "Oops! That\u2019s the word 'extraordinary'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["chocolate"],
          prompt: "Identify the word shown: 'chocolate'.",
          correct_answer: ["chocolate"],
          feedback: {
            correct: "Great job! You identified the word 'chocolate'.",
            incorrect:
              "Oops! That\u2019s the word 'chocolate'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["congratulations"],
          prompt: "Identify the word shown: 'congratulations'.",
          correct_answer: ["congratulations"],
          feedback: {
            correct: "Great job! You identified the word 'congratulations'.",
            incorrect:
              "Oops! That\u2019s the word 'congratulations'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["flibberty"],
          prompt: "Identify the word shown: 'flibberty'.",
          correct_answer: ["flibberty"],
          feedback: {
            correct: "Great job! You identified the word 'flibberty'.",
            incorrect:
              "Oops! That\u2019s the word 'flibberty'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["gorp"],
          prompt: "Identify the word shown: 'gorp'.",
          correct_answer: ["gorp"],
          feedback: {
            correct: "Great job! You identified the word 'gorp'.",
            incorrect: "Oops! That\u2019s the word 'gorp'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["snarfblat"],
          prompt: "Identify the word shown: 'snarfblat'.",
          correct_answer: ["snarfblat"],
          feedback: {
            correct: "Great job! You identified the word 'snarfblat'.",
            incorrect:
              "Oops! That\u2019s the word 'snarfblat'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["quintz"],
          prompt: "Identify the word shown: 'quintz'.",
          correct_answer: ["quintz"],
          feedback: {
            correct: "Great job! You identified the word 'quintz'.",
            incorrect: "Oops! That\u2019s the word 'quintz'. Let's try again.",
          },
        },
        {
          level: 3,
          letters: ["slimble"],
          prompt: "Identify the word shown: 'slimble'.",
          correct_answer: ["slimble"],
          feedback: {
            correct: "Great job! You identified the word 'slimble'.",
            incorrect: "Oops! That\u2019s the word 'slimble'. Let's try again.",
          },
        },
      ],
    },
  },
];

module.exports = { testData };
