export const screenshot = (videoPath) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');

    video.onloadedmetadata = function() {
      video.currentTime = 0;
    }
    video.onseeked = function() {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL('image/png');
      resolve(data);
    };

    video.src = videoPath;
  });
};