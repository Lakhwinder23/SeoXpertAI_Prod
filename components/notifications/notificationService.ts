export const fetchNotifications = async () => {
    // Simulate fetching notifications
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { message: 'SEO audit completed', date: new Date().toISOString() },
          { message: 'Report generated', date: new Date().toISOString() },
        ]);
      }, 1000);
    });
  };
  