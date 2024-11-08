const timeAgo = (timeStamp) => {
  const date = new Date(timeStamp);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) return Math.floor(interval) + " year" + (interval > 2 ? "s" : "") + " ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " month" + (interval > 2 ? "s" : "") + " ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " day" + (interval > 2 ? "s" : "") + " ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hour" + (interval > 2 ? "s" : "") + " ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minute" + (interval > 2 ? "s" : "") + " ago";
  return "Just now";
};

export { timeAgo };