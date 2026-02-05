import { useCallback, useRef } from 'react';

// Singleton audio context to prevent multiple context creation
let globalAudioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!globalAudioContext || globalAudioContext.state === 'closed') {
      globalAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return globalAudioContext;
  } catch (error) {
    console.log('Audio not supported:', error);
    return null;
  }
}

// Creates a cute Animal Crossing-style "pop" sound using Web Audio API
export function useClickSound() {
  const isPlayingRef = useRef(false);

  const playClick = useCallback(() => {
    // Prevent multiple simultaneous sounds
    if (isPlayingRef.current) return;
    
    try {
      const audioContext = getAudioContext();
      if (!audioContext) return;

      isPlayingRef.current = true;
      
      // Create oscillator for the "pop" sound
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set up the cute "pop" sound (like Animal Crossing)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      // Volume envelope for a soft, cute sound
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      // Play the sound
      const startTime = audioContext.currentTime;
      const endTime = startTime + 0.1;
      
      oscillator.start(startTime);
      oscillator.stop(endTime);
      
      // Clean up after sound finishes
      oscillator.onended = () => {
        isPlayingRef.current = false;
        oscillator.disconnect();
        gainNode.disconnect();
      };
      
      // Fallback cleanup in case onended doesn't fire
      setTimeout(() => {
        isPlayingRef.current = false;
      }, 200);
    } catch (error) {
      console.log('Audio playback error:', error);
      isPlayingRef.current = false;
    }
  }, []);

  return playClick;
}