import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingLeft: 6,
    paddingRight: 8,
    backgroundColor: '#ECFDF3',
    borderRadius: 16,
  },
  indicator: {
    backgroundColor: '#12B76A',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#027A48',
  },
});
