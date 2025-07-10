const findTheOldest = function (peoples) {
  const best = peoples.reduce((max, item) => {
    const death_year = item.yearOfDeath ?? new Date().getFullYear();
    const days = death_year - item.yearOfBirth;
    if (!max || days > max.days) {
      return { name: item.name, days };
    }
    return max;
  }, null);
  return best;
};

// Do not edit below this line
module.exports = findTheOldest;
