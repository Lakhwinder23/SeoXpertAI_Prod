export const fetchStrategies = async () => {
    // Simulate fetching strategies
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: 'Target long-tail keywords', dateAdded: new Date().toISOString() },
          { name: 'Improve site speed', dateAdded: new Date().toISOString() },
        ]);
      }, 1000);
    });
  };
  
  export const addStrategy = async (strategyName) => {
    // Simulate adding a strategy
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: strategyName,
          dateAdded: new Date().toISOString(),
        });
      }, 500);
    });
  };
  