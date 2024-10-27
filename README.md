# Adaptive Learning Path and Detection App for Dyslexic Children
### Inspiration

The motivation behind this project came from a strong desire to make education more inclusive for children with dyslexia. Dyslexia is a common learning difficulty that can affect children in different ways, from struggling with reading to writing and processing information. The lack of personalized learning tools that can adapt to the specific needs of dyslexic children inspired me to create an app that not only detects the type of dyslexia but also tailors learning paths to each child’s ability.

## How I Built the Project
### Technologies Used

#### React Native:
For building the mobile app, providing a user-friendly interface that allows children to interact with the learning modules.
#### Machine Learning Models: 
A combination of supervised learning models was used to classify dyslexic types (surface, phonological, rapid naming, double deficit) based on test scores and survey data.
#### Data Analytics: 
I generated both real and synthetic datasets to simulate various learning scenarios and dyslexic characteristics. Features such as reading speed, memory, visual and auditory discrimination were essential for personalizing the learning experience.

## Main Features
#### Dyslexia Detection: 
The app begins with an assessment phase, which evaluates the child’s current reading and writing abilities and classifies the type of dyslexia, if any.
Adaptive Learning Path: Based on the assessment results, the app generates a personalized learning path. Topics are broken down into steps, and each step includes 10-15 questions of varying difficulty.

#### Parent/Guardian Dashboard: 
A separate dashboard for guardians allows them to monitor their child’s progress and receive helpful insights via a chatbot. The chatbot is fine-tuned to answer specific questions about dyslexia and the child's performance.
Mastery-Based Question Distribution: The learning path adapts in real time by redistributing questions based on the child’s mastery level, helping them focus on weaker areas.
