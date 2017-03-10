jQuery(($) => {
  /**
   * tagcloud
   * @param minOpacity
   * @param maxOpacity
   * @returns {boolean}
   */
  const tagCloud = (minOpacity = .66, maxOpacity = 1) => {
    const $tags = $('.tagList_tag');
    if ($tags.length == 0) {
      return false;
    }

    const data = getCount($tags);
    const rate = (maxOpacity - minOpacity) / (data.max - data.min);

    $tags.each((i) => {
      const $elm = $tags.eq(i);

      const op = minOpacity + rate * ($elm.data('count') - data.min);
      const fw = (op > .75) ? 'bold' : 'normal';

      $elm.css({
        opacity: minOpacity + rate * ($elm.data('count') - data.min),
        fontWeight: fw
      });
    });
  };

  const getCount = ($e) => {
    let counts = $e.map((i) => {
      return $e.eq(i).data('count');
    }).toArray();

    return {
      min: Math.min.apply(Math, counts),
      max: Math.max.apply(Math, counts)
    };
  };

  tagCloud();
});
