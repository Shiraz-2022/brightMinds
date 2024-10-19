const express = require('express');
const bodyParser = require('body-parser');
const { getLevelRating, getLevelNumber, getCategoryName } = require('./utils');

class AdaptiveLearningSystem {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());

    this.questionCounts = {
      'Letter Reading': { 1: 5, 2: 1, 3: 0 },
      'Word Reading': { 1: 1, 2: 3, 3: 2 },
      'Short Passage Reading': { 1: 0, 2: 1, 3: 2 },
      'Passage Comprehension': { 1: 1, 2: 3, 3: 2 },
      'Noun Classification': { 1: 0, 2: 2, 3: 2 }
    };

    this.scores = {};
    this.percentageScores = {};

    this.initializeScores();
    this.setupRoutes();
  }

  initializeScores() {
    const categories = ['R1', 'R2', 'R3', 'R4', 'R5'];
    const levels = ['easy', 'medium', 'hard'];

    categories.forEach(category => {
      this.scores[category] = {};
      this.percentageScores[category] = {};
      levels.forEach(level => {
        this.scores[category][level] = 0;
        this.percentageScores[category][level] = 0;
      });
    });
  }

  setupRoutes() {
    this.app.get('/question-counts', this.getQuestionCounts.bind(this));
    this.app.post('/update-score', this.updateScore.bind(this));
    this.app.get('/final-scores', this.getFinalScores.bind(this));
  }

  getQuestionCounts(req, res) {
    res.json(this.questionCounts);
  }

  updateScore(req, res) {
    const { category, level, score } = req.body;
    
    if (!this.scores[category] || this.scores[category][level] === undefined) {
      return res.status(400).json({ error: 'Invalid category or level' });
    }

    this.scores[category][level] += score;
    
    const totalQuestions = this.questionCounts[getCategoryName(category)][getLevelNumber(level)];
    this.percentageScores[category][level] = (this.scores[category][level] / totalQuestions) * 100;

    res.json({ message: 'Score updated successfully', updatedScore: this.scores[category][level] });
  }

  async getFinalScores(req, res) {
    const { age } = req.query;
    
    let finalScores = [];

    for (const category in this.scores) {
      for (const level in this.scores[category]) {
        if (this.questionCounts[getCategoryName(category)][getLevelNumber(level)] > 0 && this.percentageScores[category][level] > 0) {
          const masteryScore = await this.getMasteryScore(category, level);
          
          finalScores.push({
            age: parseInt(age),
            category: category,
            level: getLevelRating(level),
            score: this.percentageScores[category][level],
            masteryScore: masteryScore
          });
        }
      }
    }

    res.json(finalScores);
  }

  async getMasteryScore(category, level) {
    // Simulate API call with fake data
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeData = {
          R1: { easy: 85, medium: 75, hard: 60 },
          R2: { easy: 80, medium: 70, hard: 55 },
          R3: { easy: 75, medium: 65, hard: 50 },
          R4: { easy: 70, medium: 60, hard: 45 },
          R5: { easy: 65, medium: 55, hard: 40 }
        };
        resolve(fakeData[category][level]);
      }, 100);
    });
  }
}

module.exports = AdaptiveLearningSystem;