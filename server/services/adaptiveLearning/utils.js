function getLevelRating(level) {
    const ratings = { easy: 1, medium: 2, hard: 3 };
    return ratings[level] || level;
  }
  
  function getLevelNumber(level) {
    const levels = { easy: 1, medium: 2, hard: 3 };
    return levels[level] || level;
  }
  
  function getCategoryName(category) {
    const categories = {
      R1: 'Letter Reading',
      R2: 'Word Reading',
      R3: 'Short Passage Reading',
      R4: 'Passage Comprehension',
      R5: 'Noun Classification'
    };
    return categories[category] || category;
  }
  
  module.exports = {
    getLevelRating,
    getLevelNumber,
    getCategoryName
  };