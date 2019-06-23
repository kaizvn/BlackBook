export const themeColor = {
  warning: '#FFE082',
  danger: '#EF9A9A',
  regretted: '#C5E1A5'
};

export const formatPhone = phone => {
  phone = phone ? phone.toString() : phone;
  if (phone.substr(0, 1) !== '0') {
    return '0' + phone;
  }
  return phone;
};
