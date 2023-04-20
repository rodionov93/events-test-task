import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  actorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actorText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#101828',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  labelText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#344054',
  },
  timeText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#667085',
  },
});
