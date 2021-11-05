const BannerListItem = ({ item, index, listIndex }) => {
    return (
        <div
          className={index === listIndex ? "slide isActiveSlider" : "slide"}
        >
          <picture>
            <source srcSet={item.bigImage} media="(min-width: 768px)" />
            <img src={item.smallImage} alt={`img-${index}`} />
          </picture>
        </div>
    )
}

export default BannerListItem
