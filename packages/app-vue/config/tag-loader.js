module.exports = function loader(source) {
  // taro 内部有一组转换, jsx 不会被转掉, 这里手动转一下
  // 基本就是把组件换成 taro-${tag.toLowercase()}
  // _(:з」∠)_  忘记类型会被匹配到
  const matchStartTag =
    /<(View|Text|Input|Image|TextArea|TaroButton|TaroImage)/gm;
  const matchEndTag =
    /<\/(View|Text|Input|Image|TextArea|TaroButton|TaroImage)>/gm;
  function replacer(match, tag) {
    // 有些会写别名, 那先replace一下别名(统一都是Taro, 放到replace里面，不然会无限递归。)
    return match.replace(
      tag,
      'taro-' + tag.replace('Taro', '').toLocaleLowerCase(),
    );
  }
  source = source.replace(matchStartTag, replacer);
  source = source.replace(matchEndTag, replacer);
  return source;
};
