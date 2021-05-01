export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}

export function mapFields(options) {
  const object = {};
  for (let i = 0; i < options.fields.length; i++) {
    const field = [options.field[i]];
    object[field] = {
      get() {
        return this.$route.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
}
