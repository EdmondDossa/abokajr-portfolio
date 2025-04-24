
const playClickSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
  audio.volume = 0.2;
  audio.play().catch(() => {
    // Ignore errors if sound can't play
  });
};

export { playClickSound };
