import numpy as np

# Function to determine the number of questions per topic based on mastery score
def determine_questions_per_topic(mastery_scores):
    questions_per_topic = {}
    
    for topic, mastery in mastery_scores.items():
        # Initialize the question count
        questions_per_topic[topic] = {'Level 1': 0, 'Level 2': 0, 'Level 3': 0}
        
        if mastery < 0.4:  # Low mastery
            questions_per_topic[topic]['Level 1'] = np.random.randint(3, 6)  # 1 to 5 easy questions
            questions_per_topic[topic]['Level 2'] = 7-questions_per_topic[topic]['Level 1']  # 0 to 3 medium questions
        elif 0.4 <= mastery < 0.7:  # Medium mastery
            questions_per_topic[topic]['Level 1'] = np.random.randint(2, 4)  # 1 to 3 easy questions
            questions_per_topic[topic]['Level 2'] = np.random.randint(2, 7-questions_per_topic[topic]['Level 1'])  # 2 to 4 medium questions
            questions_per_topic[topic]['Level 3'] = 6-questions_per_topic[topic]['Level 1']-questions_per_topic[topic]['Level 2'] # 0 to 2 hard questions
        else:  # High mastery
            questions_per_topic[topic]['Level 2'] = np.random.randint(2, 5)  # 1 to 3 medium questions
            questions_per_topic[topic]['Level 3'] = 6-questions_per_topic[topic]['Level 2']  # 2 to 3 hard questions

    return questions_per_topic

# Example of a mastery scores dictionary
mastery_scores_example = {
    'Letter Reading': 0.35,
    'Word Reading': 0.65,
    'Short Passage Reading': 0.80,
    'Passage Comprehension': 0.50,
    'Noun Classification': 0.70
}

# Get number of questions per topic based on mastery levels
questions_distribution = determine_questions_per_topic(mastery_scores_example)

# Display the distribution
print("Questions Distribution Based on Mastery Scores:")
for topic, num_questions in questions_distribution.items():
    print(f"{topic}: Level 1: {num_questions['Level 1']} questions, Level 2: {num_questions['Level 2']} questions, Level 3: {num_questions['Level 3']} questions")
