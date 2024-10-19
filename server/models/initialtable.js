// First, install required packages:
// npm install mongoose dotenv

const mongoose = require('mongoose');
require('dotenv').config();

// Define Mongoose Schemas
const roundScoreSchema = new mongoose.Schema({
    easy: { type: Number, default: 0 },
    medium: { type: Number, default: 0 },
    hard: { type: Number, default: 0 }
});

const scoreTableSchema = new mongoose.Schema({
    tableType: { type: String, enum: ['actual', 'target'], required: true },
    R1: roundScoreSchema,
    R2: roundScoreSchema,
    R3: roundScoreSchema,
    R4: roundScoreSchema,
    R5: roundScoreSchema,
    lastUpdated: { type: Date, default: Date.now }
});

const ScoreTable = mongoose.model('ScoreTable', scoreTableSchema);

class ScoringSystemDB {
    constructor() {
        this.connect();
    }

    // Database connection
    async connect() {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('MongoDB connection error:', error);
        }
    }

    // Save or update scores
    async saveScores(scores, tableType) {
        try {
            const update = {
                tableType,
                R1: scores.R1,
                R2: scores.R2,
                R3: scores.R3,
                R4: scores.R4,
                R5: scores.R5,
                lastUpdated: new Date()
            };

            const result = await ScoreTable.findOneAndUpdate(
                { tableType },
                update,
                { upsert: true, new: true }
            );

            return result;
        } catch (error) {
            console.error(`Error saving ${tableType} scores:`, error);
            throw error;
        }
    }

    // Retrieve scores
    async getScores(tableType) {
        try {
            const scores = await ScoreTable.findOne({ tableType });
            return scores;
        } catch (error) {
            console.error(`Error retrieving ${tableType} scores:`, error);
            throw error;
        }
    }

    // Get both actual and target scores
    async getAllScores() {
        try {
            const [actualScores, targetScores] = await Promise.all([
                this.getScores('actual'),
                this.getScores('target')
            ]);

            return {
                actual: actualScores,
                target: targetScores
            };
        } catch (error) {
            console.error('Error retrieving all scores:', error);
            throw error;
        }
    }

    // Update specific round scores
    async updateRoundScores(tableType, round, scores) {
        try {
            const update = {
                [`${round}`]: scores,
                lastUpdated: new Date()
            };

            const result = await ScoreTable.findOneAndUpdate(
                { tableType },
                { $set: update },
                { upsert: true, new: true }
            );

            return result;
        } catch (error) {
            console.error(`Error updating ${tableType} ${round} scores:`, error);
            throw error;
        }
    }
}

// Example usage with API integration
class ScoringSystem {
    constructor() {
        this.db = new ScoringSystemDB();
        this.initializeScores();
    }

    async initializeScores() {
        try {
            const scores = await this.db.getAllScores();
            this.actualScores = scores.actual || this.createEmptyScores();
            this.targetScores = scores.target || this.createEmptyScores();
        } catch (error) {
            console.error('Error initializing scores:', error);
            this.actualScores = this.createEmptyScores();
            this.targetScores = this.createEmptyScores();
        }
    }

    createEmptyScores() {
        return {
            R1: { easy: 0, medium: 0, hard: 0 },
            R2: { easy: 0, medium: 0, hard: 0 },
            R3: { easy: 0, medium: 0, hard: 0 },
            R4: { easy: 0, medium: 0, hard: 0 },
            R5: { easy: 0, medium: 0, hard: 0 }
        };
    }

    async updateAndSaveScores(apiData) {
        try {
            // Update actual scores
            if (apiData.actualScores) {
                Object.entries(apiData.actualScores).forEach(([round, scores]) => {
                    this.actualScores[round] = { ...this.actualScores[round], ...scores };
                });
                await this.db.saveScores(this.actualScores, 'actual');
            }

            // Update target scores
            if (apiData.targetScores) {
                Object.entries(apiData.targetScores).forEach(([round, scores]) => {
                    this.targetScores[round] = { ...this.targetScores[round], ...scores };
                });
                await this.db.saveScores(this.targetScores, 'target');
            }

            return {
                actual: this.actualScores,
                target: this.targetScores
            };
        } catch (error) {
            console.error('Error updating and saving scores:', error);
            throw error;
        }
    }
}

// Example API integration usage
async function main() {
    const scoringSystem = new ScoringSystem();
    
    // Example API data
    const apiData = {
        actualScores: {
            R1: { easy: 10, medium: 20, hard: 30 },
            R2: { easy: 15, medium: 25, hard: 35 }
        },
        targetScores: {
            R1: { easy: 12, medium: 22, hard: 32 },
            R2: { easy: 17, medium: 27, hard: 37 }
        }
    };

    try {
        // Update and save scores from API data
        const updatedScores = await scoringSystem.updateAndSaveScores(apiData);
        console.log('Scores updated and saved successfully:', updatedScores);
    } catch (error) {
        console.error('Error in main:', error);
    }
}

// Run the example
// main().catch(console.error);