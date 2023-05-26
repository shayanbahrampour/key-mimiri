export default {
  data: () => ({
    rule: {
      required: (v) => !!v || 'این فیلد الزامی می‌باشد!',
      min: (amount) => {
        return (v) =>
          (v && v.length ? String(v).length >= amount : true) || `این فیلد حداقل باید ${amount} کاراکتر باشد!`;
      },
      email: (v) => (v && v.length ? /.+@.+\..+/.test(v) : true) || 'ایمیل وارد شده معتبر نیست!',
      number: (v) => (v && v.length ? /^[۰-۹0-9]*$/.test(v) : true) || 'باید عدد باشد!',
      mobile: (v) =>
        (v && v.length ? /(09|۰۹|9|۹)([0-9۰-۹]+){9}/.test(v) && v.length >= 10 && v.length <= 11 : true) ||
        'شماره تلفن همراه معتبر نیست!'
    }
  })
};
