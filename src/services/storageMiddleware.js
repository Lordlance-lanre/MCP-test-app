/**
 * Storage Middleware
 * Encrypts data using btoa before storing in localStorage
 * Decrypts data using atob when retrieving from localStorage
 */

// Helper to safely encode UTF-8 strings (handles currency symbols like ₦, accents, etc.)
function encryptData(data) {
  try {
    const jsonString = JSON.stringify(data);
    // encodeURIComponent handles multi-byte UTF-8 characters safely for btoa
    const utf8SafeString = unescape(encodeURIComponent(jsonString));
    return btoa(utf8SafeString);
  } catch (error) {
    console.error('Error encrypting data with btoa:', error);
    return null;
  }
}

// Helper to safely decode base64 strings back to data
function decryptData(cipherText) {
  try {
    if (!cipherText) return null;
    const decodedString = atob(cipherText);
    const utf8String = decodeURIComponent(escape(decodedString));
    return JSON.parse(utf8String);
  } catch (error) {
    // Fallback: If data was stored before encryption or decoding fails, try direct JSON parsing
    try {
      return JSON.parse(cipherText);
    } catch {
      console.error('Error decrypting data with atob:', error);
      return null;
    }
  }
}

export const storageMiddleware = {
  /**
   * Set item in localStorage with btoa encryption
   * @param {string} key
   * @param {any} value
   */
  setItem(key, value) {
    try {
      const encrypted = encryptData(value);
      if (encrypted !== null) {
        localStorage.setItem(key, encrypted);
      }
    } catch (error) {
      console.error(`Error setting encrypted item for key "${key}":`, error);
    }
  },

  /**
   * Get item from localStorage with atob decryption
   * @param {string} key
   * @param {any} defaultValue
   * @returns {any}
   */
  getItem(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return defaultValue;
      const decrypted = decryptData(raw);
      return decrypted !== null ? decrypted : defaultValue;
    } catch (error) {
      console.error(`Error getting decrypted item for key "${key}":`, error);
      return defaultValue;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key
   */
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item for key "${key}":`, error);
    }
  },

  /**
   * Clear all localStorage items
   */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

export default storageMiddleware;
