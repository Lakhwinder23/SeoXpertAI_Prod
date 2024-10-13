export const scheduleReport = async (frequency) => {
    // Simulate scheduling a report
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          frequency,
          scheduledDate: new Date().toISOString(),
        });
      }, 2000);
    });
  };
  