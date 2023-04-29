import AsyncStorage from '@react-native-community/async-storage';

const key = 'logs';

const logsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      throw new Error('Failed to get logs');
    }
  },
  async set(data: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to set logs');
    }
  },
};

export default logsStorage;
