const OptionsItem = ({ index, item, optionsQueries, width }) => {
  return (
    <li
      key={`option${index}`}
      className="section-options-list-item"
      style={{
        width: `${optionsQueries[width]}`,
      }}
    >
      <figure className="section-options-list__card">
        <img src={item.img} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </li>
  );
};

export default OptionsItem;
