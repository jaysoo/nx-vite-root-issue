export default function fooPlugin() {
  return {
    name: 'foo-plugin',
    transform(src, id) {
      console.log(id)
      return undefined;
    }
  }
}
